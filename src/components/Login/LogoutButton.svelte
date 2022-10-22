<script>
  import { navigate } from "svelte-routing";


const logout = ()=> {
        localStorage.setItem("token", "");
        navigate("/")
    }

</script>

<button on:click={logout} class="button is-danger">
  Logout
</button>