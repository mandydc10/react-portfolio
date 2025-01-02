import { allProjects } from "../projectData";
import ProjectCard from "../components/ProjectCard";
import GameWidget from "../components/GameWidget";
import "./HomePage.css";

function HomePage() {
    return (
        <>
            <GameWidget />
            <div id="project-list">
                {allProjects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })
                }
            </div >
        </>
    );
}

export default HomePage;