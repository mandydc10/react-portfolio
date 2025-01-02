import { allProjects } from "../projectData";
import ProjectCard from "../components/ProjectCard";

import "./ProjectsSection.css";
// not in use yet

function ProjectsSection() {

    return (
        <div className="project-section">
            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })
            }
        </div >
    );
}

export default ProjectsSection;