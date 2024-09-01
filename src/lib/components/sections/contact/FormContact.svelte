<script lang="ts">
	import { onMount } from 'svelte';

	export let id: string;
	export let hSize: `h2` | `h3` | `h4` | `h5` | `h6`;
	export let title: string;

	const web3forms = 'f575c746-2b33-4693-a491-f85a7ff111f1';

	onMount(() => {
		const form = document.getElementById(id) as HTMLFormElement;
		form.reset();
	});
</script>

<form {id} action="https://api.web3forms.com/submit" method="POST">
	<input type="hidden" name="access_key" value={web3forms} />
	<hgroup>
		{#if hSize === 'h2'}
			<h2>{@html title}</h2>
		{:else if hSize == 'h3'}
			<h3>{@html title}</h3>
		{:else if hSize == 'h4'}
			<h4>{@html title}</h4>
		{:else if hSize == 'h5'}
			<h5>{@html title}</h5>
		{:else}
			<h6>{@html title}</h6>
		{/if}
	</hgroup>
	<label class="sr-only" for="name">Name</label>
	<input id="name" placeholder="Name" required />
	<label class="sr-only" for="email">Email</label>
	<input type="email" id="email" placeholder="Email" required />
	<label class="sr-only" for="subject">Subject</label>
	<input id="subject" placeholder="Subject" required />
	<label class="sr-only" for="message">Message</label>
	<textarea id="message" name="message"
		placeholder="Hey! I have this cool idea. What do you think about..."
		required
	></textarea>
	<input type="checkbox" name="botcheck" class="hidden" style="display: none;">
	<input type="hidden" name="redirect" value="https://web3forms.com/success" />
	<button type="submit" value="Send Message" />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	hgroup {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	hgroup > h2,
	h3,
	h4,
	h5,
	h6 {
		align-self: center;
		font-size: 18px;
		font-weight: 500;
	}

	input,
	textarea {
		font-size: 16px;
		margin: 8px 16px;
		padding: 12px 16px;
		color: var(--text-primary);
		box-shadow: 0 1px 4px var(--portrait-frame-shadow);
		background-color: var(--exp-details-background);
		border: 1px solid var(--exp-details-border);
		border-radius: 4px;
	}

	input:focus,
	textarea:focus {
		outline: 1px solid var(--header-heading);
		box-shadow: 0 2px 4px var(--portrait-frame-shadow);
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--text-suppressed);
	}

	textarea {
		font-family: inherit;
		font-size: inherit;
		min-height: 3em;
		max-height: 15em;
		resize: vertical;
	}

	input[type='submit'] {
		align-self: center;
		width: fit-content;
		cursor: pointer;
	}

	input[type='submit']:hover {
		outline: 1px solid var(--header-heading);
	}
</style>
