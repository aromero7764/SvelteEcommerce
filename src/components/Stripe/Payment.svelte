<script>
	import { onMount } from 'svelte';
    import { loadStripe } from '@stripe/stripe-js'
    import { Elements, PaymentElement, LinkAuthenticationElement } from  'svelte-stripe'
    import { prevent_default } from 'svelte/internal';
    
let stripe = null
let elements
let clientSecret = null 
let error = null
let processing = false

    onMount(async() => {
        stripe = await loadStripe("pk_test_51KigQSKwNksKPADSI6TkYN59rJUW7gUlbpElBbNozxlpuFTS0z2Yj8YVqZGFv6cvTQABYaknQHf0uHEL9BvIjm5p001URgSD8u");

         // create payment intent server side
 clientSecret = await createPaymentIntent()
      
    })
//Create payment intent

async function createPaymentIntent() {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({})
    })
    const { clientSecret } = await response.json()

    return clientSecret
  }

/* function submit */
async function submit() {
    // avoid processing duplicates
    if (processing) return

    processing = true

    // confirm payment with stripe
    const result = await stripe
      .confirmPayment({
        elements,
        redirect: 'if_required'
      })

    // log results, for debugging
    console.log({result})

    if (result.error) {
      // payment failed, notify user
      error = result.error
      processing = false
    } else {
      // payment succeeded, redirect to "thank you" page
      console.log('/examples/payment-element/thanks')
    }
  }

</script>

<div id="formcard">
    {#if stripe}
    <Elements {stripe}
    theme="flat"
    labels="floating"
    variables={{colorPrimary: '#7c4dff'}}
    rules={{'.Input': {border: 'solid 1px #0002'}}}
    bind:elements >
        <form on:submit|preventDefault={submit} >
               <LinkAuthenticationElement />
                <PaymentElement />
        </form>
    </Elements>
    {/if}
</div>

