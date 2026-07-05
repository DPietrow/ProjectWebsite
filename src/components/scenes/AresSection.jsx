import "./project-section.css";

export default function AresSection() {
    return (
        <section className="project-section" id="ares">

            <div className="project-container">

                <div className="project-kicker">ARES</div>

                <h2 className="project-title">Real Estate Price Prediction System</h2>

                <p className="project-text">
                    Ares is a predictive analytics system that estimates real estate valuations using structured property data 
                    and market signals to uncover pricing trends and investment insights.
                </p>

                <a className="project-link" href="https://ares-project.com" target="_blank">
                    ares-project.com
                </a>

                <div className="project-grid">

                    <div className="project-card">
                        <h3>Capabilities</h3>
                        <ul>
                            <li>Property value prediction models</li>
                            <li>Market trend feature engineering</li>
                            <li>Regression-based ML pipelines</li>
                            <li>Investment insight generation</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Focus</h3>
                        <p>
                            Data-driven real estate intelligence and scalable valuation modeling systems.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}