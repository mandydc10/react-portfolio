import AboutSection from "../components/About.jsx";
import "./AboutPage.css";
import { pagesText } from "../projectData.js"

function AboutPage() {
    return (
        <div className="about-page">
            <AboutSection />
            <a className="btn">Connect with me!</a>
        </div>
    );
}

export default AboutPage;