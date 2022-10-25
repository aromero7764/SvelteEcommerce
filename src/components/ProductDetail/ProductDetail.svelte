<script>
  // @ts-nocheck
  import ProductDescription from "./../../Pages/ProductDescription.svelte";
  import RelatedProducts from "./../../Pages/RelatedProducts.svelte";
  import NavBaruser from "./../NavBarUser/NavBaruser.svelte";
  import { productDetail } from "../../store/ProductDetails.js";
  import { products } from "../../store/Products.js";
  import ProductsHome from "./../../Pages/ProductsHome.svelte";
  import { cartList } from "../../store/CartList.js";
  const token = localStorage.getItem('token');

  export let id2;
  let newItem
  let RelateItems = [];
  products.getProducts();
  productDetail.getDetailProduct(id2);

  /*  destructure desde el store */
  $: ({ title, price, description, productImgs, category, id } =
    $productDetail.productsDetail);

  $: {
    if ($productDetail.isLoading === false && $products.isLoading === false) {
      RelateItems = $products.products.filter(
        (product) => product.category.name === category && product.id !== id
      );
    
    }
  }



  const addCart = (qty, id) => {
    const addNew = {
            id: id,
            quantity: qty
        }     
         if (!token) {
            alert("please login to add products to your cart")
            navigate("/login")
        
         } else {
          
          cartList.AddProductToCart(addNew);
         }
    }


</script>

{#if $productDetail.isLoading === false}
  <NavBaruser />

  <div class="container is-max-widescreen is-fluid">
    <ProductDescription {title} {price} {description} {productImgs} {addCart} {id}  />
    <div class="columns is-multiline">

    {#if $products.isLoading === false}
    {#each RelateItems as { title, price, productImgs, category, id }}
      <ProductsHome  {title} {price} {productImgs} {category} {id} {addCart}  />
    {/each} 
    {/if}
   </div>
  </div>
  {/if}
     
<style>
.container.is-fluid {
    width: 93%; 
  }

</style>