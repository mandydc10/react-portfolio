import "./HeroSection.css";
import heroImage from "../assets/images/brand_hero.png";


function HeroSection() {

    return (
        <div className="background-image">
            <img src={heroImage} className="picture-1" />

        </ div >
    );
}

export default HeroSection;