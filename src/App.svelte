<script>
import { Router, Link, Route } from "svelte-routing";
import About from "./Pages/About.svelte";
import Home from "./Pages/Home.svelte";
import Users from "./Pages/Users.svelte";

</script>

<Router>

  <Route path='/'>
      <Home></Home>
  </Route>

  <Route path='/Users'>
    <Users></Users>
</Route>


<Route path='/About'>
  <About></About>
</Route>



</Router>



