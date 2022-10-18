<script>
import { onMount } from "svelte";
import axios from "axios";


let categories = [];

  const setCategory = (prop) => {
    console.log(prop);
  };

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

  console.log(categories);

</script>

<div>
  <p class="menu-label">Category</p>
  <ul class="menu-list">
    {#await categories}
      <strong>Loading....</strong>
    {:then categories}
      {#each categories as category}
        <li>
          <a on:click={() => setCategory(category.id)} href={null}
            >{category.name}</a
          >
        </li>
      {/each}
    {/await}
  </ul>
</div>
