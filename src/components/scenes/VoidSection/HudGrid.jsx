import "./constellation.css";

export default function HUDGrid() {
    return (
        <svg
            className="hud-grid"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
        >

            {/* vertical */}
            {Array.from({ length: 20 }).map((_, i) => (
                <line
                    key={`v${i}`}
                    x1={i * 50}
                    y1="0"
                    x2={i * 50}
                    y2="1000"
                />
            ))}

            {/* horizontal */}
            {Array.from({ length: 20 }).map((_, i) => (
                <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 50}
                    x2="1000"
                    y2={i * 50}
                />
            ))}

        </svg>
    );
}