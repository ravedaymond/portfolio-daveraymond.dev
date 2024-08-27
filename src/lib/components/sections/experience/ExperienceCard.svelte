<script lang="ts">
	export let hSize: `h2` | `h3` | `h4` | `h5` | `h6`;
	export let title: string;
	export let company: string;
	export let url: string | undefined = undefined;
	export let list: string[] = [];
</script>

<a href={url} target="_blank" rel="external noopener noreferrer nofollow">
	<section>
		<hgroup>
			<!-- 
				The below is a working solution of what I was attemping below. 
				Due to sveltes CSS cleanup, I was unable to use the following
				to dynamically create a header element AND style it.

				The creation worked without issue, but no style was applied from
				this components <style>.
				
				{@html `<${hSize} class="card-title">${title}</${hSize}>`}
			-->
			{#if hSize === 'h2'}
				<h2>{title}</h2>
			{:else if hSize == 'h3'}
				<h3>{title}</h3>
			{:else if hSize == 'h4'}
				<h4>{title}</h4>
			{:else if hSize == 'h5'}
				<h5>{title}</h5>
			{:else}
				<h6>{title}</h6>
			{/if}
			<p>
				<span class="sr-only">at </span>{company}
			</p>
			<span>&nbsp;&nearr;</span>
		</hgroup>
		<ul>
			{#each list as item}
				<li>{item}</li>
			{/each}
		</ul>
	</section>
</a>

<style>
	@property --prop-exp-details-bg-color {
		syntax: '<color>';
		initial-value: transparent;
		inherits: false;
	}

	@property --prop-exp-details-border-color-1 {
		syntax: '<color>';
		initial-value: transparent;
		inherits: false;
	}

	@property --prop-exp-details-border-color-2 {
		syntax: '<color>';
		initial-value: transparent;
		inherits: false;
	}

	section {
		margin-bottom: 16px;
		padding: 8px 16px;
		border: 1px solid transparent;
		border-radius: 4px;
		box-shadow: 1px 1px 4px transparent;
		background:
			linear-gradient(var(--prop-exp-details-bg-color), var(--prop-exp-details-bg-color))
				padding-box,
			linear-gradient(
					30deg,
					var(--prop-exp-details-border-color-1),
					var(--prop-exp-details-border-color-2)
				)
				border-box;
		--t: 0.6s;
		transition:
			box-shadow var(--t),
			--prop-exp-details-bg-color var(--t),
			--prop-exp-details-border-color-1 var(--t),
			--prop-exp-details-border-color-2 var(--t);
	}

	section:hover {
		box-shadow: 1px 1px 4px var(--portrait-frame-shadow);
		--prop-exp-details-bg-color: var(--mouse-gradient-center);
		--prop-exp-details-border-color-1: var(--main-section-border);
		--prop-exp-details-border-color-2: var(--header-heading);
	}

	section > hgroup {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}

	h2,
	h3,
	h4,
	h5,
	h6 {
		flex-basis: 65%;
		justify-self: flex-start;
		font-size: 1.2em;
		font-weight: 600;
		color: var(--exp-details-header-role);
	}

	p {
		flex-basis: 30%;
		text-align: right;
		font-size: 1em;
		color: var(--exp-details-header-at);
	}

	section:hover p {
		text-decoration: underline;
		text-decoration-color: var(--text-suppressed);
	}

	span:last-child {
		position: relative;
		bottom: 0;
		left: 0;
		transition-duration: 0.3s;
	}

	section:hover span:last-child {
		position: relative;
		left: 6px;
		bottom: 6px;
	}

	ul {
		margin: 0;
		padding: 0;
		color: var(--header-description);
	}

	li {
		list-style: '-' outside;
		font-size: 16px;
		padding: 2px 0 2px 4px;
	}

	li::marker {
		color: var(--exp-details-list-style-color);
	}

	@media screen and (max-width: 1100px) {
		p {
			text-decoration: underline;
			text-decoration-color: var(--text-suppressed);
		}
	}
</style>
