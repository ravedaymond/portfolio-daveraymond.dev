<script lang="ts">
	export let gridarea: string;
</script>

<footer style="grid-area: {gridarea}">
	<a
		href="https://github.com/ravedaymond"
		target="_blank"
		rel="external noopener noreferrer"
		aria-label="GitHub"
	>
		Designed &amp; developed by Dave Raymond &copy; {new Date().getFullYear().toString()}
	</a>
</footer>

<style>
/* ==========================================================================
   Component styling
   ========================================================================== */
	footer {
		/* Positioning */
		position: sticky;
		top: calc(100vh - var(--vpadding) - 1em);
		/* Display & Box Model */
		width: 100%;
		height: min-content;
		/* Other */
		text-align: center;
	}

	footer a {
		text-decoration: none;
		color: var(--footer-text);
	}

	footer a:hover {
		color: var(--footer-text-hover);
	}

	@media screen and (max-width: 1100px) {
		footer {
			position: relative;
			top: calc(-1*var(--vpadding-mobile));
		}
	}
</style>
