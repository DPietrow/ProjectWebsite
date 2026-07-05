import "./scene.css";

export default function ArtemisSection() {
    return (
        <section className="scene artemis"  id="artemis">

            <div className="scene-inner">

                <span className="scene-label">Artemis</span>

                <h2 className="scene-title">
                    Experimental Systems
                </h2>

                <p className="scene-text">
                    A sandbox environment for rapid prototyping of AI
                    architectures, retrieval strategies, and generative
                    system behaviors.
                </p>

                <div className="scene-meta">
                    <span>🧪 Prototype-first design</span>
                    <span>⚡ Fast iteration pipelines</span>
                    <span>🔬 Model experimentation layer</span>
                </div>

            </div>

        </section>
    );
}