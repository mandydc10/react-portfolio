import { Link } from "react-router-dom";
import "./ProjectCard.css";
// import IconCSS from "./icons/IconCssSvg3";
// import IconJS from "./icons/IconJSSvg";
// import IconHTML from "./icons/IconHtmlSvg";
import css from "../assets/images/icon_css.svg";
import html from "../assets/images/icon_html.svg";
import javascript from "../assets/images/icon_javascript.svg";

function ProjectCard(props) {
    const { projectData } = props;
    const skills = projectData.skills;
    const skill_list = [css, html, javascript];
    console.log(javascript);

    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} />
                <h3>{projectData.title}</h3>

                {skills && skills.length && skills.map((skill, key) => {
                    return (
                        <>
                            {skill_list.forEach((skill_icon) => {

                                if ({ skill_icon } == skill)
                                    < img key={key} className="card-skills" src={skill_list} />
                                // console.log(skill_icon)
                            }
                            )}
                        </>
                    )
                })
                }
            </Link>
        </div >
    );
}

export default ProjectCard;