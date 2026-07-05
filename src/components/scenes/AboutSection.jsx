import "./about-section.css";

export default function AboutSection() {
    return (
        <section className="about-section" id="observatory">

            <div className="about-container">

                <div className="about-kicker">
                    ABOUT
                </div>

                <h2 className="about-title">
                    From Enterprise Systems to AI Engineering
                </h2>

                <p className="about-text">
                    I’m an Enterprise Architect and AI/ML Engineer focused on building intelligent, production-ready systems 
                    that bridge data, machine learning, cloud infrastructure, and full stack software engineering.
                </p>

                <p className="about-text">
                    My career began in full-stack development, cloud engineering, and enterprise architecture, where I designed 
                    scalable applications and cloud-native solutions for complex organizations. Today, I apply that foundation 
                    to develop end-to-end AI products that transform data into actionable insights.
                </p>

                <div className="about-grid">

                    <div className="about-card">
                        <h3>Core Focus Areas</h3>
                        <ul>
                            <li>Machine Learning & Deep Learning</li>
                            <li>Predictive Analytics & Time-Series Forecasting</li>
                            <li>End-to-End AI Product Development</li>
                            <li>Forward-Deployed AI Engineering</li>
                            <li>MLOps & Production ML Systems</li>
                            <li>Data Engineering & Feature Pipelines</li>
                            <li>Generative AI Applications</li>
                            <li>Cloud Architecture (Azure & GCP)</li>
                            <li>Kubernetes & Terraform</li>
                        </ul>
                    </div>

                    <div className="about-card">
                        <h3>Engineering Philosophy</h3>
                        <p>
                            While my background is rooted in enterprise architecture and cloud engineering, my AI expertise 
                            has been built through hands-on systems: forecasting platforms, retrieval systems, and 
                            production machine learning pipelines deployed end-to-end.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}