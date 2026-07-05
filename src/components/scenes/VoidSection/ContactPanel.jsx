import "./void-layout.css";
import "./constellation.css";
import "./background.css";
import "./contact.css";
import "./animations.css";

const contacts = [
    {
        title: "GitHub",
        value: "github.com/DPietrow",
        href: "https://github.com/DPietrow",
        icon: "⌘"
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/david-pietrow",
        href: "https://www.linkedin.com/in/david-pietrow/",
        icon: "in"
    },
    {
        title: "Email",
        value: "davidpietrow17@gmail.com",
        href: "mailto:davidpietrow17@gmail.com",
        icon: "✉"
    }
];

export default function ContactPanel() {

    return (

        <section className="contact-panel">

            <div className="contact-header">

                <div className="contact-kicker">
                    TRANSMISSION CHANNELS
                </div>

                <h3>
                    Contact Mission Control
                </h3>

                <p>
                    Interested in AI engineering, enterprise architecture,
                    forward deployment, or building production AI systems?
                    Let's connect.
                </p>

            </div>

            <div className="contact-grid">

                {contacts.map((contact) => (

                    <a
                        key={contact.title}
                        href={contact.href}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >

                        <div className="contact-icon">
                            {contact.icon}
                        </div>

                        <div className="contact-title">
                            {contact.title}
                        </div>

                        <div className="contact-value">
                            {contact.value}
                        </div>

                    </a>

                ))}

            </div>

        </section>

    );

}