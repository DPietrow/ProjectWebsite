import "./project-section.css";

export default function ArtemisSection() {
    return (
        <section className="project-section" id="artemis">

            <div className="project-container">

                <div className="project-kicker">ARTEMIS</div>

                <h2 className="project-title">AI Resume Optimization System</h2>

                <p className="project-text">
                    Artemis is an AI-powered ATS optimization system that aligns resumes with job descriptions 
                    by intelligently rewriting and enhancing candidate profiles for better matching.
                </p>

                <div className="project-link">
                    link coming soon
                </div>

                <div className="project-grid">

                    <div className="project-card">
                        <h3>Capabilities</h3>
                        <ul>
                            <li>Job description parsing</li>
                            <li>Resume optimization & rewriting</li>
                            <li>ATS keyword enhancement</li>
                            <li>Role alignment scoring</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Focus</h3>
                        <p>
                            AI-driven career tools, candidate optimization, and LLM-based document transformation.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}