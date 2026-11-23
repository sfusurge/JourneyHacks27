<script lang="ts">
	import { event } from '#lib/event.ts';
</script>

<svelte:head>
	<title>{event.name} | {event.organizer}</title>
	<meta name="description" content="JourneyHacks 2027, a hackathon by SFU Surge." />
</svelte:head>

<main>
	<p>{event.organizer}</p>
	<h1>{event.name}</h1>
	{#if event.applicationLinks.hacker || event.applicationLinks.mentor}
		<div class="application-links">
			{#if event.applicationLinks.hacker}
				<a href={event.applicationLinks.hacker} rel="external">Hacker application</a>
			{/if}
			{#if event.applicationLinks.mentor}
				<a href={event.applicationLinks.mentor} rel="external">Mentor application</a>
			{/if}
		</div>
	{/if}
</main>

<style>
	main {
		display: grid;
		align-content: center;
		justify-items: start;
		min-height: 100svh;
		width: min(100% - 3rem, 70rem);
		margin-inline: auto;
		padding-block: 3rem;
	}

	p {
		margin: 0 0 0.5rem;
		color: var(--color-gold);
	}

	h1 {
		margin: 0;
		font-family: var(--font-heading);
		font-size: clamp(2.5rem, 8vw, 6rem);
		line-height: 1.05;
	}

	.application-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1.5rem;
	}
</style>
