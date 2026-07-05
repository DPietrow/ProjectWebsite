import "./scene.css";

export default function AthenaSection() {
    return (
        <section className="scene athena"  id="athena">

            <div className="scene-inner">

                <span className="scene-label">Athena</span>

                <h2 className="scene-title">
                    Future System
                </h2>

                <p className="scene-text">
                    An upcoming AI system currently in design phase,
                    focused on advanced reasoning, structured knowledge
                    retrieval, and agent-based workflows.
                </p>

                <div className="scene-meta">
                    <span>🚧 In development</span>
                    <span>🧠 Agent-based architecture</span>
                    <span>⚙️ Knowledge graph integration</span>
                </div>

            </div>

        </section>
    );
}