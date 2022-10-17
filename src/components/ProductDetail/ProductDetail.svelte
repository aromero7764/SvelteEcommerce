<script>
export let id;
import { onMount } from "svelte";
import axios from "axios";
import ProductDescription from "./../../Pages/ProductDescription.svelte";

let product = []


onMount(()=> {

axios
  .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
  .then((res) => { product = res.data.data.product;

  })
  .catch((err) => console.log(err.response));
})


</script>

<ProductDescription />