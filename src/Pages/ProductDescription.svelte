<script>
  import { link } from "svelte-routing";
  export let title;
  export let price;
  export let description;
  export let productImgs;
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
          <div class="figure">
            <img
              class="imgProducts"
              src={productImgs[0]}
              alt="foto del producto"
            />
          </div>
        </div>
        <div class="column">
          <h1 class="is-size-2">{title}</h1>
          <h2 class="is-size-3"><span>{price}</span></h2>
          <hr />
          <div>
            <div class="field mb-2">
              <div class="control">
                <div>
                  <div class="product-quantity">
                    <div class="heading">Quantity</div>
                    <div class="addContainer is-flex">
                      <button class="button"
                        ><i class="fa-solid fa-minus" /></button
                      >
                      <span class="px-2"> <p class="title">1</p> </span>
                      <button class="button"
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
          <button class="button is-danger is-fullwidth">Add to cart</button>
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

       
      <h1 class="title">Related Products</h1>
     

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
</style>
