<script lang="ts">
	import '@fontsource-variable/urbanist';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Section from '$lib/components/sections/Section.svelte';
	import SectionViewMore from '$lib/components/sections/SectionViewMore.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import MouseGradient from '$lib/components/mouse/MouseGradient.svelte';
	import ExperienceTime from '$lib/components/sections/experience/ExperienceTime.svelte';
	import ExperienceCard from '$lib/components/sections/experience/ExperienceCard.svelte';
	import FormContact from '$lib/components/sections/contact/FormContact.svelte';

	export const data: any = {
		header: {
			title: 'Dave Raymond',
			descriptors: ['Software Engineer', 'Outdoors Enthusiast', 'Space Nerd'],
			tagline: `From client dashboards to database records, I design and build scalable, human-centric solutions <span aria-label="up">&uparrow;</span> <span aria-label="and">&amp;</span> <span aria-label="down">&downarrow;</span> the stack.`,
			portraits: {
				images: [
					{
						alt: 'Black and white headshot.',
						src: 'images/portraits/a.png'
					},
					{
						alt: 'Standing alone on a ski trail in front of trees and mountains.',
						src: 'images/portraits/b.png'
					},
					{
						alt: 'Making a funny face while wearing a NASA space suit.',
						src: 'images/portraits/c.png'
					}
				],
				captions: [
					`<span>🖥️</span>Software Engineer`,
					`<span>🌲</span>Outdoors Enthusiast`,
					`<span>🚀</span>Space Nerd`
				]
			}
		},
		main: {
			about: {
				header: 'About',
				content: [
					`I'm fortunate enough to have grown up alongside technology. I recall not having internet in the home, as well as the shouts whenever the phone rang once we did. I saw the legend of Nokia pass to the Motorola Razr, then to the Apple iPhone.`,
					`This unique relationship with technology has created a feeling of ownership over how it has evolved and the direction in which it is going, and it allows me to ask 'Why this way?' as I have seen ways change countless times.`,
					`Technology has allowed us to visit and populate a vast digital frontier. We've learned to navigate freeways of light through mouse and keyboard, engaging in the largest celebration of creativity, innovation, and human connection that has ever existed. An ever-expanding and evolving "<a href="/files/declaration_of_the_independence_of_cyberspace.pdf" target="_blank">civilization of the Mind</a>"...`,
					`And I am <em>enthralled</em> by the possibilities that lies ahead.`
				]
			},
			experience: {
				header: 'Experience',
				more: {
					url: '/files/resume.pdf',
					text: 'View complete resume'
				},
				content: [
					{
						end: '2024 Jul',
						start: '2022 Jun',
						title: 'Full Stack Engineer',
						company: 'Fidelity Investments',
						url: 'https://www.fidelity.com/',
						list: [
							'Created net-new Angular SPA to standardize data and process for all platform clients filing security forms with the SEC.',
							'Added features to existing Angular client applications to improve client managing of employee equities and benefits.',
							'Collaborated with UI/UX leadership teams to improve end user experience and client workflow for new applications.',
							'Engaged with accessibility teams to ensure applications met or surpassed 508 accessibility standards'
						]
					},
					{
						start: '2019 May',
						title: 'Software Engineer',
						company: 'Fidelity Investments',
						url: 'https://www.fidelity.com/',
						list: [
							'Developed scalable multi-threaded batch application to liquidate expiring options using Java and Spring Boot.',
							'Designed and developed aggregate rule engine to enable dynamic control over current and future batch applications.',
							'Created shared Java libraries to standardize Oracle database integration across applications.',
							'Lead on Oracle modernization effort across Risk Management to standardize Oracle PL/SQL procedures.'
						]
					},
					{
						start: '2019 Jan',
						title: 'LEAP Associate Software Engineer',
						company: 'Fidelity Investments',
						url: 'https://jobs.fidelity.com/students/leap-program/',
						list: [
							'Improved UI/UX, refactored, and modernized internal social media messaging board application using Angular.',
							'Developed back-end web APIs using Node.js and Spring Boot.',
							'Worked with relational and non-relational database solutions such as Oracle, MySQL, and MongoDB.'
						]
					},
					{
						end: '2018 Dec',
						start: '2014-01',
						title: 'Bachelor of Science, Information Technology',
						company: 'Plymouth State University',
						url: 'https://www.plymouth.edu/',
						list: []
					}
				]
			},
			projects: {
				header: 'Projects',
				more: {
					url: '/projects',
					text: 'View all projects'
				}
			},
			contact: {
				header: 'Contact',
				form: {
					title: 'Building cool things is <em>way</em> more fun together. Let\'s get in touch!'
				}
			}
		}
	};

	onMount(() => {
		setupNavigationObservation();
		setMainLastSectionMarginBottom();
	});

	/**
	 * Stores references to navigation links and creates an IntersectionObserver
	 * 	for all main sections of content that have an id attribute.
	 */
	function setupNavigationObservation() {
		const navlinks: any = { focused: null };
		document.querySelectorAll('nav li').forEach((n) => {
			navlinks[n.innerHTML.toLowerCase()] = n;
		});
		navlinks.focused = document.getElementById('nav-focus');

		const navObserver = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry: IntersectionObserverEntry) => {
					if (entry.isIntersecting) {
						navlinks.focused?.removeAttribute('id');
						//@ts-ignore
						navlinks.focused = navlinks[entry.target.getAttribute('id')];
						navlinks.focused.setAttribute('id', 'nav-focus');
					}
				});
			},
			{
				rootMargin: '-128px 0px -100% 0px',
				threshold: [0, 1]
			}
		);

		let querySections = document.querySelectorAll('main > section[id]');
		querySections.forEach((element) => {
			navObserver.observe(element);
		});
	}

	function setMainLastSectionMarginBottom() {
		let section = document.querySelector('main > section:last-of-type') as HTMLElement;
		section.style.setProperty(
			'margin-bottom',
			'calc(100vh - ' + section?.clientHeight + 'px - 64px)'
		);
	}
