<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import { products } from "../../store/Products.js";
  
  let categories = []
  products.get();
  
     
  </script>
  
  <div>
    <p class="menu-label">
        Category
    </p>
    <ul class="menu-list">
      {#await $products}
      <strong>Loading....</strong>
     {:then $products}
     {#each $products.products as {category}}
     <li><a href={null}>{category}</a></li>
  
        {/each}
   
        {/await}
    </ul>
  </div>
  