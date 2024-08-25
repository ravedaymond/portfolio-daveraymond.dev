<script lang="ts">
	import { onMount } from 'svelte';

	export let data: any;

	onMount(() => {
		console.log(document.querySelector('nav li'));
	});
</script>

<nav>
	<ul>
		{#each Object.values(data) as item}
			<a href="#{item.header.toLowerCase()}"><li>{item.header}</li></a>
		{/each}
	</ul>
</nav>

<style>
	nav {
		/* Positioning */
		grid-area: nav;
		/* Display & Box Model */
		height: min-content;
		/* Other */
		color: var(--nav-text-inactive);
	}

	nav ul {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin: 0;
		padding: 0;
		font-size: 1.5em;
		font-weight: 200;
		list-style: none;
	}

	nav li::after {
		content: '';
		display: inline-block;
		vertical-align: middle;
		height: 0px;
		width: 16px;
		margin: 0 8px;
		border-bottom: 1px solid var(--nav-indicator-inactive);
		transition-duration: 0.3s;
	}

	nav li:hover {
		color: var(--nav-text-hover);
	}

	nav li:hover::after {
		width: 32px;
		border-color: var(--nav-indicator-hover);
	}

	nav :global(#nav-focus) {
		color: var(--nav-text-active);
	}

	nav :global(#nav-focus::after) {
		width: 32px;
		border-color: var(--nav-indicator-active);
	}
</style>
