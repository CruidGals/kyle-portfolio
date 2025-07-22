import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react"

const contacts = [
    { icon: faGithub, link: "https://github.com/CruidGals" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/kyle-chiem/" },
    { icon: faEnvelope, link: "mailto:kyle.chiem@outlook.com"}
]

const ContactFooter = () => {
    const [showContactFooter, setShowContactFooter] = useState(false);

    useEffect(() => {
        const home = document.getElementById('home');
        const about = document.getElementById('about');
    
        const handleScroll = () => {
            if (!home || !about) return;
        
            const scrollY = window.scrollY;
            const aboutTop = about.offsetTop;
        
            if (scrollY >= aboutTop) {
                setShowContactFooter(true);
            } else {
                setShowContactFooter(false);
            }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll)};
    }, []);

    return (
        <div id="contact-footer" className={`${showContactFooter ? 'visible-nav' : 'hidden-nav'}`}>
            {contacts.map( (contact) => (
                <a href={contact.link} className="social-icon"><FontAwesomeIcon icon={contact.icon} size="2x"/></a>
            ))}
        </div>
    )
}

export default ContactFooter