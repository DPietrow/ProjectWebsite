import "./void-layout.css";
import "./constellation.css";
import "./background.css";
import "./contact.css";
import "./animations.css";

import StarField from "./StarField";
import HUDGrid from "./HUDGrid";
import CompassRose from "./CompassRose";
import VoidConstellation from "./VoidConstellation";
import ContactPanel from "./ContactPanel";

export default function VoidSection() {

    return (

        <section
            className="void-v3"
            id="constellation"
        >

            <div className="void-content">

                {/* =======================================
                    HEADER
                ======================================== */}

                <header className="void-header">

                    <div className="void-kicker">

                        <span />

                        CONSTELLATION

                        <span />

                    </div>

                    <h2>

                        Navigation System

                    </h2>

                    <p className="void-subtitle">

                        Explore the universe of projects.

                        <br />

                        Click any star to navigate.

                    </p>

                </header>

                {/* =======================================
                    NAVIGATION CONSOLE
                ======================================== */}

                <div className="constellation-wrapper">

                    <StarField />

                    <HUDGrid />

                    <CompassRose />

                    <VoidConstellation />

                </div>

                {/* =======================================
                    CONTACT
                ======================================== */}

                <ContactPanel />

            </div>

        </section>

    );

}