import "../animations.jsx";
import "./SkillsSection.css";
import "../components/icons/Icons.css";

import HtmlIcon from "./icons/IconHtmlSvg.jsx";
import DjangoIcon from "./icons/IconDjangoSvg.jsx";
import PythonIcon from "./icons/IconPythonSvg.jsx";
import ReactIcon from "./icons/IconReactSvg.jsx";
import JSIcon from "./icons/IconJSSvg.jsx";
import CSharpIcon from "./icons/IconCSharpSvg.jsx";
import CssIcon from "./icons/IconCssSvg3.jsx";

function SkillsSection() {
    return (
        <div className="skills-section">
            <div>
                <CssIcon />
                <HtmlIcon />
                <JSIcon />

            </div>
            <div>
                <PythonIcon />
                <DjangoIcon />
                <ReactIcon />
                <CSharpIcon />
            </div>
        </div >
    );
}

export default SkillsSection;