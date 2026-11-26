<script lang="ts">
	import Button from '#lib/components/generic/Button.svelte';
</script>

<nav
	class="absolute top-0 right-0 left-0 z-50 flex items-center justify-between gap-4 px-9 pt-9 md:px-10 md:pt-10"
>
	<Button href="#apply" highlight>
		Apply<span aria-hidden="true">→</span>
	</Button>

	<div class="-mr-2.75 ml-auto flex items-center md:-mr-0.5 md:gap-10">
		<Button href="#about">About</Button>
		<Button href="#schedule">Schedule</Button>
		<Button href="#faq">FAQs</Button>
	</div>
</nav>
