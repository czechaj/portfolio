import React from "react";
import Card from "../Card";
import Header from "../Header";
import Hi from "../Hi";

function Container() {
  return (
    <main>
      <div className="container">
        <div className="background"></div>
        <div className="front">
          <Header />
          <div className="hi-container">
            <Hi />
          </div>
        </div>
      </div>
      <div id="projects" className="container projects">
        <Card />
      </div>
    </main>
  );
}

export default Container;
