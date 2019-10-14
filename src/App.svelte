<script>
	import Test from './Test.svelte';
	import Nested from './Nested.svelte';
	export let name;
</script>

<style type="text/scss">
	$title-color: black;
	h1 {
		color: $title-color;
		font-size: 4em;
		margin: 0.1em 0;
	}
	.poster-vessel {
		width: 80vw;
	}
	.title-bar {
		width: 100%;
		height: 3vh;
		background: $title-color;
	}
</style>

<div class='poster-vessel'>
	<div class='title-bar'></div>
	<h1>testwort</h1>
	<div class='title-bar'></div>
</div>
<h1>Hello {name}!</h1>
<Test/>
<Nested/>