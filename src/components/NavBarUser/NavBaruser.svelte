<script>
  import 'bulma/bulma.sass'
  import { navigate } from 'svelte-routing';
  import PurchasesButton from '../Buttons/PurchasesButton.svelte';
  import ShoppingCardButton from '../Buttons/ShoppingCardButton.svelte';
  


let isActive = false

const token = localStorage.getItem('token');



const logout = ()=> {
        localStorage.setItem("token", "");
        /* navigate("/", { replace: true }) */
    }


</script>

<nav class="navbar is-primary has-shadow is-fixed-top" aria-label="main navigation">
  <div class="navbar-brand">
      <a class='title has-text-white' href="/">E-commerce</a>

      <a on:click={() => isActive = !isActive} href={null} role="button" class="navbar-burger" aria-label="menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a>
  </div>

  <div class={`navbar-menu ${(isActive) && "is-active"}`}>
      <div class="navbar-end">

      <a href="/" class="navbar-item">
      <span  class="icon"> <i class="fa-solid fa-house"></i></span>
 <span> Home</span></a>
{#if (!token)}

<a  href={null}  on:click={()=> navigate("/login")} class="navbar-item">
  <span  class="icon"> <i class="fa-solid fa-user"></i></span>
<span> Login</span></a>

{:else}
<a  href="/" on:click={logout} class="navbar-item">
  <span  class="icon"> <i class="fa-solid fa-right-to-bracket"></i></span>
<span> Logout </span></a>

<a href={null} class="navbar-item">
  <PurchasesButton />
        </a>

{/if}
      


      
     

      <a href={null} class="navbar-item">
 <ShoppingCardButton />
      </a>
      

      </div>
  </div>
</nav>