<script>
import '@creativebulma/bulma-badge/dist/bulma-badge.css'
import 'bulma-extensions/bulma-quickview/dist/css/bulma-quickview.min.css'
import bulmaQuickview from 'bulma-extensions/bulma-quickview/dist/js/bulma-quickview.js'
import { onMount } from 'svelte';

onMount(() => {
    bulmaQuickview.attach()
})





</script>


        <div>
          <div id="quickviewDefault" class="quickview">
              <header class="quickview-header">
                  <p class="title">My Cart</p>
                  <span class="delete" data-dismiss="quickview"></span>
              </header>

              <div class="quickview-body">
                  <div class="quickview-block">
                <!--       {
                            (token) ? <Cart /> :
                            <Login text={"Login to See your Shoping Cart"} style={true}/>  
                            
                            }
 -->
                  </div>
              </div>

              <footer class="quickview-footer">

              </footer>
          </div>

          <a href={null} class="button  is-primary mr-3" data-show="quickview" data-target="quickviewDefault">
                          <span class="icon"><i class="fa-solid fa-cart-shopping"></i></span>
                              <span title="Badge top right" class="badge">8</span>
                               My Cart
                          </a>  

      </div>