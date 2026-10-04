import "./project-section.css";

export default function ArtemisSection() {
    return (
        <section className="project-section" id="artemis">

            <div className="project-container">

                <div className="project-kicker">ARTEMIS</div>

                <h2 className="project-title">AI Resume Optimization System</h2>

                <p className="project-text">
                    Artemis is a personal case study in AI engineering. You describe a change to a small Flask app in plain English; five agents design it, write it, test it and review it; and after you approve, a pull request is opened.
                </p>

                <div className="project-link">
                    agentteam.aiengineering.team/#/about
                </div>

                <div className="project-grid">

                    <div className="project-card">
                        <h3>Capabilities</h3>
                        <ul>
                            <li>Multi-Agentic Workflows</li>
                            <li>Harness and Loop Engineering</li>
                            <li>LLMOps</li>
                            <li>MCP Server Implementation</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Focus</h3>
                        <p>
                            AI-driven development, harness engineering and LLMOps, and clear observability.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}