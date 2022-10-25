<script>
import { Router, Link, Route } from "svelte-routing";
import Login from "./components/Login/Login.svelte";
import ProductDetail from "./components/ProductDetail/ProductDetail.svelte";
  import PurchasesCard from "./components/Purchase/PurchasesCard.svelte";
import About from "./Pages/About.svelte";
import Home from "./Pages/Home.svelte";
    

</script>

<Router>



  <Route path='/'>
      <Home></Home>
  </Route>

  <Route path="/product/:id2"  let:params={id2}   component={ProductDetail}>
  </Route>
  <Route path="/purchases" component={PurchasesCard}>
  </Route>

  <Route path="/login" component={Login}>

  </Route>

<Route path='/About'>
  <About></About>
</Route>



</Router>



