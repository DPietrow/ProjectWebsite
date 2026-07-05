import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-kicker">
          ENGINEERING INTELLIGENT SYSTEMS
        </span>

        <h1>
          David Pietrow
        </h1>

        <p>
          Designing and delivering production AI systems where
          enterprise architecture, machine learning, and technical
          execution converge.
        </p>

        <button
          className="scroll-indicator"
          onClick={() =>
            document
              .getElementById("constellation")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>Begin the journey</span>
          <span className="arrow">↓</span>
        </button>

      </div>

      <div className="hero-preview">

        <div className="preview-star s1"></div>
        <div className="preview-star s2"></div>
        <div className="preview-star s3"></div>

        <div className="preview-line l1"></div>
        <div className="preview-line l2"></div>

      </div>

    </section>
  );
}