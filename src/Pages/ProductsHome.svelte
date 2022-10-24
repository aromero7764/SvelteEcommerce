<script>
    export let productImgs;
    export let title;
    export let price;
    export let category;
    export let id;
    export let addCart;
    import { navigate } from "svelte-routing";



</script>

<div class="column is-4">
  
    <div>
      
      <div class="card">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="card-image is-clickable"
          on:click={() => navigate(`/product/${id}`)}
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
            on:click={() => addCart(1, id)}
            class="button is-danger">Add to cart</button
          >
        </div>
      </div>
    </div>
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
   