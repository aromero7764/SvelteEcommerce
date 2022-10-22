





 

<div>
  <div class="is-hidden-mobile line-item-desktop">
      <div class="columns">
          <div class="column is-5 is-size-6">
              <p class="mb-1">
                  <strong> {item.title}</strong>
              </p>
              <div class="mb-1">
              <div class="is-size-6">
            <p>Price: $ {item.price}</p>
          </div>
              </div>
              <div>
                  <button onClick={()=> updateCart(0, item.id)} class="button is-small">
                      <span><i class="fa-regular fa-trash-can"></i></span>
                  </button>
              </div>
          </div>

          <div class="column is-4 has-text-centered">
              <div class="line-item-quantity-control field has-addons">
                  
                  <p onClick={()=> updateCart((item.productsInCart.quantity - 1), item.id)} 
                      class="control">
                          <a class="button is-small"> - </a></p>
                  
                  <div class="control">
                      <p class="input has-text-centered is-small"> {item.productsInCart.quantity} </p> </div>
                  
                  <p onClick={()=> updateCart((item.productsInCart.quantity + 1), item.id)} 
                          class="control"><a class="button is-small">+</a></p>
              </div>
          </div>
          <div class="column is-3 has-text-right">${item.productsInCart.quantity * item.price}.00 </div>

      </div>

  </div>

  <div class="is-hidden-tablet line-item-mobile">
      <div class="columns is-mobile">
          <div class="column">
              <a href="/" class="mb-1">
                  <strong>{item.title}</strong></a>
              <div class="mb-1">Price:  $ {item.price}</div>

              <div class="line-item-quantity-control field has-addons">
                  <p class="control">
                      <a onClick={()=> updateCart((item.productsInCart.quantity - 1), item.id)} class="button"> - </a>
                  </p>
                  <div class="control">
                      <p class="input has-text-centered"> {item.productsInCart.quantity} </p>
                  </div>
                  <p class="control">

                      <a onClick={()=> updateCart((item.productsInCart.quantity + 1), item.id)} class="button"> + </a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</div>


