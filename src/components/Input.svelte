<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import { dirty_components } from "svelte/internal";
  import Movies from "./Movies.svelte";

  let value = "";
  let response = [];
  let error = {}


  const getMovies = (value) => {

    axios
      .get(`http://www.omdbapi.com/?s=${value}&apikey=7436299a`)
      .then((res) => {
        response = res.data.Search || [];

      })
      .catch((err) => error = err.response);
  };

  const handleInput = (e) => (value = e.target.value);

  $: if (value.length > 2) {
    getMovies(value);
  } else {
    getMovies("")
  }

  $: console.log(response);
$: response; 
</script>

<input type="text"
      value={value} 
      on:input={handleInput} />

<button on:click={getMovies}>Obtener usuarios</button>

{#await response}
  <strong>Loading....</strong>
 {:then movies}
    {#each movies as {Title, Poster, Year }}
        <Movies
        Title={Title}
        Poster={Poster}
        Year={Year}
              />
       {:else}
       <strong>No hay resultados</strong>
      
    {/each}
    
{/await}

<style>
</style>
