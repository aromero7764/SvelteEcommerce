<script>
import { Router, Link, Route } from "svelte-routing";
import ProductDetail from "./components/ProductDetail/ProductDetail.svelte";
import About from "./Pages/About.svelte";
import Home from "./Pages/Home.svelte";
    

</script>

<Router>

  <Route path='/'>
      <Home></Home>
  </Route>

  <Route path="/product/:id"  let:params={id}  component={ProductDetail}>
    
</Route>

<Route path='/About'>
  <About></About>
</Route>



</Router>



