<script>
  import axios from "axios";
  import getConfig from "./../../utils/getConfig";
  import NavBaruser from "../NavBarUser/NavBaruser.svelte";
  import { navigate } from "svelte-routing";
  import Cart from "../Cart/Cart.svelte";
  import { cartList } from "../../store/CartList.js";
  import { toast} from 'bulma-toast'


  let street
  let colony
  let zipCode
  let city
  let references

  const handleSubmit = (street, colony, zipCode, city, references) => {

    const data = {
      "street": street,
      "colony": colony,
      "zipCode": zipCode,
      "city": city,
      "references": references 
    } 

    cartList.deleteProductsToCart(data)
    toast({
    message: "YOUR ORDER HAS BEEN RECEIVED",
    type: 'is-success',
    position: "bottom-right",
    dismissible: true,
    pauseOnHover: true,
  })
    navigate("/")
  }



</script>


<div>
  <NavBaruser />

  <div class="container is-fluid is-max-desktop mt-5">
      <h1 class='subtitle has-text-link-dark'>Please enter the following information to process your order!</h1>
      <div class="columns wrap mt-4">
          <div class="main column is-6">
          
              <div class="field is-horizontal">
                  <div class="field-label is-normal">
                      <label class="label">Contact Info</label>
                  </div>
                  <div class="field-body">
                      <div class="field">
                          <p class="control is-expanded has-icons-left">
                              <input class="input" type="text" placeholder="Name" />
                              
                              <span class="icon is-small is-left">
                                  <i class="fas fa-user"></i>
                              </span>
                          </p>
                      </div>
                      <div class="field">
                          <p class="control is-expanded has-icons-left has-icons-right">
                              <input class="input is-success" type="email" placeholder="Email"/>
                              <span class="icon is-small is-left">
                                  <i class="fas fa-envelope"></i>
                              </span>
                              <span class="icon is-small is-right">
                                  <i class="fas fa-check"></i>
                              </span>
                          </p>
                      </div>
                  </div>
              </div>

              <div class="field is-horizontal">
                  <div class="field-label is-normal">
                      <label class="label">Street</label>
                  </div>
                  <div class="field-body">
                      <div class="field">
                          <div class="control">
                              <input class="input is-danger" type="text" placeholder="e.g. Barranca"
                              bind:value={street}/>
                          </div>
                          <p class="help is-danger">
                              This field is required
                          </p>
                      </div>
                  </div>
              </div>

              <div class="field is-horizontal">
                  <div class="field-label is-normal">
                      <label class="label">Colony</label>
                  </div>
                  <div class="field-body">
                      <div class="field">
                          <div class="control">
                              <input class="input is-danger" type="text" placeholder="e.g. Ciudadela"
                              bind:value={colony} />
                          </div>
                          <p class="help is-danger">
                              This field is required
                          </p>
                      </div>
                  </div>
              </div>

              <div class="field is-horizontal">
                  <div class="field-label is-normal">
                      <label class="label"></label>
                  </div>
                  <div class="field-body">
                      <div class="field">
                          <p class="control is-expanded has-icons-left">
                              <input class="input" type="number" placeholder="Zip Code"
                              bind:value={zipCode}
                              />
                              
                              <span class="icon is-small is-left">
                              <i class="fa-brands fa-nfc-directional"></i>
                              </span>
                          </p>
                      </div>
                      <div class="field">
                          <p class="control is-expanded has-icons-left has-icons-right">
                              <input class="input is-success" type="text" placeholder="city"
                              bind:value={city} />
                              <span class="icon is-small is-left">
                              <i class="fa-solid fa-city"></i>
                              </span>
                              
                          </p>
                      </div>
                  </div>
              </div>

              <div class="field is-horizontal">
                  <div class="field-label is-normal">
                      <label class="label">Reference</label>
                  </div>
                  <div class="field-body">
                      <div class="field">
                          <div class="control">
                              <textarea class="textarea" placeholder="Explain how we may go to your direction"
                              bind:value={references}></textarea>
                          </div>
                      </div>
                  </div>
              </div>




              <div class="field is-horizontal">
                  <div class="field-label">
                     <!-- Left empty for spacing --> 
                  </div>
                  <div class="field-body">
                      <div class="field">
                          <div class="control">
                              <button on:click={() => handleSubmit(street, colony, zipCode,
                              city, references )} class="button is-primary">
                              Place your order
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          
      </div>
      <aside class="sidebar is-4">
          <Cart ishidden={"is-hidden"}/>
      </aside>
  </div>

</div>


</div>




