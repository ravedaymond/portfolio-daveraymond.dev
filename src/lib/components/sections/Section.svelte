<script lang="ts">
	import { onMount } from "svelte";

	export let id: string;
</script>

<section {id}>
	<hgroup>
		<slot name="heading">
			<h2>Section Title</h2>
		</slot>
		<slot name="subheading" />
		<slot name="tagline" />
	</hgroup>
	<slot />
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		padding-top: var(--vpadding);
	}

	section::before {
		content: '';

		position: absolute;
		bottom: 0;
		left: -1em;

		display: flex;
		height: calc(100% - var(--vpadding));
		border: 1px solid var(--main-section-border);
		border-radius: 4px;
	}

	hgroup {
		display: flex;
		flex-direction: column;
	}

	#about > :global(p) {
		margin: 8px 0;
	}
</style>
