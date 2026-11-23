<script lang="ts">
	import favicon from '#lib/assets/brand/journeyhacks-favicon.svg?url';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
</svelte:head>

{@render children()}
