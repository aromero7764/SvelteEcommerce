<script>
import {search} from '../../store/search'

</script>


<div class="field has-addons">
  <div class="control is-expanded">
      <input class="input" type="text" placeholder="What are you looking for?"
      bind:value={$search}/>
  </div>
  <div class="control">
      <a href={null} class="button is-info">
         <i class="fa-solid fa-magnifying-glass"></i>
      </a>
  </div>
</div>