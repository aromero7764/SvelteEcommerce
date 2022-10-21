<script>
import { onMount } from "svelte";
import axios from "axios";
import {selectedCategoryId } from "../../store/selectedCategoryId"

/* enecesito para este varlo al store */
let categoryId





let categories = [];


  onMount(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => {
        categories = res.data.data.categories || [];
      })
      .catch((err) => console.log(err.response));
  });

  function selectCategory(value, nameId) {
    const newCategory = {id: value, name: nameId}
    selectedCategoryId.set(newCategory);
}

</script>

<div>
  <p class="menu-label">Category</p>
  <ul class="menu-list">
    {#await categories}
      <strong>Loading....</strong>
    {:then categories}
      {#each categories as {id, name}}
        <li>
          <a on:click={() => selectCategory(id, name)} 
                href={null}>{name}</a
          >
        </li>
      {/each}
    {/await}
  </ul>
</div>
