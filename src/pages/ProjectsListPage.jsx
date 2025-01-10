import { useEffect } from 'react';
import { allProjects } from "../projectData";

import ProjectCard from "../components/ProjectCard";
import GameWidget from "../components/GameWidget";

import "../pages/ProjectsListPage.css";

function ProjectListPage() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-section">
            <GameWidget className="projects-card" />

            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })
            }

        </div>
    );
}

export default ProjectListPage;