<script>
  import ProductsHome from "../../Pages/ProductsHome.svelte";
  import { products } from "../../store/Products.js";

products.getProducts();
let id = 2;
let selectectProduct = [];
 

  $: {
    if ($products.isLoading === false) {
      if (id !== null) {
        const selectCategory = $products.products.filter(
          (product) => product.category.id === id
          
          );
        console.log(selectCategory);
      }
    }
  }

  
</script>

<!-- la lista de productos me la traigo de un estado -->
<div class="columns is-multiline">
  {#if $products.isLoading === false}
    {#each $products.products as { title, price, productImgs, category }}
      <ProductsHome {title} {price} {productImgs} {category} />
    {/each}
  {/if}
</div>
