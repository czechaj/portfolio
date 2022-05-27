import React from "react";
import Card from "../Card";
import Header from "../Header";
import Hi from "../Hi";
import SkillCard from "../SkillCard";

import projects from "../../utils/projects";
import backendProjects from "../../utils/backendProjects";

function Container() {
  return (
    <main>
      <div className="container">
        <div className="background"></div>
        <div id="front" className="front">
          <Header />
          <div className="hi-container">
            <Hi />
          </div>
        </div>
      </div>
      <div id="frontendProjects" className="container frontend-projects">
        <Card projects={projects} />
      </div>
      <div id="backendProjects" className="container backend-projects">
        <Card projects={backendProjects} />
      </div>
      <div id="skills" className="container skills">
        <SkillCard />
      </div>
    </main>
  );
}

export default Container;
