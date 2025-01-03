import React from "react";

import { allProjects } from "../projectData";
import { pagesText } from "../projectData.js";
import { allImages } from "../imagesData";

import "./HomePage.css";

import HeroSection from "../components/HeroSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectSection from "../components/ProjectsSection.jsx";

function HomePage() {
    return (
        <div className="home-page">
            <HeroSection allImages={allImages} />
            <div id="about-me-section" className="homepage-sections" >
                <a href="./about-me" >
                    <h1>{pagesText.title}</h1>
                    <p className="truncate"> {pagesText.body} </p>
                    <p className="small-italics">Read more!</p>
                </a>
            </div>
            <SkillsSection />
            <ProjectSection />
        </div>
    );
}

export default HomePage;