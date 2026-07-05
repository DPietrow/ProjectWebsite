import "./project-section.css";

export default function AthenaSection() {
    return (
        <section className="project-section" id="athena">

            <div className="project-container">

                <div className="project-kicker">ATHENA</div>

                <h2 className="project-title">Enterprise Bid Intelligence System</h2>

                <p className="project-text">
                    Athena is an enterprise intelligence platform that scrapes and structures procurement data 
                    to surface contract opportunities and generate AI-assisted bid insights.
                </p>

                <div className="project-link">
                    link coming soon
                </div>

                <div className="project-grid">

                    <div className="project-card">
                        <h3>Capabilities</h3>
                        <ul>
                            <li>Procurement website scraping</li>
                            <li>Contract structuring pipeline</li>
                            <li>Bid opportunity classification</li>
                            <li>AI-generated bid summaries</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Focus</h3>
                        <p>
                            Enterprise RFP intelligence, automation, and structured opportunity discovery systems.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}