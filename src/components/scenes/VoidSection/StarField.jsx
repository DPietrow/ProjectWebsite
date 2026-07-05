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
                            
                    {/* =========================
                        CINEMATIC STAR CORE
                    ========================== */}
                    <g className="star-core" transform="scale(1.35)">
                    
                        <circle r="18" fill="rgba(255, 220, 160, 0.10)" />
                    
                        <circle
                            r="10"
                            fill="none"
                            stroke="rgba(255, 220, 160, 0.45)"
                            strokeWidth="0.4"
                        />
                
                        <line
                            x1="0"
                            y1="-14"
                            x2="0"
                            y2="14"
                            stroke="rgba(255, 240, 200, 0.8)"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                        />
                
                        <line
                            x1="-14"
                            y1="0"
                            x2="14"
                            y2="0"
                            stroke="rgba(255, 240, 200, 0.8)"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                        />
                
                        <circle r="2.4" fill="#ffffff" />
                    
                        <circle r="5" fill="rgba(255, 220, 160, 0.25)" />
                    
                    </g>
                    
                    {/* =========================
                        GLOW + RING (unchanged)
                    ========================== */}
                    <circle r="18" className="star-glow" />
                    <circle r="8" className="star-ring" />
                    
                    {/* =========================
                        LABELS (FIXED SCALE SYSTEM)
                    ========================== */}
                
                    <text
                        x="0"
                        y="34"
                        textAnchor="middle"
                        className="star-title"
                    >
                        {s.title}
                    </text>
                    
                    <text
                        x="0"
                        y="48"
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


                