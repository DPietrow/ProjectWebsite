import Universe from "./components/Universe/Universe";
import Hero from "./components/Hero/Hero";
import ApolloSection from "./components/scenes/ApolloSection";
import AphroditeSection from "./components/scenes/AphroditeSection";
import AresSection from "./components/scenes/AresSection";
import ArtemisSection from "./components/scenes/ArtemisSection";
import AthenaSection from "./components/scenes/AthenaSection";
import VoidSection from "./components/scenes/VoidSection/VoidSection";
import AboutSection from "./components/scenes/AboutSection";

import "./components/scenes/scene.css";

function App() {
    return (
        <>
            <Universe />


            <main     
                className="app-content"
                id="portfolio"         
            >
                <div className="page-container">

                    {/* HERO MUST BE FIRST REAL CONTENT */}
                    <Hero />
                    <section className="spacer" />

                    <AboutSection />

                    <section className="spacer" />

                    <ApolloSection />
                    <section className="spacer" />

                    <AphroditeSection />
                    <section className="spacer" />

                    <AresSection />
                    <section className="spacer" />

                    <AthenaSection />
                    <section className="spacer" />

                    <ArtemisSection />
                    <section className="spacer" />

                    <VoidSection />

                </div>
            </main>
        </>
    );
}

export default App;