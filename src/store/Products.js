import axios from 'axios';
import { promisable } from 'svelte-promisable-stores';
 

const fetchProducts = () => 
  axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
    .then((res) => res.data.data.products)
    .catch((err) => console.log(err.response));

    export let currentProducts ;