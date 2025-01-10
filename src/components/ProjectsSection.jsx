import { allProjects } from "../projectData";
import ProjectCard from "../components/ProjectCard";

import "./ProjectsSection.css";

function ProjectsSection() {

    return (
        <div className="project-section">
            {allProjects.map((projectData, key) => {
                return <ProjectCard className="card" key={key} projectData={projectData} />;
            })
            }
        </div >
    );
}

export default ProjectsSection;