<script>
    let copyName = "Dave Raymond";
    let copyDate = new Date().getFullYear().toString();
</script>

<div class="page-wrapper">
    <header>
        <hgroup>
            <h1>Dave Raymond</h1>
            <p>Software Engineer; Outdoors Enthusiast; Space Nerd;</p>
        </hgroup>
        <p>From database records to client dashboards, I design and build scalable, human-centric solutions.</p>
        <ul class="list-hrz">
            <li>
                <a href="https://github.com/ravedaymond" target="_blank" aria-label="GitHub">GitHub
                    <!-- <svg aria-hidden="true" focusable="false" ></svg> -->
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/dave-raymond" target="_blank" aria-label="LinkedIn">LinkedIn
                    <!-- <svg aria-hidden="true" focusable="false" ></svg> -->
                </a>
            </li>
        </ul>
        <nav>
            <ul>
                <li><span class="location-indicator"></span><a href="#about">1: About</a></li>
                <li><span class="location-indicator"></span><a href="#experience">2: Experience</a></li>
                <li><span class="location-indicator"></span><a href="#philosophy">3: Philosophy</a></li>
                <li><span class="location-indicator"></span><a href="#labs">4: Labs</a></li>
                <li><span class="location-indicator"></span><a href="#about">5: Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="about">
            <h2 class="sr-only">About</h2>
            <p>
                
            </p>
        </section>
        <section id="experience">
            <h2 class="sr-only">Experience</h2>
            <section class="experience-card">
                <hgroup>
                    <h3>Full Stack Engineer</h3>
                    <p>at <a href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a></p>
                </hgroup>
                <ul>
                    <li>Created new Angular SPA to standardize data and process for all platform clients filing security forms with the SEC.</li>
                    <li>Added features to existing Angular client applications to improve client managing of employee equities and benefits</li>
                    <li>Collaborated with UI/UX leadership teams to improve end user experience and client workflow for new applications.</li>
                    <li>Engaged with accessibility teams to ensure applications met or surpassed 508 accessibility standards.</li>
                </ul>
            </section>
            <section class="experience-card">
                <hgroup>
                    <h3>Software Engineer</h3>
                    <p>at <a href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a></p>
                </hgroup>
                <ul>
                    <li>Developed scalable multi-threaded batch application to liquidate expiring options using Java and Spring Boot.</li>
                    <li>Designed and developed aggregate rule engine to enable dynamic control over current and future batch applications.</li>
                    <li>Created shared Java libraries to standardize Oracle database integration across applications.</li>
                    <li>Lead on Oracle modernization effort across Risk Management to standardize Oracle PL/SQL procedures.</li>
                </ul>
            </section>
            <section class="experience-card">
                <hgroup>
                    <h3>LEAP Associate Software Engineer</h3>
                    <p>at <a href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a></p>
                </hgroup>
                <ul>
                    <li>Improved UI/UX, refactored, and modernized internal social media messaging board application using Angular.</li>
                    <li>Developed back-end web APIs using Node.js and Spring Boot.</li>
                    <li>Worked with relational and non-relational database solutions such as Oracle, MySQL, and MongoDB.</li>
                </ul>
            </section>
            <div>
                <a href="/resume.pdf" target="_blank">View complete resume</a>
            </div>
        </section>
        <section id="work-philosophy">
            <h2 class="sr-only">Principles</h2>
            <p>I approach all work with specific principles in mind.</p>
        </section>
        <section id="contact">
            <h2 class="sr-only">Contact</h2>
            <p>Building cool things is more fun together. Want to get in touch?</p>
            <form>
                
            </form>
        </section>
        <footer>
            <a href="https://github.com/ravedaymond">Designed &amp; developed by {copyName} &copy; {copyDate}</a>
        </footer>
    </main>
</div>

<style>

    .page-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;

        margin: 0 auto;

        border: 2px dashed red;
    }

    header {
        /* min-width: 400px; */
        width: 400px;
        border: 2px dashed green;
    }

    main {
        width: 600px;
        border: 2px dashed blue;
    }

    nav ul {
        list-style: none;
    }

    /* .sr-only {
        position:absolute;
        left:-10000px;
        top:auto;
        width:1px;
        height:1px;
        overflow:hidden;
    } */
</style>