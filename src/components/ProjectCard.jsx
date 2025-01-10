import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    const project_skills = projectData.skills;

    const skill_list = {
        css: "/assets/images/icon_css.svg",
        html: "/assets/images/icon_html.svg",
        javascript: "/assets/images/icon_javascript.svg",
        python: "/assets/images/icon_python.svg",
        react: "/assets/images/icon_react.svg",
        django: "/assets/images/icon_django.svg",
        csharp: "/assets/images/icon_csharp.svg",
        unity: "/assets/images/icon_unity.svg"
    };

    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} />
                <h3>{projectData.title}</h3>

                {project_skills.length && project_skills.map((skill, key) => {
                    return (
                        <img key={key} className="card-skills" src={skill_list[skill]} />
                    )
                })
                }
                <p>{projectData.description}</p>
            </Link>
        </div >
    );
}

export default ProjectCard;