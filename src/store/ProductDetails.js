import { writable } from "svelte/store";
import axios from 'axios';


const {update, subscribe} = writable({
  isLoading: true,
  productsDetail: [],
});


function Store(){
  const store = {
      subscribe: subscribe,
      getDetailProduct: function(id){

          update((data)=>{
              data.isLoading = true;                
              return data;
          })

          axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}`)
          .then(res => res.data.data.product)
          .then((products)=>{
              update((data)=>{
                  data.productsDetail = products;
                  data.isLoading = false;
                  return data;
              })
          })
      }
  };


  return store;
}


const productDetail = Store();
export {productDetail}