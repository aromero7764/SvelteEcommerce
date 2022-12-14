import { writable } from "svelte/store";
import axios from 'axios';


const {update, subscribe} = writable({
  isLoading: true,
  products: [],
});


function Store(){
  const store = {
      subscribe: subscribe,
      getProducts: function(){

          update((data)=>{
              data.isLoading = true;                
              return data;
          })

          axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
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


  return store;
}


const products = Store();
export {products}