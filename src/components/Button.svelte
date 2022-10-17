<script>
export let contador = 0

const handleClick = (/** @type {number} */ params) => {
 contador =  contador + params
}

</script>

contador{contador}

<button on:click={()=> handleClick(10)}>Incrementar contador</button>


<style>

</style>

