<script>
import CartListProducts from "./CartListProducts.svelte";
import { cartList } from "../../store/CartList.js";
import { navigate } from "svelte-routing";
  import CartIsEmpty from "./CartIsEmpty.svelte";

/* cartList.getProductsCart(); */
export let ishidden
let allCartList
let TotalSumItemsInCart

$:{
  if ($cartList.isLoadinCart === false) {
    allCartList = $allCartList

    TotalSumItemsInCart = 
    $cartList.productsCart.reduce( (acumulador, producto) => 
                        acumulador + (producto.productsInCart.quantity * producto.price) , 0)
  }

}


  
</script>

<aside>

    {#if $cartList.productsCart.length === 0}
         <CartIsEmpty />
    {:else}
         <!-- else content here -->
         
         <div class="box" id="cart">
 <!--      <h1 class="title is-4 mb-2">este es un h1</h1> -->

          <div class="cart-table" >

              <div class="columns is-hidden-mobile">
                  <div class="column is-5">
                      <a href="/" class="button is-outlined">
                          <span class="icon">
                              <i class="fas fa-arrow-left">
                              </i></span>
                      </a>
                  </div>

                  <div class="column is-4 has-text-centered has-text-weight-bold">
                      Quantity
                  </div>
                  <div class="column is-3 has-text-right has-text-weight-bold">
                      Total
                  </div>

              </div>
            {#if $cartList.isLoadinCart == true}
                 Loading...

                {:else}
                     
             {#each $cartList.productsCart as {
                title, 
                price, 
                id , 
                productsInCart,   } }

                 <CartListProducts {title} {price} {id} {productsInCart}/> 
              
                 {/each} 

            {/if}
              
              
             

              <div class="columns is-hidden-mobile">
                  <div class="column is-6 is-offset-6 has-text-right">
                      <p > Subtotal: <span class="is-size-4">${TotalSumItemsInCart}.00 </span>
                          <br />
                          <em >Shipping &amp; taxes calculated at checkout</em></p>
                      <br />
                      <button on:click={()=> navigate("/purchases")} class={`button is-medium is-danger ${(ishidden) && "is-hidden"}`}>Checkout</button>

                  </div>
              </div>

              <div class="columns is-hidden-tablet">
                  <div class="column is-hidden-tablet">
                      <p> Subtotal: <span class="is-size-4"> ${TotalSumItemsInCart}.00</span>
                          <br />
                          <em >Shipping &amp; taxes calculated at checkout</em></p>
                      <br />
                      <button class={`button is-medium is-fullwidth mb-4 is-danger ${(ishidden) && "is-hidden"}` }>Checkout</button>
                      <a href="/" class="button is-medium is-fullwidth is-outlined">
                          <span class="icon"><i class="fas fa-arrow-left">
                          </i></span>
                          <span >Continue shopping</span>
                      </a>
                  </div>
              </div>
          </div>

  </div>
    {/if}


</aside>
