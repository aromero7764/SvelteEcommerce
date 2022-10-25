<script>
    import { selectedCategoryId } from '../../store/selectedCategoryId.js';
    import {filterPrice} from '../../store/filterPrice.js'

let min
let max
let inputField1;
let inputField2;

    const filterValues = () => {
       const minMaxValues = {min: min, max: max}
       filterPrice.set(minMaxValues);
       inputField1.value = '';
	   inputField2.value = '';
       if(selectedCategoryId) {
        selectedCategoryId.set({id: "", name: ""});
       }
       
       
        
    }

   

</script>

 <div class="mt-6">
    
  <p class="menu-label">
      Price
  </p>
  <div class="menu-list">

      <div class="field is-horizontal">
          <div class="field-label is-normal">
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label for="from" class="label">From</label>
          </div>
          <div class="field-body">
              <div class="field">
                  <p class="control has-icons-left">
                      <input id="from" class="input" type="number" placeholder="Amount" bind:value={min}
                      bind:this={inputField1} />
                      <span class="icon is-small is-left">
                          <i class="fa-solid fa-dollar-sign"></i>
                      </span>
                  </p>
                  
              </div>
          </div>
      </div>

      <div class="field is-horizontal">
          <div class="field-label is-normal">
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label for="to" class="label">To</label>
          </div>
          <div class="field-body">
              <div class="field">
                  <p class="control has-icons-left">
                      <input id="to" class="input" type="number" placeholder="Amount" bind:value={max} 
                      bind:this={inputField2} />
                      <span class="icon is-small is-left">
                          <i class="fa-solid fa-dollar-sign"></i>
                      </span>
                  </p>
                  
              </div>
          </div>
      </div>

      <div class="field is-horizontal">
          <div class="field-label">
          <!--   Left empty for spacing --> 
          </div>
          <div class="field-body">
              <div class="field">
                  <div class="control">
                      <button on:click={ filterValues } class="button is-primary">
                          Filter Price
                      </button>
                  </div>
              </div>
          </div>
      </div>
      
  
  </div>


</div>