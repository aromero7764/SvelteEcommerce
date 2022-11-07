<script>
    export let productImgs;
    export let title;
    export let price;
    export let category;
    export let id;
    export let addCart;
    import { navigate, Link } from "svelte-routing";

    function handleMouseOver(e) {
        e.target.src = productImgs[1]
    }

    function handleMouseOut (e) {
      e.target.src = productImgs[0]
    }

</script>

<div class="column is-4">
  
   
      
      <div class="card">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <a href={null} on:click={navigate(`/product/${id}`)} class="card-image is-clickable"
           >
          <figure id="cf" class="image cf">
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <img class="imageP top" src={productImgs[0]} alt="imag-products"
            on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}/>
           
          </figure>
        </a>
   
        <div class="card-content">
          <div class="media-content mb-1">
            <h2 class="title is-5 titleproduct">{title}</h2>
            <p class="subtitle is-6 has-text-right">${price}</p>
          </div>
       
            <footer class="card-footer">
            <div class="content mt-1">

               <span class="tag">{category.name}</span> 
              <button
              on:click={() => addCart(1, id)}
              class="button is-danger">
              <span class="icon is-small">
                <i class="fa-solid fa-cart-plus"></i>
              </span>

              </button> 
            
            </div>
            
            </footer>
          
        </div>
      </div>
    </div>
   

   
   <style>
    .imageP {
      display: block;
      max-height: 200px;
      object-fit: contain;
      max-width: 400px;
      margin: 0px auto;
     
    }

  
  
    .card {
      min-height: 335px;
      height: 335px;
    }

    .card {
      position: relative;
      overflow: hidden;
    }

    .card:hover button {
      display: inline;
      transform: translateX(0);
          
    }


    button {
      display: block;
      position: absolute;
      border-radius: 50px;
      top: .5em;
      right: .5em;
      box-shadow: 0 4px 6px rgba(0,0,0,.2), 0 8px 12px rgba(0,0,0,.1);
      transform: translateX(150%);
      transition: transform .5s ease;
      
    }

    .titleproduct {
      display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
    }


  </style>
   