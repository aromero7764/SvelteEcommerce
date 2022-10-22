<script>
// @ts-nocheck
import LogoutButton from "./LogoutButton.svelte";
import axios from "axios";
import { navigate } from "svelte-routing";

export let text
export let style

let email
let password
let inputField1
let inputField2


const handleSubmit = (email, password) => {
  let data = {
    email: email,
    password: password
  }

  axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res=> {
                localStorage.setItem("token", res.data.data.token)
                navigate("/", { replace: false });
            } )
            
            .catch(error => {
                if(error.response?.status === 404) {
                    alert("credenciales invalidas")
                }
                console.log(error.response)
            })
 
}

</script>


<section class="hero is-primary is-fullheight">
  <div class="hero-body">
      <div class="container">
          <div class="columns is-centered">
              
              <div class={`column is-5-tablet is-4-desktop is-3-widescreen ${(style) && "nbarButton"}`}>
                  <form on:submit|preventDefault={handleSubmit(email, password)} class="box">
                      <div class="field">
                      <article class="message is-link">
      <div class="message-header">
         Alert!
          
      </div>
      <div class="message-body">
          Plase:
          <br /> 
          <b> User:</b> john@gmail.com
          <b> Pass:</b> john1234
          <br />
          
          

      </div>
  </article>
                          <label  class="label">Email</label>
                          <div class="control has-icons-left">
                              <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required
                              bind:value={email} 
                              bind:this={inputField1}/>
                              
                                  <span class="icon is-small is-left">
                                      <i class="fa fa-envelope"></i>
                                  </span>
                          </div>
                      </div>
                      <div class="field">
                          <label class="label">Password</label>
                          <div class="control has-icons-left">
                              <input type="password" placeholder="*******" class="input" required
                              bind:value={password} 
                              bind:this={inputField2}/>

                                  <span class="icon is-small is-left">
                                      <i class="fa fa-lock"></i>
                                  </span>
                          </div>
                      </div>
                      <div class="field">
                          <label  class="checkbox">
                              <input type="checkbox"/>
                                  Remember me
                          </label>
                      </div>
                      <div class="field">
                          <button class="button is-success">
                              Login
                          </button>
                      <LogoutButton />

                      </div>
                      
                  </form>
                  
              </div>
          </div>
      </div>
  </div>
</section>

<style>
  .nbarButton {
    width: 100% !important;
}
</style>