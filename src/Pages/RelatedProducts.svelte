<script>



    export let productImgs;
    export let title;
    export let price;



</script>

<div class='column is-3'>
  <div class="card">
      <div class="card-image is-clickable">
          <figure class='image is-3by2'>
              <img src={productImgs} alt="producto" />
          </figure>
          
      </div>
  
      <div class="card-content">
          <div class="media-content">
              <p class="title is-4">{title}</p>
              <p class='subtitle is-6'>{price}</p>
          </div>
          <div>
              <footer class='card-footer'>
                  <p class='card-footer-item is-size-7'>
                  <button class="button is-danger is-fullwidth">Add to cart</button> 
                      </p>
              </footer>
          </div>
      </div>
  </div>
</div>

<style>
 
</style>