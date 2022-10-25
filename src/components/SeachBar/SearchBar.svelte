<script>
import {search} from '../../store/search'

</script>


<div class="field has-addons">
  <div class="control is-expanded has-icons-right">
      <input class="input" type="text" placeholder="What are you looking for?"
      bind:value={$search}/>

      <span class="icon is-small is-right">
        <i class="fa-solid fa-magnifying-glass"></i>
    </span>
  </div>
</div>