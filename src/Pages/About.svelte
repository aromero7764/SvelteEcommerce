<script>
// @ts-nocheck

	import Carousel from '../assets/Carousel.svelte'
	
	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
</script>

<Carousel autoplay="2000">
	{#each colors as color, index (index)}
	  <div style="background-color: {color}" />
	{/each}
	<span slot="left-control">Left</span>
	<span slot="right-control">Right</span>
</Carousel>

<style>
	div {
		height: 15rem;
		width: 100%;
	}
	
	span {
		display: inline-block;
		margin-top: 6rem;
	}
</style>