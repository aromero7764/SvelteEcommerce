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
      Filter Price
  </p>
  <div class="menu-list">

      <div class="field">
          <div class="field-label is-normal has-text-left">
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label for="from" class="label is-small">From</label>
          </div>
          <div class="field-body">
              <div class="field">
                  <div class="control is-expanded has-icons-left">
                      <input id="from" class="input is-small" type="number" placeholder="Amount" bind:value={min}
                      bind:this={inputField1} min="0"/>
                      <span class="icon is-small is-left">
                          <i class="fa-solid fa-dollar-sign"></i>
                      </span>
                  </div>
                  
              </div>
          </div>
      </div>

      <div class="field">
          <div class="field-label is-normal has-text-left">
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label for="to" class="label is-small">To</label>
          </div>
          <div class="field-body">
              <div class="field">
                  <div class="control is-expanded has-icons-left">
                      <input id="to" class="input is-small" type="number" placeholder="Amount" bind:value={max} 
                      bind:this={inputField2} min="0" />
                      <span class="icon is-small is-left">
                          <i class="fa-solid fa-dollar-sign"></i>
                      </span>
                  </div>
                  
              </div>
          </div>
      </div>


                      <button on:click={ filterValues } class="button is-primary">
                          Filter Price
                      </button>
      

  
  </div>


</div>