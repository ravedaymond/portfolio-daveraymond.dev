<script lang="ts">
	import { onMount } from 'svelte';

	export let data: any[];

	onMount(() => {
		document.querySelector('nav li')?.setAttribute('id', 'nav-focus');
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

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin: 0;
		padding: 0;
		font-size: 1.5em;
		font-weight: 200;
		list-style: none;
	}

	li::after {
		content: '';
		display: inline-block;
		vertical-align: middle;
		height: 0px;
		width: 16px;
		margin: 0 8px;
		border-bottom: 1px solid var(--nav-indicator-inactive);
		transition-duration: 0.3s;
	}

	li:hover {
		color: var(--nav-text-hover);
	}

	li:hover::after {
		width: 32px;
		border-color: var(--nav-indicator-hover);
	}

	:global(#nav-focus) {
		color: var(--nav-text-active);
	}

	:global(#nav-focus::after) {
		width: 32px;
		border-color: var(--nav-indicator-active);
	}

	@media screen and (max-width: 1100px) {
		nav {
			display: none;	
		}
	}
</style>
