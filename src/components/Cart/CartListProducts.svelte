
<script>
    import { cartList } from "../../store/CartList.js";
    export let title
    export let price
    export let id
    export let productsInCart



    const updateCart = (qty, id) => {
        const updateNew = {
                id: id,
                newQuantity: qty, 
            }
            
    cartList.updateProductCart(updateNew)
}




</script>




 

<div>
  <div class="is-hidden-mobile line-item-desktop">
      <div class="columns">
          <div class="column is-5 is-size-6">
              <p class="mb-1">
                  <strong> {title}</strong>
              </p>
              <div class="mb-1">
              <div class="is-size-6">
            <p>Price: $ {price}</p>
          </div>
              </div>
              <div>
                  <button on:click={()=> updateCart(0, id)} class="button is-small">
                      <span><i class="fa-regular fa-trash-can"></i></span>
                  </button>
              </div>
          </div>

          <div class="column is-4 has-text-centered">
              <div class="line-item-quantity-control field has-addons">
                  
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <p on:click={()=> updateCart((productsInCart.quantity - 1), id)} 
                      class="control">
                          <a href={null} class="button is-small"> - </a></p>
                  
                  <div class="control">
                      <p class="input has-text-centered is-small"> {productsInCart.quantity} </p> </div>
                  
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <p on:click={()=> updateCart((productsInCart.quantity + 1), id)} 
                          class="control"><a href={null} class="button is-small">+</a></p>
              </div>
          </div>
          <div class="column is-3 has-text-right">${productsInCart.quantity * price}.00 </div>

      </div>

  </div>

  <div class="is-hidden-tablet line-item-mobile">
      <div class="columns is-mobile">
          <div class="column">
              <a href="/" class="mb-1">
                  <strong>{title}</strong></a>
              <div class="mb-1">Price:  $ {price}</div>

              <div class="line-item-quantity-control field has-addons">
                  <p class="control">
                      <a href={null} on:keydown={()=> updateCart((productsInCart.quantity - 1), id)} class="button"> - </a>
                  </p>
                  <div class="control">
                      <p class="input has-text-centered"> {productsInCart.quantity} </p>
                  </div>
                  <p class="control">

                      <a href={null} on:click={()=> updateCart((productsInCart.quantity + 1), id)} class="button"> + </a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</div>


