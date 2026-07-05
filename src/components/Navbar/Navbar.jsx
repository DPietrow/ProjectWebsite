import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">

            <div className="navbar-logo">
                David Pietrow
            </div>

            <nav className="navbar-links">

                <a href="#journey">Journey</a>

                <a href="#projects">Projects</a>

                <a href="#philosophy">Philosophy</a>

                <a href="#contact">Contact</a>

            </nav>

        </header>
    );
}