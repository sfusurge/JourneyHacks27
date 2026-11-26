<script lang="ts">
	import wordmark from '#lib/assets/brand/journeyhacks-wordmark.svg';
</script>

<section id="hero" class="hero">
	<p class="line">Chase for the stars at</p>
	<h1><img class="wordmark" src={wordmark} alt="JourneyHacks" /></h1>
	<p class="line">Applications open Dec 9th, 2026</p>
</section>

<style>
	.hero {
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 33.7svh;
		text-align: center;
		color: var(--color-white);
	}

	.line {
		/* Swap for your licensed font token for GT Cinetype */
		position: relative;
		z-index: 1;
		font-family: 'GT Cinetype', sans-serif;
		font-weight: 700;
		font-size: clamp(16px, 2.12vw, 32px);
		line-height: 1.1875;
		white-space: nowrap;
	}

	/* Negative margins because SVG includes extra empty space above/below the letters */
	.wordmark {
		display: block;
		width: 69.5vw;
		height: auto;
		margin: -1.54vw auto -4.23vw;
	}

	@media (max-width: 767.98px) {
		.hero {
			min-height: auto;
			padding-top: 58.7vw;
		}

		.line {
			font-size: 16px;
		}

		.wordmark {
			width: 77.1vw;
			margin: -1.24vw auto -5.1vw;
		}
	}
</style>
