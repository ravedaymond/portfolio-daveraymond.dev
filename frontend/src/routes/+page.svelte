<script>
	let copyName = 'Dave Raymond';
	let copyDate = new Date().getFullYear().toString();

	const mgradient = {
		x: 0,
		y: 0
	};

	/** @param {MouseEvent} event */
	function mousegradientmove(event) {
		mgradient.x = event.pageX - window.scrollX;
		mgradient.y = event.pageY - window.scrollY;
	}
</script>

<svelte:window on:mousemove={mousegradientmove} />
<div class="page-wrapper">
	<span
		id="mouse-gradient"
		style="translate: calc(-50% + {mgradient.x}px) calc(-50% + {mgradient.y}px);"
	></span>
	<div class="header-nav-wrapper">
		<header>
			<hgroup>
				<h1>Dave Raymond</h1>
				<p>Software Engineer</p>
				<p>
					From client dashboards to database records, I design and build scalable, human-centric
					solutions <span aria-label="up">&uparrow;</span> <span aria-label="and">&amp;</span>
					<span aria-label="down">&downarrow;</span> the stack.
				</p>
			</hgroup>
			<div>
				<figure class="portrait">
					<figcaption>I am a<span>&nbsp;🖥️</span>Software Engineer</figcaption>
					<div class="portrait-frame">
						<img src="/images/portraits/a.png" alt="Black and white headshot." />
					</div>
				</figure>
				<figure class="portrait">
					<figcaption hidden>I am an<span>&nbsp;🌲</span>Outdoors Enthusiast</figcaption>
					<div class="portrait-frame">
						<img
							src="/images/portraits/b.png"
							alt="Standing alone on a hiking trail looking at mountains."
						/>
					</div>
				</figure>
				<figure class="portrait">
					<figcaption hidden>I am a<span>&nbsp;🚀</span>Space Nerd</figcaption>
					<div class="portrait-frame">
						<img
							src="/images/portraits/c.png"
							alt="Making a funny face while wearing a NASA space suit."
						/>
					</div>
				</figure>
				<fieldset>
					<legend class="sr-only">Select a portrait:</legend>
					<label class="sr-only" for="show-portrait-a">Portrait A</label>
					<input type="radio" name="show-portrait" id="show-portrait-a" value="a" checked />
					<label class="sr-only" for="show-portrait-b">Portrait B</label>
					<input type="radio" name="show-portrait" id="show-portrait-b" value="b" />
					<label class="sr-only" for="show-portrait-c">Portrait C</label>
					<input type="radio" name="show-portrait" id="show-portrait-c" value="c" />
				</fieldset>
			</div>
			<ul>
				<li>
					<a
						href="https://linkedin.com/in/dave-raymond"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="LinkedIn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
								fill="#629fa0"
							/>
						</svg>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/ravedaymond"
						target="_blank"
						rel="external noopener noreferrer"
						aria-label="GitHub"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="98" viewBox="0 0 98 96" height="96">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
								fill="#629fa0"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</header>
		<nav class="select-off">
			<ul>
				<a href="#about"><li class="nav-current">About</li></a>
				<a href="#experience"><li>Experience</li></a>
				<a href="#labs"><li>Labs</li></a>
				<a href="#contact"><li>Contact</li></a>
			</ul>
		</nav>
	</div>
	<main>
		<section id="about">
			<h2 class="sr-only">About</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere auctor pretium.
				Aenean varius id ex non scelerisque. Donec tempor lacus at eros ullamcorper lacinia. Donec
				fermentum eget est in sollicitudin. Sed pretium venenatis orci, eget ornare ex pretium
				vitae. Sed venenatis dignissim nunc, placerat venenatis neque ultricies quis. Donec non
				dolor eu tortor tempus hendrerit.
			</p>
			<p>
				I'm fortunate enough to have grown up alongside technology. I recall not having internet in
				the home, as well as the shouts whenever the phone rang once we did. I saw the legend of
				Nokia pass to the Motorola Razr, then to the Apple iPhone.
			</p>
			<p>
				This unique relationship with technology has created a feeling of ownership over how it has
				evolved and the direction in which it is going, and it allows me to ask 'Why this way?' as I
				have seen ways change countless times.
			</p>
			<p>
				Technology has allowed us to visit and populate a vast digital frontier. We've learned to
				navigate freeways of light through mouse and keyboard, engaging in the largest celebration
				of creativity, innovation, and human connection that has ever existed. An ever-expanding and
				evolving "<a href="/declaration_of_the_independence_of_cyberspace.pdf" target="_blank"
					>civilization of the Mind</a
				>"...
			</p>
			<p>And I am <em>enthralled</em> at the future that lies ahead.</p>
		</section>
		<section id="experience">
			<h2 class="sr-only">Experience</h2>
			<time datetime="2024-07">Jul 2024</time>
			<a
				href="https://www.fidelity.com/"
				target="_blank"
				rel="external noopener noreferrer nofollow"
			>
				<section class="exp-details">
					<hgroup>
						<h3>Full Stack Engineer</h3>
						<p>
							<span class="sr-only">at</span>
							Fidelity Investments<span>&nbsp;&nearr;</span>
						</p>
					</hgroup>
					<ul>
						<li>
							Created net-new Angular SPA to standardize data and process for all platform clients
							filing security forms with the SEC.
						</li>
						<li>
							Added features to existing Angular client applications to improve client managing of
							employee equities and benefits.
						</li>
						<li>
							Collaborated with UI/UX leadership teams to improve end user experience and client
							workflow for new applications.
						</li>
						<li>
							Engaged with accessibility teams to ensure applications met or surpassed 508
							accessibility standards.
						</li>
					</ul>
				</section>
			</a>
			<time datetime="2022-06">Jun 2022</time>
			<a
				href="https://www.fidelity.com/"
				target="_blank"
				rel="external noopener noreferrer nofollow"
			>
				<section class="exp-details">
					<hgroup>
						<h3>Software Engineer</h3>
						<p>
							<span class="sr-only">at</span>Fidelity Investments<span>&nbsp;&nearr;</span>
						</p>
					</hgroup>
					<ul>
						<li>
							Developed scalable multi-threaded batch application to liquidate expiring options
							using Java and Spring Boot.
						</li>
						<li>
							Designed and developed aggregate rule engine to enable dynamic control over current
							and future batch applications.
						</li>
						<li>
							Created shared Java libraries to standardize Oracle database integration across
							applications.
						</li>
						<li>
							Lead on Oracle modernization effort across Risk Management to standardize Oracle
							PL/SQL procedures.
						</li>
					</ul>
				</section>
			</a>
			<time datetime="2019-05">May 2019</time>
			<a
				href="https://jobs.fidelity.com/students/leap-program/"
				target="_blank"
				rel="external noreferrer noopener nofollow"
			>
				<section class="exp-details">
					<hgroup>
						<h3>LEAP Associate Software Engineer</h3>
						<p>
							<span class="sr-only">at</span>Fidelity Investments<span>&nbsp;&nearr;</span>
						</p>
					</hgroup>
					<ul>
						<li>
							Improved UI/UX, refactored, and modernized internal social media messaging board
							application using Angular.
						</li>
						<li>Developed back-end web APIs using Node.js and Spring Boot.</li>
						<li>
							Worked with relational and non-relational database solutions such as Oracle, MySQL,
							and MongoDB.
						</li>
					</ul>
				</section>
			</a>
			<time datetime="2019-01">Jan 2019</time>
			<time datetime="2018-12">Dec 2018</time>
			<a
				href="https://www.plymouth.edu/"
				target="_blank"
				rel="external noreferrer noopener nofollow"
			>
				<section class="exp-details">
					<hgroup>
						<h3>Bachelor of Science, Information Technology</h3>
						<p>
							<span class="sr-only">at</span>Plymouth State University<span>&nbsp;&nearr;</span>
						</p>
					</hgroup>
				</section>
			</a>
			<time datetime="2014-01">Jan 2014</time>
			<div>
				<a href="/resume.pdf" target="_blank">View complete resume <span>&xrarr;</span></a>
			</div>
		</section>
		<section id="labs">
			<hgroup>
				<h2 class="sr-only">Labs</h2>
				<p></p>
			</hgroup>
			<div>
				<a href="#labs" target="_parent">View all labs <span>&xrarr;</span></a>
			</div>
		</section>
		<section id="contact">
			<hgroup>
				<h2 class="sr-only">Contact</h2>
				<p>Building cool things is more fun together. Let's get in touch!</p>
			</hgroup>
			<form id="contact-form">
				<label class="sr-only" for="contact-name">Name</label>
				<input id="contact-name" placeholder="Name" required />
				<label class="sr-only" for="contact-email">Email</label>
				<input type="email" id="contact-email" placeholder="Email" required />
				<label class="sr-only" for="contact-subject">Subject</label>
				<input id="contact-subject" placeholder="Subject" required />
				<label class="sr-only" for="contact-message">Message</label>
				<textarea id="contact-message" placeholder="Hey! I have this cool idea. What do you think about..." required></textarea>
				<input type="submit" value="Send Message"/>
			</form>
		</section>
	</main>
	<footer>
		<a
			href="https://github.com/ravedaymond"
			target="_blank"
			rel="external noopener noreferrer"
			aria-label="GitHub">Designed &amp; developed by {copyName} &copy; {copyDate}</a
		>
	</footer>
