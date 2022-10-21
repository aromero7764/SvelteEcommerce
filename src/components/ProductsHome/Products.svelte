<script>
  import ProductsHome from "../../Pages/ProductsHome.svelte";
  import { products } from "../../store/Products.js";
  import { selectedCategoryId } from "../../store/selectedCategoryId";
  import {search} from '../../store/search'
  import {filterPrice} from '../../store/filterPrice.js'

$:console.log($filterPrice)
$:console.log($products)

let productsSelected 
/* Declaro para guardar el array de productos */
$:{
  if ($products.isLoading === false) {
    productsSelected = $products.products
  }

}

  products.getProducts();

/* eliminar filtro por categorias */
const deselectCategory = () => {
    const reset = {id: "", name: ""}
    selectedCategoryId.set(reset);
    productsSelected = $products.products
}

/* eliminar filtro por Precio */
const deselectPrice = () => {
    const reset = {min: 0, max: 0}
    filterPrice.set(reset);
    productsSelected = $products.products
}


/* listo todos los productos si no hay filtro por categoria */
  $: {
   
      if ($selectedCategoryId.id) {
        /* si existe elimino el filtro por precio */
        
        (productsSelected = $products.products.filter(
           (product) => product.category.id === $selectedCategoryId.id
         ))
         
        
      }/*  else {

         (productsSelected = $products.products); 
      } */
    }
    
 

/* varifico si hay un filtro por precio y listo los productos filtrados */
  $: {
          if ($filterPrice.max) {
            /* reseteo el filtro por categoria */
            
            
            /* realizo mi consulta */
             (productsSelected = $products.products.filter(
                  (product) => product.price >= $filterPrice.min && 
                  product.price <= $filterPrice.max    
                  
                )) 
                
          } /* else {
            
            (productsSelected = $products.products);
          } */

      } 

/* tomo el valor del store search y filtro los productos que cumplan esa condicion */
  $: {
    if ($search) {
      /* elimino filtro por precio y por producto */
      filterPrice.set({min: 0, max: 0});
      selectedCategoryId.set({id: "", name: ""});

      (productsSelected = $products.products.filter(
            (product) => {
              const title = product.title.toLowerCase()
              const description = product.description.toLowerCase()
              const buscar = $search.toLocaleLowerCase()

              return title.indexOf(buscar) > -1 || description.indexOf(buscar) > -1;
            } 
          ))
        
    }
    
  }

</script>

<!-- la lista de productos me la traigo de un estado -->
{#if ($selectedCategoryId.name) }
<div class="mb-3">
<span class="tag is-medium">
  {$selectedCategoryId.name}
  <button on:click={deselectCategory} class="delete is-small"></button>
</span>
</div>
{/if}

<!-- filtro por precio -->
{#if ($filterPrice.max) }
   
<div class="mb-3">
<span class="tag is-medium">
  Price {$filterPrice.min} to {$filterPrice.max}
  <button on:click={deselectPrice} class="delete is-small"></button>
</span>
</div>
{/if}

<div class="columns is-multiline">
  
  {#if $products.isLoading === false}
    {#each productsSelected as { title, price, productImgs, category }}
      <ProductsHome {title} {price} {productImgs} {category}  />
    {/each}
  {/if}
</div>
