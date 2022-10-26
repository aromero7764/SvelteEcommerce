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
    <a class="navbar-item" href="/">
      <img src="https://i.ibb.co/gJrmpq4/online-shop.png" alt="ECOMERCE"  height="28" >
      <span class="subtitle ml-1">e-COMMERCE</span> 
    </a>

    

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


  <PurchasesButton />
        

{/if}
      


      
     

<!--   <div href={null} class="navbar-item bdg"> -->
 <ShoppingCardButton  />
<!--   </div>  -->   
      

      </div>
  </div>
</nav>

<style>
  .bdg {
    display: inline-flex;
  }

  .subtitle{
      color: white;
      font-weight: 600;
      
  }
</style>