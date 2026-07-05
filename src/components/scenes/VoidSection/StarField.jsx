import "./constellation.css";

const stars = [
    { id: "apollo", x: 500, y: 170, title: "APOLLO", subtitle: "RAG Assistant" },
    { id: "observatory", x: 220, y: 360, title: "OBSERVATORY", subtitle: "Intro" },
    { id: "aphrodite", x: 780, y: 360, title: "APHRODITE", subtitle: "Energy Forecasting" },
    { id: "ares", x: 170, y: 720, title: "ARES", subtitle: "Real Estate Model" },
    { id: "athena", x: 830, y: 720, title: "ATHENA", subtitle: "Upcoming" },
    { id: "artemis", x: 500, y: 920, title: "ARTEMIS", subtitle: "Upcoming" }
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

export default function StarField() {

    function navigate(id) {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (
        <svg
            className="constellation-svg"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
        >

            {/* GRID IS SEPARATE LAYER (handled in HUDGrid) */}

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
                    className="star-node"
                    transform={`translate(${s.x}, ${s.y})`}
                    onClick={() => navigate(s.id)}
                >
                {/* glow */}
                <circle r="18" fill="rgba(255,220,160,0.12)" />
                        
                {/* ring */}
                <circle r="9" fill="none" stroke="rgba(255,220,160,0.4)" />
                        
                {/* core star */}
                <polygon
                    points="
                        0,-10
                        2.5,-3
                        10,-3
                        4,2
                        6,10
                        0,5
                        -6,10
                        -4,2
                        -10,-3
                        -2.5,-3
                    "
                    fill="#fff"
                    filter="drop-shadow(0 0 6px rgba(255,220,160,0.8))"
                />

                {/* LABEL (SVG TEXT — NOT HTML) */}
                <text
                    x="0"
                    y="28"
                    textAnchor="middle"
                    className="star-title"
                >
                    {s.title}
                </text>
                        
                <text
                    x="0"
                    y="40"
                    textAnchor="middle"
                    className="star-subtitle"
                >
                    {s.subtitle}
                </text>
            </g>
            ))}

        </svg>
    );
}