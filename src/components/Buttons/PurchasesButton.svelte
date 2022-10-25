<script>
import { navigate } from "svelte-routing";

</script>



<a href={null} on:click={()=> navigate("/purchaseshistory")} class="navbar-item is-primary">
  <span  class="icon"> <i class="fa-solid fa-store"> </i></span>
 <span>My Purchases</span>
                     
</a>