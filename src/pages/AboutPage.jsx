import { useEffect } from 'react';
import AboutSection from "../components/About.jsx";
import "./AboutPage.css";
import { pagesText } from "../projectData.js"

function AboutPage() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <AboutSection />
            <a className="btn">Connect with me!</a>
        </div>
    );
}

export default AboutPage;