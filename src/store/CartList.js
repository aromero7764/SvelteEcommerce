import axios from "axios";
import { writable } from "svelte/store";
import getConfig from "./../utils/getConfig";



const {update, subscribe} = writable({
  isLoadinCart: true,
  productsCart: []
});



function Store() {
  const cartLis = {
    subscribe: subscribe,
    getProductsCart: function() {
      update((data)=> {
        data.isLoadinCart = true;
        return data;
      })

      axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
        .then( res => res.data.data.cart.products)
        .then ((items) => {
          update((data) => {
            data.productsCart = items;
            data.isLoadinCart = false;
            return data;
          })
        })
        .catch( error => {
          console.log(error.response)
        })

    }
  }

  return cartLis
}

const cartList = Store()
export {cartList}
