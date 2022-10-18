import { writable } from "svelte/store";
import axios from 'axios';


const {update, subscribe} = writable({
  isLoading: false,
  products: [],
});


function Store(){
  const store = {
      subscribe: subscribe,
      get: function(){

          update((data)=>{
              data.isLoading = true;                
              return data;
          })

          axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
          .then(res => res.data.data.products)
          .then((products)=>{
              update((data)=>{
                  data.products = products;
                  data.isLoading = false;
                 

                  
                  return data;
              })
          })
      }
  };
console.log(store)

  return store;
  
}


const products = Store();
export {products}