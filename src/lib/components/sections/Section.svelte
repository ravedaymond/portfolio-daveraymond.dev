<script lang="ts">
	import { onMount } from 'svelte';

	export let id: string;
	onMount(() => {
		const hgroups = document.querySelectorAll('main > section > hgroup:not(.sr-only)');

		let intersectingHeader: Element;
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						intersectingHeader?.removeAttribute('id');
						intersectingHeader = entry.target;
						intersectingHeader.setAttribute('id', 'mobile-sticky-header');
					} else {
						entry.target.removeAttribute('id');
					}
				});
			},
			{
				rootMargin: '0px 0px -100% 0px',
				threshold: [0, 1]
			}
		);

		hgroups.forEach((element) => {
			observer.observe(element);
		});
	});
</script>

<section {id}>
	<slot name="hgroup" />
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

	section > :global(hgroup) {
		display: flex;
		flex-direction: column;
	}

	#about > :global(p) {
		margin: 8px 0;
	}

	#contact > :global(#hcaptcha-privacyterms) {
		margin: 0 auto;
		font-size: 0.8em;
		color: var(--text-suppressed);
	}

	#contact > :global(#hcaptcha-privacyterms > a) {
		text-decoration: underline;
	}

	@media screen and (max-width: 1100px) {
		section {
			padding: var(--vpadding-mobile) 1em;
		}

		section:before {
			content: none;
		}

		section > :global(hgroup) {
			position: sticky;
			top: 0;
			padding: 8px 0;
		}

		section > :global(hgroup#mobile-sticky-header) {
			z-index: 10;
			color: var(--header-heading);
		}

		section > :global(#mobile-sticky-header::before) {
			content: '';
			z-index: -1;
			position: absolute;
			top: -1em;
			left: -1em;
			width: calc(100% + 2em);
			height: calc(100% + 1em);
			background-color: var(--mobile-nav-background);
			backdrop-filter: blur(8px);
		}
	}
</style>
