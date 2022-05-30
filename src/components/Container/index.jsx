import React from "react";
import ProjectCard from "../ProjectCard";
import Header from "../Header";
import Hi from "../Hi";
import SkillCard from "../SkillCard";
import Certificates from "../Certificates";
import Footer from "../Footer";

import projects from "../../utils/projects";
import backendProjects from "../../utils/backendProjects";

function Container() {
  return (
    <main>
      <div className="container hi">
        <div className="background"></div>
        <div id="front" className="front">
          <Header />
          <div className="hi-container">
            <Hi />
          </div>
          <Footer />
        </div>
      </div>
      <div id="frontendProjects" className="container frontend-projects">
        <ProjectCard projects={projects} />
      </div>
      <div id="backendProjects" className="container backend-projects">
        <ProjectCard projects={backendProjects} />
      </div>
      <div id="skills" className="container skills">
        <SkillCard />
      </div>
      <div id="certificates" className="container certificates">
        <Certificates />
      </div>
    </main>
  );
}

export default Container;
