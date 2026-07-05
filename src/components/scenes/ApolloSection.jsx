import "./project-section.css";

export default function ApolloSection() {
    return (
        <section className="project-section" id="apollo">

            <div className="project-container">

                <div className="project-kicker">APOLLO</div>

                <h2 className="project-title">RAG-Powered Knowledge Assistant</h2>

                <p className="project-text">
                    Apollo is a production-grade Retrieval-Augmented Generation (RAG) system designed to transform 
                    unstructured knowledge into an intelligent conversational interface with grounded, source-backed responses.
                </p>

                <a className="project-link" href="https://apollo-assistant.com/" target="_blank">
                    apollo-assistant.com
                </a>

                <div className="project-grid">

                    <div className="project-card">
                        <h3>Capabilities</h3>
                        <ul>
                            <li>Document ingestion & chunking pipeline</li>
                            <li>Vector-based semantic search</li>
                            <li>LLM grounded response generation</li>
                            <li>Source attribution & citations</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Focus</h3>
                        <p>
                            Enterprise knowledge systems, internal tooling, and scalable RAG architectures for production environments.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}