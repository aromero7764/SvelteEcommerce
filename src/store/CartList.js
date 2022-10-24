import axios from "axios";
import { writable } from "svelte/store";
import getConfig from "./../utils/getConfig";




const {update, subscribe} = writable({
  isLoadinCart: true,
  productsCart: [],
  errormessage: ""
});



function Store() {
  const cartLis = {
    subscribe: subscribe,
    getProductsCart: function() {
      /* update((data)=> {
        data.isLoadinCart = true;
        return data;
      }) */

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

    },

    updateProductCart: function(updateNew) {
     /*  update((data)=> {
        data.isLoadinCart = true;
        return data;
      }) */

      axios
      .patch(
        "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
        updateNew,
        getConfig()
      )
      .then(() => cartList.getProductsCart())
      .catch((error) => console.log(error.response))

    },

    AddProductToCart: function(addNew) {
       axios
       .post(
         "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
         addNew,
         getConfig()
       )
       .then(() => cartList.getProductsCart())
       .catch((error) => console.log(error.response.data.message) )
       
     }

  }

  return cartLis
}

const cartList = Store()
export {cartList}
