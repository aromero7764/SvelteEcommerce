<script>
import { products } from "./../../store/Products.js";

products.get();

$: {
    if($products.isLoading === false){
        console.log("$products")
    }
}

</script>

<!-- la lista de productos me la traigo de un estado -->
<div class="columns is-multiline">
  <!-- aqui va un map -->
  <!--   products.map(product => ( -->

  {#if $products.isLoading === false}

  {#each $products.products as product}
  

<!--   {#await products}
  
 {:then products}
 {#each products as {title, price, productImgs, category}} -->

 <div class="column is-4">
 <div>
   <div class="card">
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <div
       class="card-image is-clickable"
       on:click={() => alert("navigate(/product/${product.id}")}
     >
       <figure class="image">
         <img class="imageP" src={product.productImgs[0]} alt="imag-products" />
       </figure>
     </div>

     <div class="card-content">
       <div class="media-content">
         <p class="title is-4">{product.title}</p>
         <p class="subtitle is-6">{product.price}</p>
       </div>
       <div>
         <footer class="card-footer">
           <p class="card-footer-item" />
         </footer>
       </div>
       <div class="content">
         <div class="tags">
            
          

           <span class="tag">{product.category.name}</span>
    
         </div>
       </div>
       <button
         on:click={() => alert("addCart(1, product.id))")}
         class="button is-danger">Add to cart</button
       >
     </div>
   </div>
 </div>
</div>

   
{/each}

  {/if}
  

</div>

<style>
  .imageP {
    display: block;
    max-height: 200px;
    object-fit: contain;
    max-width: 400px;
    margin: 0px auto;
  }

  .card {
    min-height: 400px;
  }
</style>
