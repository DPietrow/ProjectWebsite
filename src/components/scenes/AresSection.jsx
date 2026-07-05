import "./scene.css";

export default function AresSection() {
    return (
        <section className="scene ares" id="ares">

            <div className="scene-inner">

                <span className="scene-label">Ares</span>

                <h2 className="scene-title">
                    Real Estate ML System
                </h2>

                <p className="scene-text">
                    A machine learning pipeline that predicts real estate
                    pricing trends using structured market data, location
                    features, and historical pricing signals.
                </p>

                <div className="scene-meta">
                    <span>🏠 Property valuation modeling</span>
                    <span>🧠 Gradient boosting regression</span>
                    <span>📍 Location-driven feature engineering</span>
                </div>

            </div>

        </section>
    );
}