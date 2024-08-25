<script lang="ts">
	import HeaderPortraits from './HeaderPortraits.svelte';
	import HeaderSocial from './HeaderSocial.svelte';
	import HeaderNav from './HeaderNav.svelte';

	export let gridarea: string;
	export let data: any;

	let caption: any;
</script>

<div id="header" style="grid-area: {gridarea};">
	<header>
		<hgroup>
			<h1>{data.title}</h1>
			<p>{@html caption}</p>
			<p>{@html data.tagline}</p>
		</hgroup>
		<HeaderPortraits data={data.portraits} bind:caption={caption}/>
		<HeaderSocial />
	</header>
	<HeaderNav />
</div>

<style>
	/* ==========================================================================
   Component styling
   ========================================================================== */
	#header {
		/* Positioning */
		position: sticky;
		top: var(--vpadding);
		/* Display & Box Model */
		display: grid;
		grid-template-areas:
			'header header'
			'.      nav   ';
		grid-template-columns: 200px 200px;
		grid-template-rows: auto 1fr;
		/* Other */
	}

	header {
		/* Positioning */
		grid-area: header;
		/* Display & Box Model */
		display: flex;
		flex-wrap: wrap;
		flex-direction: row-reverse;
		/* Other */
	}

	hgroup {
		flex-basis: 70%;
	}

	hgroup > h1 {
		color: var(--header-heading);
	}

	header > hgroup > p:first-of-type {
		font-size: 18px;
		color: var(--header-subheading);
	}

	hgroup > p:last-of-type {
		color: var(--header-description);
		padding: 2px 0;
	}
</style>
