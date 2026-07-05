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
                    transform={`translate(${s.x}, ${s.y})`}
                    onClick={() => navigate(s.id)}
                    className="star-node"
                >

                    {/* TRUE CINEMATIC STAR (NOT A CIRCLE) */}
                    <g className="star-core"transform="scale(1.5)">

                        {/* outer glow bloom */}
                        <circle
                            r="18"
                            fill="rgba(255, 220, 160, 0.10)"
                        />

                        {/* soft halo ring */}
                        <circle
                            r="10"
                            fill="none"
                            stroke="rgba(255, 220, 160, 0.45)"
                            strokeWidth="0.4"
                        />

                        {/* vertical flare */}
                        <line
                            x1="0"
                            y1="-14"
                            x2="0"
                            y2="14"
                            stroke="rgba(255, 240, 200, 0.8)"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                        />

                        {/* horizontal flare */}
                        <line
                            x1="-14"
                            y1="0"
                            x2="14"
                            y2="0"
                            stroke="rgba(255, 240, 200, 0.8)"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                        />

                        {/* core star (actual point light) */}
                        <circle
                            r="2.4"
                            fill="#ffffff"
                        />

                        {/* inner glow pulse */}
                        <circle
                            r="5"
                            fill="rgba(255, 220, 160, 0.25)"
                        />

                    </g>

                    <circle r="18" className="star-glow" />
                    <circle r="8" className="star-ring" />

                    {/* LABELS */}
                    <foreignObject 
                        x="-60"
                        y="20"
                        width="120"
                        height="60"
                        className="star-label-box"
                    >
                        <div xmlns="http://www.w3.org/1999/xhtml" className="star-label">
                            <div className="star-title">{s.title}</div>
                            <div className="star-subtitle">{s.subtitle}</div>
                        </div>
                    </foreignObject>

                </g>
            ))}

        </svg>
    );
}