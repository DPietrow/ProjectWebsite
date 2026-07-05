import "./constellation.css";

const stars = [
    { id: "apollo", x: 500, y: 170 },
    { id: "observatory", x: 220, y: 360 },
    { id: "aphrodite", x: 780, y: 360 },
    { id: "ares", x: 170, y: 720 },
    { id: "athena", x: 830, y: 720 },
    { id: "artemis", x: 500, y: 920 }
];

const lines = [
    ["apollo", "observatory"],
    ["apollo", "aphrodite"],
    ["observatory", "ares"],
    ["aphrodite", "athena"],
    ["ares", "artemis"],
    ["athena", "artemis"]
];

function pos(id) {
    return stars.find(s => s.id === id);
}

export default function VoidConstellation() {

    function navigate(id) {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (
        <div className="void-section">

            <svg
                className="constellation-svg"
                viewBox="0 0 1000 1000"
            >

                {/* LINES */}
                {lines.map(([a, b], i) => {
                    const p1 = pos(a);
                    const p2 = pos(b);

                    return (
                        <line
                            key={i}
                            x1={p1.x}
                            y1={p1.y}
                            x2={p2.x}
                            y2={p2.y}
                            className="constellation-line"
                        />
                    );
                })}

                {/* STARS */}
                {stars.map((s) => (
                    <g
                        key={s.id}
                        transform={`translate(${s.x}, ${s.y})`}
                        onClick={() => navigate(s.id)}
                        style={{ cursor: "pointer" }}
                    >

                        {/* outer glow */}
                        <circle r="18" fill="rgba(255,220,160,0.12)" />

                        {/* ring */}
                        <circle r="9" fill="none" stroke="rgba(255,220,160,0.4)" />

                        {/* core */}
                        <circle r="2.8" fill="#fff" />

                    </g>
                ))}

            </svg>

        </div>
    );
}