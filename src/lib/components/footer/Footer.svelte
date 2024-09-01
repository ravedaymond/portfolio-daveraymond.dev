<script lang="ts">
	export let gridarea: string;
</script>

<footer style="grid-area: {gridarea}">
	<p>
		<a
			href="https://github.com/ravedaymond"
			target="_blank"
			rel="external noopener noreferrer"
			aria-label="GitHub"
		>
			Designed &amp; developed by Dave Raymond &copy; {new Date().getFullYear().toString()}
		</a>
	</p>
	<p>
		This website was built using <a href="https://svelte.dev/" target="_blank" rel="external noopener noreferrer nofollow">Svelte</a> and utilizes
		<a href="https://web3forms.com/" target="_blank" rel="external noopener noreferrer nofollow">Web3Forms</a> and <a href="https://www.hcaptcha.com/" target="_blank" rel="external noopener noreferrer nofollow">hCaptcha</a>.
	</p>
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
		text-align: left;
	}

	footer p {
		text-decoration: none;
		color: var(--footer-text);
	}

	footer a:hover {
		color: var(--footer-text-hover);
	}

	p {
		margin: 8px 0;
	}

	@media screen and (max-width: 1100px) {
		footer {
			position: relative;
			top: calc(-1 * var(--vpadding-mobile));
		}
	}
</style>
