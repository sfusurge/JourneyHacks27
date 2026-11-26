<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		onclick?: (e: MouseEvent) => void;
		highlight?: boolean;
		href?: string;
	}

	const { children, onclick, highlight = false, href }: Props = $props();
</script>

{#if href}
	<a class="button" class:highlight {href} {onclick}>
		{@render children?.()}
	</a>
{:else}
	<button class="button" class:highlight {onclick}>
		{@render children?.()}
	</button>
{/if}

<style>
	.button {
		position: relative;
		isolation: isolate;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 10px 12px;
		font-family: var(--font-heading); /* Gilroy Bold, for now Sans-serif */
		font-weight: 700;
		font-size: 24px;
		line-height: 1.25;
		white-space: nowrap;
		border-radius: 8px;

		outline: 2px solid transparent;
		outline-offset: -2px;
		filter: brightness(1);

		transition:
			outline-color 200ms ease-out,
			filter 250ms ease-out,
			color 250ms ease-out,
			background-color 250ms ease-out,
			padding 250ms ease-out,
			margin 250ms ease-out,
			border-radius 250ms ease-out;

		color: var(--color-white);
	}

	.button:hover {
		outline-color: var(--color-white);
	}
	.button:active {
		filter: brightness(0.9);
	}

	.highlight {
		padding: 12px 18px;
		border-radius: 8px;
		color: var(--color-indigo); /* #12116f */
		background-color: var(--color-amber); /* #f9bd03 */
	}

	.highlight:hover {
		padding: 15px 25px;
		margin: -3px -7px;
		border-radius: 10px;
		outline-color: transparent;
		color: var(--color-amber);
		background-color: var(--color-indigo);
	}

	@media (max-width: 767.98px) {
		.button {
			gap: 6.5px;
			padding: 10px 11px;
			font-size: 16px;
			border-radius: 6.5px;
		}

		.highlight {
			padding: 9.7px 14.6px;
		}

		.highlight:hover {
			padding: 11.7px 20.6px;
			margin: -2px -6px;
		}
	}
</style>
