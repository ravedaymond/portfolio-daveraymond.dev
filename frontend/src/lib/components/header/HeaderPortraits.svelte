<script lang="ts">
	import { onMount } from 'svelte';

	export let data: any;
    export let caption: any;

	let frames: any;
	let front: HTMLElement;
	let buttons: any;

	onMount(() => {
		frames = document.querySelectorAll('.portrait-frame');
		front = frames[0];
        caption = data.captions[0];
		buttons = document.querySelectorAll('input');
	});

	function mouseenter(event: any) {
		let i = 0;
		for (let frame of frames) {
			frame.removeAttribute('id');
			if (frame.isSameNode(event.target)) {
				front.removeAttribute('id');
				front = frame;
                front.setAttribute('id', 'portrait-forefront');
                buttons[i].checked = true;
                caption = data.captions[i];
				return;
			}
            i++;
		}
	}

	function radioclicked(event: any) {
		let i = 0;
		for (let button of buttons) {
			if (button.isSameNode(event.target)) {
				front.removeAttribute('id');
				front = frames[i];
				front.setAttribute('id', 'portrait-forefront');
                caption = data.captions[i];
                return;
			}
			i++;
		}
	}

    function onkeydown(event: any) {
        if(event.code.toUpperCase() === "SPACE" || event.code.toUpperCase() === "ENTER") {
            event.target.click();
        }
    }

    function expandportrait(event: any) {
        console.log("expand-portrait");
    }
</script>

<div>
	<figure class="portrait">
		<figcaption>I am a&nbsp;{data.captions[0]}</figcaption>
		<div id="portrait-forefront" class="portrait-frame" on:click={expandportrait} on:mouseenter={mouseenter} role="button" tabindex="-1" on:keydown={onkeydown}>
			<img src={data.images[0].src} alt={data.images[0].alt} />
		</div>
	</figure>
	<figure class="portrait">
		<figcaption hidden>I am an&nbsp;{data.captions[1]}</figcaption>
		<div id="portrait-middle" class="portrait-frame" on:click={expandportrait} on:mouseenter={mouseenter} role="button" tabindex="-1" on:keydown={onkeydown}>
			<img src={data.images[1].src} alt={data.images[1].alt} />
		</div>
	</figure>
	<figure class="portrait">
		<figcaption hidden>I am a&nbsp;{data.captions[2]}</figcaption>
		<div class="portrait-frame" on:click={expandportrait} on:mouseenter={mouseenter} role="button" tabindex="-1" on:keydown={onkeydown}>
			<img src={data.images[2].src} alt={data.images[2].alt} />
		</div>
	</figure>
	<fieldset>
		<legend class="sr-only">Select a portrait:</legend>
		<label class="sr-only" for="show-portrait-a">Portrait A</label>
		<input type="radio" name="show-portrait" id="show-portrait-a" value="a" on:click={radioclicked} checked />
		<label class="sr-only" for="show-portrait-b">Portrait B</label>
		<input type="radio" name="show-portrait" id="show-portrait-b" value="b" on:click={radioclicked} />
		<label class="sr-only" for="show-portrait-c">Portrait C</label>
		<input type="radio" name="show-portrait" id="show-portrait-c" value="c" on:click={radioclicked} />
	</fieldset>
</div>

<style>
	div {
		position: relative;
		flex-basis: 30%;
	}

	.portrait {
		--portrait-frame-w: 50px;
		--portrait-frame-h: 100px;
		--portrait-frame-rot: 0;
		--portrait-image-px: 150px;
		--portrait-frame-offset: 48px;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		height: 100%;
		width: 100%;
		user-select: none;
		pointer-events: none;
	}

	.portrait > figcaption {
		position: absolute;
		font-style: italic;

		visibility: hidden;
	}

	.portrait > figcaption > span {
		font-style: normal;
	}

	@property --prop-portrait-frame-color-1 {
		syntax: '<color>';
		initial-value: transparent;
		inherits: false;
	}

	@property --prop-portrait-frame-color-2 {
		syntax: '<color>';
		initial-value: transparent;
		inherits: false;
	}

	.portrait-frame {
		position: absolute;
		width: var(--portrait-frame-w);
		height: var(--portrait-frame-h);
		margin: 0 0 0 0;
		border: 1px solid transparent;
		border-radius: 4px;
		box-shadow: 1px 1px 4px var(--portrait-frame-shadow);
		transform: rotate(var(--portrait-frame-rot));
		overflow: hidden;
		background: linear-gradient(
				30deg,
				var(--prop-portrait-frame-color-1),
				var(--prop-portrait-frame-color-2)
			)
			border-box;
		pointer-events: all;
		--t: 0.6s;
		transition:
			--prop-portrait-frame-color-1 var(--t),
			--prop-portrait-frame-color-2 var(--t);
	}

	.portrait-frame:hover {
		cursor: pointer;
		--prop-portrait-frame-color-1: var(--main-section-border);
		--prop-portrait-frame-color-2: var(--header-heading);
	}

	/* Position frames for preview */
	div > .portrait:nth-child(1) .portrait-frame {
		top: 4px;
		left: 16px;
	}

	div > .portrait:nth-child(2) .portrait-frame {
		z-index: 2;
	}

	div > .portrait:nth-child(3) .portrait-frame {
		right: 16px;
		bottom: 4px;
	}

	#portrait-forefront {
		z-index: 3;
	}

	/* Shared image properties. Negate any rotation done to frames. */
	.portrait-frame > img {
		position: relative;
		width: var(--portrait-image-px);
		height: var(--portrait-image-px);
		transform: rotate(calc(-1 * var(--portrait-frame-rot)));
	}

	/* Adjust separate images within frames for preview */
	div > .portrait:nth-child(1) .portrait-frame > img {
		right: 50%;
		bottom: 25%;
	}

	div > .portrait:nth-child(2) .portrait-frame > img {
		right: 60%;
		bottom: 25%;
	}

	div > .portrait:nth-child(3) .portrait-frame > img {
		right: 70%;
		bottom: 25%;
	}

	div > fieldset {
		position: absolute;
		left: 0;
		height: 100%;
		padding: 0;
		margin: 0;
		border: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	div > fieldset > input[type='radio'] {
		display: grid;
		place-content: center;
		appearance: none;
		margin: 2px 0;
		width: 12px;
		height: 12px;
		border-radius: 25%;
		box-shadow: inset 12px 12px var(--portrait-radio-background);
		transition-duration: 0.2s;
	}

	div > fieldset > input[type='radio']:hover {
		cursor: pointer;
		box-shadow: inset 12px 12px var(--portrait-radio-hover);
	}

	div > fieldset > input[type='radio']:checked::before {
		content: '';
		--size: 6px;
		width: var(--size);
		height: var(--size);
		border-radius: 25%;
		box-shadow: inset var(--size) var(--size) var(--portrait-radio-checked);
	}
</style>
