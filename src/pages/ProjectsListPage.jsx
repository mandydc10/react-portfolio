import { allProjects } from "../projectData";

import ProjectCard from "../components/ProjectCard";
import GameWidget from "../components/GameWidget";

import "../pages/ProjectsListPage.css";

function ProjectListPage() {
    return (
        <div className="project-section">
            <GameWidget />

            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })
            }

        </div>
    );
}

export default ProjectListPage;