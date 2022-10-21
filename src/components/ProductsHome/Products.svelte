<script>
  import ProductsHome from "../../Pages/ProductsHome.svelte";
  import { products } from "../../store/Products.js";
  import { selectedCategoryId } from "../../store/selectedCategoryId";
  import {search} from '../../store/search'
  import {filterPrice} from '../../store/filterPrice.js'

$:console.log($filterPrice)
$:console.log($products)


  /* products.getProducts(); */
  let productsSelected;
  let categoryId;

  /* products.subscribe(value => {
  productsSelected = value
}) */

  products.getProducts();

  /* nececito recibir selectedCategoryId del store  */
/*   selectedCategoryId.subscribe((value) => {
    categoryId = value;
  }); */

  /* Si hay una categoria seleccionada??  */

  /* filtro por categoria */
  $: {
    if ($products.isLoading === false) {
      ($selectedCategoryId.id)
        ? (productsSelected = $products.products.filter(
            (product) => product.category.id === $selectedCategoryId.id
          ))
        : (productsSelected = $products.products);
    }
    
  }

  /* filtro por precio */
  $: {
    if ($products.isLoading === false) {
    ($filterPrice.max) ?
    
      (productsSelected = $products.products.filter(
            (product) => product.price >= $filterPrice.min && 
            product.price <= $filterPrice.max    
            
          )) :
          (productsSelected = $products.products);
        
    } }

  $: {
    if ($search) {
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

    /* Filtro por precio */

$:console.log(productsSelected)

const deselectCategory = () => {
    const reset = {id: "", name: ""}
    selectedCategoryId.set(reset);
}

const deselectPrice = () => {
    const reset = {min: 0, max: 0}
    filterPrice.set(reset);
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
