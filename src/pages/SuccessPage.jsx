import { useEffect } from 'react';
// import ContactForm from "../components/forms/ContactForm.jsx";
// import AboutSection from "../components/forms/ContactForm.jsx";
import "./ContactPage.css";
// import { pagesText } from "../projectData.js"

function SuccessPage() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <h1>Get in touch!</h1>
            <p>Your message has been submitted successfully. </p>
            <p>We will respond as soon as possible.</p>
        </div>
    );
}

export default SuccessPage;