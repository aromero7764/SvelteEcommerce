<script>
// @ts-nocheck
import LogoutButton from "./LogoutButton.svelte";
import axios from "axios";
import { navigate } from "svelte-routing";

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

  axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
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
          Plase use this:
          <br /> 
          <b> User:</b> test2020@test.com
          <b> Pass:</b> 123456
          <br />
          
          

      </div>
  </article>
                          <label for="email"  class="label">Email</label>
                          <div class="control has-icons-left">
                              <input id="email" type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required
                              bind:value={email} 
                              bind:this={inputField1}/>
                              
                                  <span class="icon is-small is-left">
                                      <i class="fa fa-envelope"></i>
                                  </span>
                          </div>
                      </div>
                      <div class="field">
                          <label for="pass" class="label">Password</label>
                          <div class="control has-icons-left">
                              <input id="pass" type="password" placeholder="*******" class="input" required
                              bind:value={password} 
                              bind:this={inputField2}/>

                                  <span class="icon is-small is-left">
                                      <i class="fa fa-lock"></i>
                                  </span>
                          </div>
                      </div>
                      <div class="field">
                          <label for="check"  class="checkbox">
                              <input id="check" type="checkbox"/>
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