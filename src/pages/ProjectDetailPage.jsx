import { useEffect } from 'react';
// import { oneProject } from "../projectData";
import { allProjects } from "../projectData";
import { useParams } from 'react-router-dom';
import "../pages/ProjectDetailPage.css";

function ProjectPage() {
    const params = useParams();
    let projectDetail = {}

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

    allProjects.map((project) => {
        if (project.id == params.id) {
            projectDetail = project;
        }
    }
    );

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project">
            <div className="project-header">
                <h2>{projectDetail.title}</h2>
                <p className="project-date">Date created: {projectDetail.date_created}</p>

                <ul>
                    {projectDetail.skills.map((skill, key) => {
                        return (
                            <img key={key} className="project-skills" src={skill_list[skill]} />
                        );
                    })}
                </ul>
            </div>
            <h3>Description:</h3>
            <p>{projectDetail.description}</p>
            <a href={projectDetail.href} >
                <img src={projectDetail.image} alt={projectDetail.image_alt} className="project-image" />
                <p className=".project-link">Click here to see it live!</p></a>
        </div>
    );
}

export default ProjectPage;