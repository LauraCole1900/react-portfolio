import React, { Component } from "react";
import ProjectCard from "../project";
import projects from "../../projects.json";
import "./style.css"

class Portfolio extends Component {
  state = { projects };

  render() {
    return (
      <>
        <h1>Portfolio</h1>
        {this.state.projects.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            repo={project.repo}
            deployed={project.deployed}
          />
        ))}
      </>
    );
  }
}

export default Portfolio;