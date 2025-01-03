import "./HeroSection.css";
import heroImage from "../assets/images/brand_hero.png";


function HeroSection() {

    return (
        <div className="hero-section">
            <img src={heroImage} className="picture-1" />
            <h1>Software Developer</h1>

        </ div >
    );
}

export default HeroSection;