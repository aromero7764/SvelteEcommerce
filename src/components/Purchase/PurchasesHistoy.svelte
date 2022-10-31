<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import NavBaruser from "../NavBarUser/NavBaruser.svelte";
  import getConfig from "../../utils/getConfig";
  import { dataset_dev } from "svelte/internal";

  const token = localStorage.getItem("token");
  let alldata;
  let isLoading = true;

  onMount(() => {
    if (!token) {
      alert("please login to see your Purchase History");
      navigate("/login");
    } else {
      isLoading = true;

      axios
        .get(
          "https://e-commerce-api.academlo.tech/api/v1/purchases",
          getConfig()
        )
        .then((res) => (alldata = res.data.data.purchases))
        .catch((err) => console.log(err.data))
        .finally(() => {
          isLoading = false;
        });
    }
  });
</script>

<NavBaruser />

<div class="container mt-7">
  
  <div class="container mt-6 pt-6">
    <h1 class="subtitle">
      
This is your purchases history
    </h1>
    
    <aside>

{#if isLoading}
  Loading...
{:else}
  <!-- else content here -->
 
  {#each alldata as data}
    <!-- content here -->
    
          <div class="box" id="cart">
            <!--      <h1 class="title is-4 mb-2">este es un h1</h1> -->

            <div class="cart-table">
              <div class="columns is-hidden-mobile">
                <div class="column is-5">
                  Purchase Date: {data.createdAt}
                </div>

                <div class="column is-4 has-text-centered has-text-weight-bold">
                  Quantity
                </div>
                <div class="column is-3 has-text-right has-text-weight-bold">
                  Total
                </div>
              </div>

              <div>
                {#each data.cart.products as product}
                  <div class="is-hidden-mobile line-item-desktop">
                    <div class="columns">
                      <div class="column is-5 is-size-6">
                        <p class="mb-1">
                          <strong> {product.title}</strong>
                        </p>
                        <div class="mb-1">
                          <div class="is-size-6">
                            <p>Price: $ {product.price}</p>
                          </div>
                        </div>
                      </div>

                      <div class="column is-4 has-text-centered">
                        <p class="has-text-centered is-small">
                          {product.productsInCart.quantity}
                        </p>
                      </div>
                      <div class="column is-3 has-text-right">
                        ${product.productsInCart.quantity * product.price}.00
                      </div>
                    </div>
                  </div>
                  <div class="is-hidden-tablet line-item-mobile">
                    <div class="columns is-mobile">
                      <div class="column">
                        <a href="/" class="mb-1">
                          <strong>{product.title}</strong></a
                        >
                        <div class="mb-1">Price: $ {product.price}</div>

                        <div
                          class="line-item-quantity-control field has-addons"
                        >
                          <div class="control">
                            <p class="input has-text-centered">
                              {product.productsInCart.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
              <div class="columns is-hidden-mobile">
                <div class="column is-6 is-offset-6 has-text-right">
                  <p>
                    Subtotal: <span class="is-size-4"
                      >$

                      {data.cart.products.reduce(
                        (acumulador, producto) =>
                          acumulador +
                          producto.productsInCart.quantity * producto.price,
                        0
                      )}.00
                    </span>
                    <br />

                    <br />
                  </p>
                </div>
              </div>

              <div class="columns is-hidden-tablet">
                <div class="column is-hidden-tablet">
                  <p>
                    Subtotal: <span class="is-size-4"> $
                      {data.cart.products.reduce(
                        (acumulador, producto) =>
                          acumulador +
                          producto.productsInCart.quantity * producto.price,
                        0
                      )}.00</span
                    >
                    <br />

                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
       
  {/each}
{/if}

</aside>
</div>
</div>

<style>


</style>