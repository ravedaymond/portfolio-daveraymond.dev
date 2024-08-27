<script lang="ts">
	import { onMount } from "svelte";

    export let value: string | Date;
	onMount(() => {
		value = new Date(value);
	});
</script>
<time datetime={value.toLocaleString("en-US", { year: "numeric", month: "2-digit"})}>{value.toLocaleString("en-US", { month: "short", year: "numeric"})}</time>

<style>
	time {
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		font-size: 14px;
		font-weight: 600;
		color: var(--text-suppressed);
		pointer-events: none;
		user-select: none;
	}

	time::before {
		content: "";
		display: inline-block;
		height: 4px;
		width: 4px;
		margin-right: 8px;
		border: 2px solid var(--text-suppressed);
		border-radius: 50%;
	}

	time::after {
		content: "";
		left: 0;
		margin-left: 8px;
		flex-grow: 1;
		border-radius: 4px;
		border: 1px solid var(--main-section-border);
	}
</style>