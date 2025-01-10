import { useEffect } from 'react';
// import { oneProject } from "../projectData";
import { allProjects } from "../projectData";
import { useParams } from 'react-router-dom';
import "../pages/ProjectDetailPage.css";

function ProjectPage() {
    const params = useParams();
    let projectDetail = {}

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
            <h2>{projectDetail.title}</h2>
            <h3>Date created: {projectDetail.date_created}</h3>
            <a href={projectDetail.href}>See it live!</a>
            <p>{`Description: ${projectDetail.description}`}</p>
            <h3>Skills:</h3>
            <ul>
                {projectDetail.skills.map((skill, key) => {
                    return (
                        <li key={key}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <img src={projectDetail.image} alt={projectDetail.image_alt} />
        </div>
    );
}

export default ProjectPage;