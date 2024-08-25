<script lang="ts">
	let x: number = -1;
	let y: number = -1;

	function move(event: MouseEvent) {
		x = event.pageX - window.scrollX;
		y = event.pageY - window.scrollY;
	}
</script>

<svelte:window on:mousemove={move} />
<span
	style="--x: {x}px; --y: {y}px;"
></span>

<style>
	span {
		/* Positioning */
		position: fixed;
		z-index: -1;
		/* Display & Box Model */
		min-width: var(--size);
		max-width: var(--size);
		max-height: var(--size);
		min-height: var(--size);
		border-radius: 50%;
		/* Other */
		background: radial-gradient(circle, var(--gradient-center, red) 0%, var(--gradient-edge, blue) 70%);
		pointer-events: none;
		translate: calc(-50% + var(--x)) calc(-50% + var(--y));
	}
</style>
