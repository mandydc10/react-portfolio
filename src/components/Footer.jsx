import FBLogo from "../assets/images/socials_fb.png";
import IGLogo from "../assets/images/socials_ig.png";
import "./Footer.css";
import LILogo from "../assets/images/socials_li.png";
import ghLogo from "../assets/images/socials_gh.png";

function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <a aria-label="" href="https://github.com/mandydc10" className="github-link">
                    <img
                        src={ghLogo} alt="github-link" /></a>
                <a href="https://www.linkedin.com/in/amandacook2" id="linked-in-link">
                    <img src={LILogo}
                        alt="linked-in-logo" /></a>
            </div>
            <p className="copyright">&#169; Amanda Cook 2024</p>
        </div>
    )
}

export default Footer;