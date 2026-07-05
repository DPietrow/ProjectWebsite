import "./void-layout.css";
import "./constellation.css";
import "./background.css";
import "./contact.css";
import "./animations.css";

export default function HUDGrid() {

    return (

        <svg
            className="hud-grid"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >

            {Array.from({ length: 20 }).map((_, i) => (

                <line

                    key={`v${i}`}

                    x1={i * 5}

                    y1="0"

                    x2={i * 5}

                    y2="100"

                />

            ))}

            {Array.from({ length: 20 }).map((_, i) => (

                <line

                    key={`h${i}`}

                    x1="0"

                    y1={i * 5}

                    x2="100"

                    y2={i * 5}

                />

            ))}

        </svg>

    );

}