</div>

<style>
	:root {
		/* Color variables */
		--c1-primary-pine-green: #2d5d5a; /* light text */
		--c1-primary-pine-green-dark: #122524;
		--c1-secondaryA1-cloud-nine: #eeefe5;
		--c1-secondaryA2-silken-pine: #e0e3d4;
		--c1-secondaryB1-sebring-white: #e7e7dd;
		--c1-secondaryB2-tranquility: #bbc3bb;
		--c1-shade1-crystal-blue: #d8ebe9;
		--c1-shade2-birds-egg: #bedcdd;
		--c1-shade3-tranquil-blue: #94c2c5;
		--c1-shade4-majestic-blue: #629fa0;
		--c1-shade5-casco-bay: #306e6d; /* light text */
		--c1-shade6-yukon-green: #2f534f; /* light text */

		--c2-primary-dragonfly: #3d615e; /* light text */
		--c2-secondaryA1-constellation: #d5e1e3;
		--c2-secondaryA2-coastline: #919da8;
		--c2-secondaryB1-pale-celery: #f2ebcd;
		--c2-secondaryB2-hazy-blue: #92c6bb;
		--c2-shade1-mountain-mist: #d4dddc;
		--c2-shade2-wales-gray: #b9c5c3;
		--c2-shade3-mount-saint-anne: #a3b0ae;
		--c2-shade4-atmospheric: #889d9a;
		--c2-shade5-dartsmouth-green: #748e88;
		--c2-shade6-verdigris: #55756c; /* light text */

		/* Element color variables */
		--text-primary: var(--c1-secondaryB1-sebring-white);
		--text-suppressed: var(--c1-secondaryB2-tranquility);
		--text-selection: var(--c1-shade1-crystal-blue);
		--text-selection-bg: var(--c1-shade5-casco-bay);

		--page-wrapper-background: var(--c1-primary-pine-green-dark);
		--mouse-gradient: var(--c1-primary-pine-green);

		--header-heading: var(--c2-secondaryB1-pale-celery);
		--header-subheading: var(--c1-shade4-majestic-blue);
		--header-description: var(--text-primary);

		--portrait-frame: var(--c1-shade6-yukon-green);
		--portrait-frame-hover: var(--c1-shade4-majestic-blue);
		--portrait-frame-shadow: rgba(0, 0, 0, 0.4);
		--portrait-radio-background: var(--c1-shade5-casco-bay);
		--portrait-radio-hover: var(--c1-shade4-majestic-blue);
		--portrait-radio-checked: var(--c2-secondaryB1-pale-celery);

		--nav-indicator-inactive: var(--c1-shade4-majestic-blue);
		--nav-indicator-hover: var(--c1-shade3-tranquil-blue);
		--nav-indicator-active: var(--c2-secondaryB1-pale-celery);
		--nav-text-inactive: var(--c1-shade4-majestic-blue);
		--nav-text-hover: var(--c1-shade3-tranquil-blue);
		--nav-text-active: var(--c2-secondaryB1-pale-celery);

		--main-section-border: var(--c1-shade6-yukon-green);
		--main-section-view-more: var(--c1-shade4-majestic-blue);
		--main-section-view-more-hover: var(--c1-shade3-tranquil-blue);

		--exp-details-header-role: var(--c1-secondaryA1-cloud-nine);
		--exp-details-header-at: var(--c1-secondaryA2-silken-pine);
		--exp-details-list-style-color: var(--c2-secondaryB1-pale-celery);
		--exp-details-background: color-mix(
			in srgb,
			var(--c1-secondaryA1-cloud-nine) 10%,
			rgba(0, 0, 0, 0) 100%
		);
		--exp-details-background-hover: color-mix(
			in srgb,
			var(--c1-secondaryA1-cloud-nine) 100%,
			rgba(0, 0, 0, 0) 100%
		);
		--exp-details-border: var(--c1-shade6-yukon-green);
		--exp-details-border-hover: var();
		--exp-details-shadow: rgba(0, 0, 0, 0.4);
		--exp-details-shadow-hover: rgba(0, 0, 0, 0.4);

		--footer-text: var(--c1-shade4-majestic-blue);
		--footer-text-hover: var(--c1-shade3-tranquil-blue);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	::selection {
		color: var(--text-selection);
		background: var(--text-selection-bg);
	}

	.select-off {
		user-select: none;
	}

	.sr-only {
		/* https://github.com/h5bp/main.css/issues/12 */
		border: 0;
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		margin: 0 -1px -1px 0;
		overflow: hidden;
		padding: 0;
		position: relative;
		display: inline-block;
	}

	#mouse-gradient {
		--size: 250vw;
		position: fixed;
		display: flex;
		border-radius: 50%;
		width: var(--size);
		height: var(--size);
		background: radial-gradient(
			circle,
			var(--mouse-gradient) 0%,
			var(--page-wrapper-background) 70%
		);
		pointer-events: none;
		z-index: -1;
	}

	#mouse-gradient::after {
		content: '';
		width: 16px;
		height: 16px;
		border: 1px solid black;
	}

	.page-wrapper {
		position: relative;
		--content-padding: 128px;
		display: grid;
		grid-template-columns: 1fr 400px 600px 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'. s m .'
			'. f m .';
		column-gap: 2em;
		color: var(--text-primary);

		background-color: var(--page-wrapper-background);
		z-index: 0;
	}

	.header-nav-wrapper {
		position: sticky;
		padding-top: var(--content-padding);
		top: 0;
		grid-area: s;
		display: grid;
		grid-template-columns: 200px 200px;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'h h'
			'. n';
	}

	header {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row-reverse;
		grid-area: h;

		--portrait-frame-w: 50px;
		--portrait-frame-h: 100px;
		--portrait-frame-rot: 0;
		--portrait-image-px: 150px;
		--portrait-frame-offset: 48px;
	}

	header > hgroup {
		flex-basis: 70%;
	}

	header > hgroup > h1 {
		color: var(--header-heading);
	}

	header > hgroup > p {
		color: var(--header-description);
		padding: 2px 0;
	}

	header > hgroup > p:first-of-type {
		font-size: 18px;
		color: var(--header-subheading);
	}

	header > div {
		position: relative;
		flex-basis: 30%;
	}

	.portrait {
		display: flex;
		position: absolute;
		align-items: center;
		justify-content: center;
		margin: 0;
		height: 100%;
		width: 100%;
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
	header > div > .portrait:nth-child(1) .portrait-frame {
		margin-bottom: 8px;
		margin-right: 32px;
		z-index: 3;
	}

	header > div > .portrait:nth-child(2) .portrait-frame {
		z-index: 2;
	}

	header > div > .portrait:nth-child(3) .portrait-frame {
		margin-top: 8px;
		margin-left: 32px;
		z-index: 1;
	}

	/* Shared image properties. Negate any rotation done to frames. */
	.portrait-frame > img {
		position: relative;
		width: var(--portrait-image-px);
		height: var(--portrait-image-px);

		transform: rotate(calc(-1 * var(--portrait-frame-rot)));
	}

	/* Adjust separate images within frames for preview */
	header > div > .portrait:nth-child(1) .portrait-frame > img {
		right: 50%;
		bottom: 25%;
	}

	header > div > .portrait:nth-child(2) .portrait-frame > img {
		right: 50%;
		bottom: 25%;
	}

	header > div > .portrait:nth-child(3) .portrait-frame > img {
		right: 50%;
		bottom: 25%;
	}

	header > div > fieldset {
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

	header > div > fieldset > input[type='radio'] {
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

	header > div > fieldset > input[type='radio']:hover {
		cursor: pointer;
		box-shadow: inset 12px 12px var(--portrait-radio-hover);
	}

	header > div > fieldset > input[type='radio']:checked::before {
		content: '';
		--size: 6px;
		width: var(--size);
		height: var(--size);
		border-radius: 25%;
		box-shadow: inset var(--size) var(--size) var(--portrait-radio-checked);
	}

	header > ul {
		display: flex;
		flex-basis: 70%;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	header > ul > li {
		margin: 12px 8px 0 0;
	}

	header > ul svg {
		width: 25px;
		height: 25px;
	}

	header > ul svg path:first-child {
		transition-duration: 0.2s;
	}

	header > ul svg:hover path:first-child {
		fill: var(--c1-shade3-tranquil-blue);
	}

	nav {
		grid-area: n;
		height: min-content;
		color: var(--nav-text-inactive);
	}

	nav ul {
		display: flex;
		flex-direction: column;
	}

	nav li {
		display: inline-block;
		font-size: 1.2em;
		font-weight: 300;
		list-style: none;
	}

	nav li::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		height: 0px;
		width: 16px;
		margin-right: 8px;
		border-bottom: 1px solid var(--nav-indicator-inactive);
		transition-duration: 0.3s;
	}

	nav li:hover {
		color: var(--nav-text-hover);
	}

	nav li:hover::before {
		width: 32px;
		border-color: var(--nav-indicator-hover);
	}

	nav li.nav-current {
		color: var(--nav-text-active);
	}

	nav li.nav-current::before {
		width: 32px;
		border-color: var(--nav-indicator-active);
	}

	/* Main Content */
	main {
		grid-area: m;
	}

	main > section {
		position: relative;
		display: flex;
		flex-direction: column;
		padding-top: var(--content-padding);
		padding-left: 12px;
	}

	main > section > hgroup {
		display: flex;
		flex-direction: column;
	}

	main > section::before {
		content: '';
		position: absolute;
		display: flex;
		bottom: 0;
		left: -1px;
		height: calc(100% - var(--content-padding));
		border: 1px solid var(--main-section-border);
		border-radius: 4px;
	}

	main > section > div:last-of-type {
		align-self: flex-end;
	}

	main > section > div:last-of-type > a {
		position: relative;
		left: 0;
		text-decoration: none;
		color: var(--main-section-view-more);
		transition-duration: 0.3s;
	}

	main > section > div:last-of-type > a:hover {
		color: var(--main-section-view-more-hover);
		left: 16px;
	}

	#about p {
		margin: 8px 0;
	}

	#experience > time {
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		font-size: 14px;
		font-weight: 600;
		color: var(--text-suppressed);
		pointer-events: none;
		user-select: none;
	}

	#experience > time::before {
		content: '';
		display: inline-block;
		height: 4px;
		width: 4px;
		margin-right: 8px;
		border: 2px solid var(--text-suppressed);
		border-radius: 50%;
	}

	#experience > time::after {
		content: '';
		left: 0;
		margin-left: 8px;
		flex-grow: 1;
		border-radius: 4px;
		border: 1px solid var(--main-section-border);
	}

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

	.exp-details {
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

	.exp-details:hover {
		box-shadow: 1px 1px 4px var(--portrait-frame-shadow);
		--prop-exp-details-bg-color: var(--mouse-gradient);
		--prop-exp-details-border-color-1: var(--main-section-border);
		--prop-exp-details-border-color-2: var(--header-heading);
	}

	.exp-details > hgroup {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}

	.exp-details > hgroup > h3 {
		flex-basis: 65%;
		justify-self: flex-start;
		font-size: 18px;
		font-weight: 600;
		color: var(--exp-details-header-role);
	}

	.exp-details > hgroup > p {
		flex-basis: 35%;
		text-align: right;
		font-size: 16px;
		color: var(--exp-details-header-at);
	}

	.exp-details > hgroup > p > span:last-child {
		position: relative;
		left: 0;
		bottom: 0;
		transition-duration: 0.3s;
	}

	.exp-details:hover > hgroup > p > span:last-child {
		position: relative;
		left: 6px;
		bottom: 6px;
	}

	.exp-details > ul {
		margin: 0;
		padding: 0;
		color: var(--header-description);
	}

	.exp-details > ul > li {
		list-style: '-' outside;
		font-size: 16px;
		padding: 2px 0 2px 4px;
	}

	.exp-details > ul > li::marker {
		color: var(--exp-details-list-style-color);
	}

	#contact > hgroup > p {
		align-self: center;
		font-size: 18px;
		font-weight: 500;
	}

	#contact-form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	#contact-form input,
	#contact-form textarea {
		font-size: 16px;
		margin: 8px 16px;
		padding: 12px 16px;
		color: var(--text-primary);
		background-color: var(--exp-details-background);
		border: 1px solid var(--exp-details-border);
		border-radius: 4px;
	}

	#contact-form input:focus, #contact-form textarea:focus {
		outline: 1px solid var(--header-heading);
		
	}

	#contact-form input::placeholder,
	#contact-form textarea::placeholder {
		color: var(--text-suppressed);
	}

	#contact-form textarea {
		font-family: inherit;
		font-size: inherit;
		min-height: 3em;
		max-height: 15em;
		resize: vertical;
	}
	
	#contact-form input[type="submit"] {
		align-self: center;
		width: 25%;
		/* border: 1px solid transparent; */
		cursor: pointer;
		box-shadow: 0 1px 4px var(--portrait-frame-shadow);
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

	#contact-form input[type="submit"]:hover {
		border: 1px solid transparent;
		box-shadow: 0 2px 4px var(--portrait-frame-shadow);
		--prop-exp-details-bg-color: var(--mouse-gradient);
		--prop-exp-details-border-color-1: var(--main-section-border);
		--prop-exp-details-border-color-2: var(--header-heading);
	}

	footer {
		position: sticky;
		top: calc(100% - var(--content-padding));
		grid-area: f;
		height: min-content;
		margin: 0 auto;
	}

	footer a {
		text-decoration: none;
		color: var(--footer-text);
	}

	footer a:hover {
		color: var(--footer-text-hover);
	}
</style>
