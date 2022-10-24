<script>

import { cartList } from "./../store/CartList.js";
cartList.getProductsCart()


const saludar = (id, qty) => {
  const updateNew = {
                id: id,
                newQuantity: qty, 
            }

  cartList.updateProductCart(updateNew)
 
}

$: console.log($cartList.isLoadinCart)


</script>


<button on:click={() => saludar(1, 3)}>Ejecutar hola mundo</button>

