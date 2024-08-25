<script lang="ts">
	export let href: string;
    export let target: `_blank` | `_parent` = "_blank";
</script>
<div>
	<a href={href} target={target}>
		<slot></slot><span>&nbsp;&xrarr;</span>
	</a>
</div>

<style>
	div {
		align-self: flex-end;
	}

	div > a {
		position: relative;
		left: 0;
		text-decoration: none;
		color: var(--main-section-view-more);
		transition-duration: 0.3s;
	}

	div > a:hover {
		color: var(--main-section-view-more-hover);
		left: 16px;
	}
</style>
