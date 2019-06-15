import React, { Component } from "react";
import project1 from "../img/projects/project1.jpg";
import project2 from "../img/projects/project2.jpg";
import project3 from "../img/projects/project3.jpg";
import project4 from "../img/projects/project4.jpg";
import project5 from "../img/projects/project5.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
      <div className="projectsWork container-fluid">
        <div className="item col-sm-6">
          <a href="http://pong.jpersson.eu">
            <img src={project1} alt="Ping pong" />
          </a>
          <a href="http://pong.jpersson.eu" className="btn-light">
            <i className="fas fa-eye" /> Ping Pong Game >
          </a>

          <a
            href="https://github.com/Mumma6/Ping-Pong-Game"
            className="btn-dark"
          >
            <i className="fab fa-github" /> Github
          </a>
        </div>

        <div className="item col-sm-6">
          <a href="http://dice.jpersson.eu">
            <img src={project2} alt="Dice" />
          </a>
          <a href="http://dice.jpersson.eu" className="btn-light">
            <i className="fas fa-eye" /> Dice Game
          </a>

          <a
            href="https://github.com/Mumma6/what-the-DICE"
            className="btn-dark"
          >
            <i className="fab fa-github" /> Github
          </a>
        </div>

        <div className="item">
          <a href="https://livsstilonline.se/">
            <img src={project3} alt="Livsstilonline" />
          </a>
          <a href="https://livsstilonline.se/" className="btn-light">
            <i className="fas fa-eye" /> Website
          </a>
        </div>

        <div className="item">
          <a href="http://mpdev.jpersson.eu/WorkOutPlanner/#">
            <img src={project5} alt="Workout Planner" />
          </a>
          <a
            href="http://mpdev.jpersson.eu/WorkOutPlanner/#"
            className="btn-light"
          >
            <i className="fas fa-eye" /> Workout Planner App
          </a>

          <a
            href="https://github.com/Mumma6/WorkoutPlanner"
            className="btn-dark"
          >
            <i className="fab fa-github" /> Github
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
