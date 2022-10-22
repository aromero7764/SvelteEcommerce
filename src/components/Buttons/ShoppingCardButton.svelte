<script>
// @ts-nocheck
import '@creativebulma/bulma-badge/dist/bulma-badge.css'
import 'bulma-extensions/bulma-quickview/dist/css/bulma-quickview.min.css'
import bulmaQuickview from 'bulma-extensions/bulma-quickview/dist/js/bulma-quickview.js'
import { onMount } from 'svelte';
import Cart from '../Cart/Cart.svelte';
import Login from '../Login/Login.svelte';
import { cartList } from "../../store/CartList.js";
  import GotToLogin from '../Login/GotToLogin.svelte';

onMount(() => {
    bulmaQuickview.attach()
})

cartList.getProductsCart()
let itemsInCart = []

const token = localStorage.getItem('token');

$: {if (token) 
    itemsInCart = $cartList.productsCart
}


</script>


        <div>
          <div id="quickviewDefault" class="quickview">
              <header class="quickview-header">
                  <p class="title">My Cart</p>
                  <span class="delete" data-dismiss="quickview"></span>
              </header>

              <div class="quickview-body">
                  <div class="quickview-block">
                 {#if (token)}
                    <Cart />
                    {:else}
                        <GotToLogin />
                 {/if}
                      
                  </div>
              </div>

              <footer class="quickview-footer">

              </footer>
          </div>

          <a href={null} class="button  is-primary mr-3" data-show="quickview" data-target="quickviewDefault">
                          <span class="icon"><i class="fa-solid fa-cart-shopping"></i></span>
                         {#if (token) }
                         <span title="Badge top right" class="badge">{itemsInCart.length}</span>
                         {/if}

                              <span>My Cart</span> 
                          </a>  

      </div>