import axios from "axios";
import { writable } from "svelte/store";
import getConfig from "./../utils/getConfig";

export default function () {
  const loading = writable(false)
  const error = writable(false)
  const data = writable({})



const getCartList = () => {
  loading.set(true)
  error.set(false)

  axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
       .then((res) => data.set (res.data.data.cart.products))
       .catch((e) => error.set(e.response))

      loading.set(false)
}

getCartList()

return [ data, loading, error, getCartList]

}