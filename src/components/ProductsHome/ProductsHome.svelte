

<script>
  import { onMount } from "svelte";
  import axios from "axios";

let products = []

    onMount(()=> {

    axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
      .then((res) => { products = res.data.data.products || [] ;

      })
      .catch((err) => console.log(err.response));
  }

    )

    console.log(products)
</script>

<!-- la lista de productos me la traigo de un estado -->
<div class="columns is-multiline">
  <!-- aqui va un map -->
  <!--   products.map(product => ( -->

  {#await products}
  <strong>Loading....</strong>
 {:then products}
 {#each products as {title, price, productImgs, category}}

 <div class="column is-4">
 <div>
   <div class="card">
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <div
       class="card-image is-clickable"
       on:click={() => alert("navigate(/product/${product.id}")}
     >
       <figure class="image">
         <img class="imageP" src={productImgs[0]} alt="imag-products" />
       </figure>
     </div>

     <div class="card-content">
       <div class="media-content">
         <p class="title is-4">{title}</p>
         <p class="subtitle is-6">{price}</p>
       </div>
       <div>
         <footer class="card-footer">
           <p class="card-footer-item" />
         </footer>
       </div>
       <div class="content">
         <div class="tags">
            
          

           <span class="tag">{category.name}</span>
    
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
 
{/await}


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
