<script>
  // @ts-nocheck
  import ProductDescription from "./../../Pages/ProductDescription.svelte";
  import RelatedProducts from "./../../Pages/RelatedProducts.svelte";
  import NavBaruser from "./../NavBarUser/NavBaruser.svelte";
  import { productDetail } from "../../store/ProductDetails.js";
  import { products } from "../../store/Products.js";

  export let id2;
  let RelateItems;
  products.getProducts();
  productDetail.getDetailProduct(id2);

  /*  destructure desde el store */
  $: ({ title, price, description, productImgs, category } =
    $productDetail.productsDetail);

  $: {
    if ($productDetail.isLoading === false && $products.isLoading === false) {
      RelateItems = $products.products.filter(
        (product) => product.category.name === category
      );
    }
  }


</script>

{#if $productDetail.isLoading === false}
  <NavBaruser />

  <div class="container is-max-widescreen is-fluid">
    <ProductDescription {title} {price} {description} {productImgs} />
    <div class="columns is-multiline">

    {#if $products.isLoading === false}
    {#each RelateItems as { title, price, productImgs }}
      <RelatedProducts {title} {price} {productImgs}  />
    {/each}
  {/if}
     

    </div>
  </div>
{/if}
