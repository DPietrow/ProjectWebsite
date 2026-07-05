import "./project-section.css";

export default function AphroditeSection() {
    return (
        <section className="project-section" id="aphrodite">

            <div className="project-container">

                <div className="project-kicker">APHRODITE</div>

                <h2 className="project-title">Energy Forecasting Intelligence System</h2>

                <p className="project-text">
                    Aphrodite is a machine learning-powered energy forecasting platform designed to predict electrical load 
                    demand across multiple time horizons using hybrid time-series models.
                </p>

                <a className="project-link" href="https://www.aphrodite-project.com/" target="_blank">
                    aphrodite-project.com
                </a>

                <div className="project-grid">

                    <div className="project-card">
                        <h3>Capabilities</h3>
                        <ul>
                            <li>Multi-horizon forecasting (hourly → monthly)</li>
                            <li>XGBoost + deep learning model comparison</li>
                            <li>Seasonal feature engineering</li>
                            <li>Forecast visualization dashboard</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Focus</h3>
                        <p>
                            Time-series forecasting, production ML pipelines, and energy demand intelligence systems.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}