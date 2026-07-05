import "./void-layout.css";
import "./constellation.css";
import "./background.css";
import "./contact.css";
import "./animations.css";

import StarField from "./StarField";
import HUDGrid from "./HUDGrid";
import ContactPanel from "./ContactPanel";

export default function VoidSection() {
    return (
        <section className="void-v3" id="constellation">

            <div className="void-content">

                <header className="void-header">
                    <div className="void-kicker">
                        <span />
                        CONSTELLATION
                        <span />
                    </div>

                    <h2>Navigation System</h2>

                    <p className="void-subtitle">
                        Explore the universe of projects.<br />
                        Click any star to navigate.
                    </p>
                </header>

                <div className="constellation-wrapper">

                    <HUDGrid />
                    <StarField />

                </div>
                <ContactPanel />
            </div>

        </section>
    );
}