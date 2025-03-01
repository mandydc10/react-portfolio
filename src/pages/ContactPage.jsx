// import { useEffect } from 'react';
import ContactForm from "../components/forms/ContactForm.jsx";
import AboutSection from "../components/forms/ContactForm.jsx";
import "./ContactPage.css";
// import { pagesText } from "../projectData.js"

function ContactPage() {
    // useEffect(() => {
    //     // Scroll to the top when the component mounts
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="contact-page">
            <h1>Get in touch!</h1>
            <ContactForm />
        </div>
    );
}

export default ContactPage;