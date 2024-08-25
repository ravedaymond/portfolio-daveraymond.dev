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
		top: calc(100vh - var(--vpadding));
		/* Display & Box Model */
		height: min-content;
		/* Other */
	}

	footer a {
		text-decoration: none;
		color: var(--footer-text);
	}

	footer a:hover {
		color: var(--footer-text-hover);
	}
</style>
