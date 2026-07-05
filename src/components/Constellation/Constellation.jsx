import "./constellation.css";

export default function Constellation() {
  return (
    <section
      id="constellation"
      className="constellation"
    >
      <div className="constellation-content">

        <div className="constellation-node">

          <div className="node-glow"></div>

          <div className="node-star"></div>

        </div>

        <div className="constellation-copy">

          <span className="constellation-label">
            FIRST DISCOVERY
          </span>

          <h2>Apollo</h2>

          <p>
            An enterprise AI knowledge assistant built to
            transform scattered documentation into
            conversational intelligence.
          </p>

        </div>

      </div>
    </section>
  );
}