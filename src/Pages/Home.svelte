<script>
import Category from "../components/Aside/Category.svelte";
import Price from "../components/Aside/Price.svelte";
import SearchBar from "../components/SeachBar/SearchBar.svelte";
import { Link } from "svelte-routing";
import Input from "../components/Input.svelte";
import NavBaruser from "../components/NavBarUser/NavBaruser.svelte";
import ProductsHome from "../components/ProductsHome/ProductsHome.svelte";

 

</script>

<div>
  <NavBaruser />

  <div class='container is-fluid'>
  <div class="columns mt-4 ">

      <div class="column is-one-fifth">
        <!-- Este es un aside -->
          <aside class="menu mt-4">
            <Price />
            <Category />
          </aside>
      </div>
      <div class="column is-9">

          <div class="block mt-6">
              <SearchBar />

              <!-- Listar todos los productos -->
              <div class="column">

                  <div>
                      
                     <ProductsHome />
                     
                  </div>
              </div>
          </div>

      </div>
  </div>
  </div>
</div>