</script>

<svelte:window on:resize={setMainLastSectionMarginBottom} />
<div>
	<div id="mobile-background" class="mobile-only"></div>
	<MouseGradient
		--size="var(--mouse-gradient-size)"
		--gradient-center="var(--mouse-gradient-center)"
		--gradient-edge="var(--page-background)"
	/>
	<Header gridarea="headnav" {data} />
	<main>
		<Section id={data.main.about.header.toLowerCase()}>
			<hgroup class="mobile-only" slot="hgroup">
				<h2>{data.main.about.header}</h2>
			</hgroup>
			{#each data.main.about.content as p}
				<p>{@html p}</p>
			{/each}
		</Section>
		<Section id={data.main.experience.header.toLowerCase()}>
			<hgroup class="mobile-only" slot="hgroup">
				<h2>{data.main.experience.header}</h2>
			</hgroup>
			{#each data.main.experience.content as role}
				{#if role.end}
					<ExperienceTime value={role.end} />
				{/if}
				<ExperienceCard
					hSize="h3"
					title={role.title}
					url={role.url}
					company={role.company}
					list={role.list}
				/>
				{#if role.start}
					<ExperienceTime value={role.start} />
				{/if}
			{/each}
			<SectionViewMore href={data.main.experience.more.url}>
				{data.main.experience.more.text}
			</SectionViewMore>
		</Section>
		<Section id={data.main.projects.header.toLowerCase()}>
			<hgroup class="mobile-only" slot="hgroup">
				<h2>{data.main.projects.header}</h2>
			</hgroup>
		</Section>
		<Section id={data.main.contact.header.toLowerCase()}>
			<hgroup class="sr-only" slot="hgroup">
				<h2>{data.main.contact.header}</h2>
			</hgroup>
			<FormContact id="contact-form" hSize="h3" title={data.main.contact.form.title} />
		</Section>
	</main>
	<Footer gridarea="footer" />
</div>

<style>
	/* ==========================================================================
   	Page Globals
   	========================================================================== */
	@import url('/fonts/Aileron.css');

	/* Page Variables
   ========================================================================== */
	:root {
		/* Color variables */
		--c1-primary-pine-green: #2d5d5a; /* light text */
		--c1-primary-pine-green-dark: rgb(18, 37, 36);
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

		--page-background: var(--c1-primary-pine-green-dark);
		--mouse-gradient-center: var(--c1-primary-pine-green);
		--mouse-gradient-size: 250vw;

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

		--mobile-nav-height: calc(32px + 2em);
		--mobile-width-min: 375px;
		--mobile-width-max: 600px;
		--mobile-nav-background: rgba(18, 37, 36, 0.1);
	}

	/* Page Global Styles
   ========================================================================== */
	:root {
		background-color: var(--page-background);
		scroll-behavior: smooth;
	}

	:global(*) {
		margin: 0;
		padding: 0;
	}

	div :global(::selection) {
		color: var(--text-selection);
		background: var(--text-selection-bg);
	}

	/* https://github.com/h5bp/main.css/issues/12 */
	div :global(.sr-only) {
		/* Positioning */
		position: relative;
		/* Display & Box Model */
		display: inline-block;
		width: 1px;
		height: 1px;
		margin: 0 -1px -1px 0;
		padding: 0;
		border: 0;
		overflow: hidden;
		/* Other */
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
	}

	div :global(a) {
		color: inherit;
		text-decoration: none;
	}

	div :global(a::selection) {
		color: var(--header-heading);
		text-decoration: underline;
	}

	div :global(.mobile-only) {
		display: none;
	}

	/* ==========================================================================
	Page styling
	========================================================================== */
	div {
		/* Positioning */
		position: relative;
		/* Display & Box Model */
		display: grid;
		grid-template-areas:
			'. headnav main .'
			'. footer  main .'
			'. .	   .	.';
		grid-template-columns: 1fr 400px 600px 1fr;
		grid-column-gap: 2em;
		grid-template-rows: auto 1fr auto;
		height: 100%;
		/* Font & Text */
		font-family: 'Urbanist Variable', monospace;
		font-weight: 300;
		color: var(--text-primary);
		/* Other */
		/* */
		--vpadding: 128px;
	}

	main {
		grid-area: main;
	}

	main :global(a:hover) {
		color: var(--header-heading);
	}

	@media screen and (max-width: 1100px) {
		div {
			display: grid;
			grid-template-areas:
				'. headnav 	.'
				'. main		.'
				'. footer	.';
			grid-template-columns: 1fr minmax(var(--mobile-width-min), var(--mobile-width-max)) 1fr;
			column-gap: 0;
			grid-template-rows: auto auto auto;
			--vpadding-mobile: 64px;
		}

		div :global(.desktop-only) {
			display: none;
		}

		div :global(.mobile-only) {
			display: unset;
		}

		#mobile-background {
			position: fixed;
			top: var(--mobile-nav-height);
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(0deg, var(--mouse-gradient-center), var(--page-background));
		}

		main > :global(section:last-of-type) {
			margin-bottom: calc(300px);
		}
	}
</style>
