import "./void-layout.css";
import "./constellation.css";
import "./background.css";
import "./contact.css";
import "./animations.css";

const stars = [

    {
        id: "apollo",
        title: "APOLLO",
        subtitle: "RAG Assistant",
        x: 50,
        y: 17,
        north: true
    },

    {
        id: "observatory",
        title: "OBSERVATORY",
        subtitle: "Intro",
        x: 22,
        y: 36
    },

    {
        id: "aphrodite",
        title: "APHRODITE",
        subtitle: "Energy Forecasting",
        x: 78,
        y: 36
    },

    {
        id: "ares",
        title: "ARES",
        subtitle: "Real Estate Model",
        x: 17,
        y: 72
    },

    {
        id: "athena",
        title: "ATHENA",
        subtitle: "Upcoming",
        x: 83,
        y: 72
    },

    {
        id: "artemis",
        title: "ARTEMIS",
        subtitle: "Upcoming",
        x: 50,
        y: 92
    }

];

const lines = [

    ["apollo","observatory"],
    ["apollo","aphrodite"],

    ["observatory","ares"],
    ["aphrodite","athena"],

    ["ares","artemis"],
    ["athena","artemis"],

    ["observatory","center"],
    ["aphrodite","center"],

    ["ares","center"],
    ["athena","center"],

    ["center","artemis"]

];

function position(id) {
    if (id === "center") return { x: 50, y: 54 };

    const found = stars.find(s => s.id === id);
    return found || { x: 50, y: 50 }; // prevents undefined crash
}

export default function VoidConstellation(){

    function navigate(id){

        document.getElementById(id)?.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    }

    return(

        <div className="constellation-board">

            {/* Geometry */}

            <svg
                className="constellation-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >

                {lines.map(([a,b],i)=>{

                    const p1=position(a);
                    const p2=position(b);

                    return(

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

            </svg>

            {/* CENTER RETICLE */}

            <div
                className="center-reticle"
                style={{

                    left:"50%",
                    top:"54%"

                }}
            >

                <div className="reticle-core"/>

            </div>

            {/* PROJECT STARS */}

           {stars.map((star) => (

                <button
                    key={star.id}
                    className={`project-star ${star.north ? "north" : ""}`}
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`
                    }}
                    onClick={() => navigate(star.id)}
                >
                
                    <div className="star-visual">
                
                        <span className="star-glow" />
                        <span className="star-ring" />
                        <span className="star-core" />
                
                    </div>
                
                    <div className="star-label">
                        <h3>{star.title}</h3>
                        <p>{star.subtitle}</p>
                    </div>
                
                </button>

            ))}

        </div>

    );

}