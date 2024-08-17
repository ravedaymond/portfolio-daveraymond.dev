<script>
	
</script>


<div class="experience-item">
    <time datetime="2019-05">May 2019</time>
    <a href="https://jobs.fidelity.com/students/leap-program/" target="_blank" rel="external opener nofollow">
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
                    Worked with relational and non-relational database solutions such as Oracle, MySQL, and
                    MongoDB.
                </li>
            </ul>
        </section>
    </a>
</div>

<style>
    div {
		display: flex;
	}

	time {
		position: relative;
		margin-top: -16px;
		flex-basis: 20%;
		font-size: 14px;
		font-weight: 600;
		color: var(--exp-details-list-bullet);
	}

	time::before {
		content: "";
		display: inline-block;
		width: 4px;
		height: 4px;
		margin-right: 8px;
		border: 2px solid var(--exp-details-list-bullet);
		border-radius: 50%;
		vertical-align: middle;
	}

	a {
		display: flex;
		flex-basis: 80%;
		text-decoration: none;
	}

	section {
		margin-bottom: 16px;
		padding: 8px 16px;
		border: 2px solid var(--exp-details-border);
		border-radius: 4px;
		transition-duration: 0.3s;
	}

	section:hover {
		border: 2px solid var(--exp-details-border);
		box-shadow: 0 1px 2px var(--exp-details-shadow);
		background-color: var(--exp-details-background);
		/* background-color: var(--exp-details-background-hover); */
		/* background: linear-gradient(45deg, var(--exp-item-bg), var(--exp-item-bg-hover)) padding-box,
					linear-gradient(45deg, #37705F, #52A27A) border-box; */
	}

	hgroup {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}

	h3 {
		flex-basis: 65%;
		justify-self: flex-start;
		font-size: 16px;
		font-weight: 600;
		color: var(--exp-details-header-role);
	}

	p {
		flex-basis: 35%;
		text-align: right;
		font-size: 15px;
		color: var(--exp-details-header-at);
	}

	ul {
		margin: 0;
		padding: 0;
		color: var(--header-description);
	}

	li {
		list-style: "-" outside;
		font-size: 14px;
		padding-left: 4px;
	}
</style>