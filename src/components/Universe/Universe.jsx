import { useEffect, useRef } from "react";
import "./universe.css";
import { sceneMap } from "./sceneMap";

const lerp = (a, b, t) => a + (b - a) * t;

export default function Universe() {
    const universeRef = useRef(null);
    const darknessRef = useRef(null);

    const camera = useRef(0);
    const target = useRef(0);

    const frame = useRef(null);
    const layers = useRef([]);

    useEffect(() => {

        const render = () => {

            // ----------------------------------------
            // SCROLL PROGRESS
            // ----------------------------------------

            const max =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const scrollProgress =
                max > 0 ? window.scrollY / max : 0;

            target.current = Math.min(Math.max(scrollProgress, 0), 1);

            camera.current = lerp(camera.current, target.current, 0.035);

            const cam = camera.current;
            const total = sceneMap.length;

            // ----------------------------------------
            // VOID PROGRESS (CALCULATED FIRST)
            // ----------------------------------------

            const constSection = document.getElementById("constellation");

            let voidProgress = 0;

            if (constSection) {
                const rect = constSection.getBoundingClientRect();

                const start = window.innerHeight * 0.7;
                const end = window.innerHeight * 0.2;

                voidProgress = 1 - Math.min(
                    Math.max((rect.top - end) / (start - end), 0),
                    1
                );
            }

            // ----------------------------------------
            // SCENE CROSSFADE
            // ----------------------------------------

            layers.current.forEach((layer, i) => {
                if (!layer) return;

                const center = i / (total - 1);
                const dist = Math.abs(cam - center);

                const opacity = Math.exp(-(dist * dist) / 0.018);

                layer.style.opacity = opacity;

                layer.style.transform =
                    `translate3d(0, ${(cam - center) * 18}px, 0) scale(1.05)`;
            });

            // ----------------------------------------
            // VOID LAYER FADE
            // ----------------------------------------

            const voidLayer = layers.current["void"];

            if (voidLayer) {
                voidLayer.style.opacity = voidProgress;
            }

            // ----------------------------------------
            // ATMOSPHERIC EFFECTS
            // ----------------------------------------

            if (universeRef.current) {
                universeRef.current.style.filter =
                    `brightness(${1 - voidProgress * 0.25})
                     contrast(${1 + voidProgress * 0.10})
                     saturate(${1 - voidProgress * 0.10})`;

                universeRef.current.style.transform =
                    `scale(${1 + voidProgress * 0.02})`;
            }

            if (darknessRef.current) {
                darknessRef.current.style.opacity = voidProgress;
            }

            frame.current = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(frame.current);

    }, []);

    return (
        <div ref={universeRef} className="universe">

            {sceneMap.map((scene, i) => (
                <div
                    key={scene.id}
                    ref={(el) => (layers.current[i] = el)}
                    className="universe-layer"
                    style={{
                        backgroundImage: `url(${scene.bg})`,
                        zIndex: i
                    }}
                />
            ))}

            {/* VOID BACKGROUND LAYER */}
            <div
                className="universe-void"
                ref={(el) => (layers.current["void"] = el)}
                style={{
                    backgroundImage: `url(/assets/backgrounds/void.webp)`,
                    zIndex: -1,
                    opacity: 0
                }}
            />

            <div className="universe-vignette" />

            <div
                ref={darknessRef}
                className="universe-darkness"
            />

        </div>
    );
}