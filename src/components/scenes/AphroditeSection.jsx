import "./scene.css";

export default function AphroditeSection() {
    return (
        <section className="scene aphrodite" id="aphrodite">

            <div className="scene-inner">

                <span className="scene-label">Aphrodite</span>

                <h2 className="scene-title">
                    Energy Forecasting System
                </h2>

                <p className="scene-text">
                    A time-series forecasting pipeline designed to model
                    and predict electrical load demand using historical
                    grid data and engineered temporal features.
                </p>

                <div className="scene-meta">
                    <span>⚡ PJM energy datasets</span>
                    <span>📊 XGBoost + deep learning baselines</span>
                    <span>📈 Multi-horizon forecasting engine</span>
                </div>

            </div>

        </section>
    );
}