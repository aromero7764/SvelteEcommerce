<script>
import { onMount } from "svelte";
import axios from "axios";
import {selectedCategoryId } from "../../store/selectedCategoryId"
import { filterPrice } from "../../store/filterPrice";

/*  para este varlo al store */
let categoryId





let categories = [];


  onMount(() => {
    axios
      .get(
        //"https://e-commerce-api.academlo.tech/api/v1/products/categories"
        "https://dummyjson.com/products/categories"
      )
      .then((res) => {
        //categories = res.data.data.categories || [];
        categories = res.data || []
      })
      .catch((err) => console.log(err.response));
  });

  function selectCategory(value, nameId, slug) {
    const newCategory = {id: value, name: nameId, slug}
    selectedCategoryId.set(newCategory);
    if ($filterPrice) {
      filterPrice.set({min: 0, max: 0});
    }
    
}

</script>

<div>
  <p class="menu-label mt-1">Category</p>
  <ul class="menu-list">
    {#await categories}
      <strong>Loading....</strong>
    {:then categories}
      {#each categories as {id, name, slug}}
        <li>
          <a on:click={() => selectCategory(id, name, slug)} 
                href={null}>{name}</a
          >
        </li>
      {/each}
    {/await}
  </ul>
</div>
