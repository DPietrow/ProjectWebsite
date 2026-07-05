import "./void-layout.css";
import "./constellation.css";
import "./background.css";
import "./contact.css";
import "./animations.css";

export default function StarField() {
    const stars = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: 0.7 + Math.random() * 0.8,   // ✅ FIXED (was size)
        opacity: 0.3 + Math.random() * 0.7
    }));

    return (
        <svg
            className="starfield"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            {stars.map((star) => (
                <g key={star.id} opacity={star.opacity}>
                    
                    <line
                        x1={star.x}
                        y1={star.y - star.r * 7}
                        x2={star.x}
                        y2={star.y + star.r * 7}
                    />

                    <line
                        x1={star.x - star.r * 7}
                        y1={star.y}
                        x2={star.x + star.r * 7}
                        y2={star.y}
                    />

                    <line
                        x1={star.x - star.r * 4}
                        y1={star.y - star.r * 4}
                        x2={star.x + star.r * 4}
                        y2={star.y + star.r * 4}
                    />

                    <line
                        x1={star.x + star.r * 4}
                        y1={star.y - star.r * 4}
                        x2={star.x - star.r * 4}
                        y2={star.y + star.r * 4}
                    />

                </g>
            ))}
        </svg>
    );
}