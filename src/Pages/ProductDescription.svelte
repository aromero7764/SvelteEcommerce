<script>
  import { link } from "svelte-routing";
  export let title;
  export let price;
  export let description;
  export let productImgs;
  export let addCart;
  export let id;
  import Carousel from '../assets/Carousel.svelte'
 let count = 1
  

const sumCount = () => {
  count ++
}

const restCount = () => {
  if (count <= 1) return
  
    count --

}

</script>


  <div class="someSpace">
    <span />
  </div>

  <div>
    
      <nav class="breadcrumb has-succeeds-separator">
        <ul>
          <li><a href="/" use:link>Home</a></li>
          <li class="is-active">
            <a href={null} aria-current="page">{title}</a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-6">
          <div class="figure siema">
            <Carousel autoplay="4000">
            {#each productImgs as img}
            <div class="slider">
                    <img
                      class="imgProducts"
                      src={img}
                      alt="foto del producto"
                    />
            </div>
            {/each}
            <span class="control1" slot="left-control"><i class="fa-solid fa-angles-left"></i></span>
	          <span class="control1" slot="right-control"><i class="fa-solid fa-angles-right"></i></span>
          </Carousel>
          </div>
        </div>
        <div class="column">
          <h1 class="is-size-2">{title}</h1>
          <h2 class="is-size-3"><span>${price}</span></h2>
          <hr />
          <div>
            <div class="field mb-2">
              <div class="control">
                <div>
                  <div class="product-quantity">
                    <div class="heading">Quantity</div>
                    <div class="addContainer is-flex">
                      <button on:click={restCount} class="button"
                        ><i class="fa-solid fa-minus" /></button
                      >
                      <span class="px-2"> <input class="input" type="number" 
                        bind:value={count} min=1></span>
                      <button on:click={sumCount} class="button"
                        ><i class="fa-solid fa-plus" /></button
                      >
                    </div>
                    <div class="container is-1 is-flex" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <button on:click={addCart(count, id)} class="button is-danger is-fullwidth">Add to cart</button>
          <hr />

          <div><p>{description}</p></div>
          <hr />
          <div class="share-buttons level">
            <div class="level-left">
              <p class="level-item">Share:</p>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="level-item has-text-dark"
                rel="noreferrer"
              >
                <i class="fab fa-facebook-square fa-2x" /></a
              >
              <a
                href="https://twitter.com/"
                target="_blank"
                class="level-item has-text-dark"
                rel="noreferrer"
              >
                <i class="fab fa-twitter-square fa-2x" /></a
              >
              <a
                href="https://pinterest.com/"
                target="_blank"
                class="level-item has-text-dark"
                rel="noreferrer"
              >
                <i class="fab fa-pinterest-square fa-2x" /></a
              >
            </div>
          </div>
        </div>
      </div>

       
      <h1 class="title mb-3">Related Products</h1>
     

</div>

<style>
  .someSpace {
    height: 80px;
  }

  .addContainer {
    width: 50px;
  }

  .imgProducts {
    max-width: 640px;
    max-height: 640px;

  }

  .control1 {
  font-size: 17px;
}

.input {
  width: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
input[type=number] { -moz-appearance:textfield; }



</style>
