import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>
          Hello! Im a self taught Web Developer. I have a bachelor in Sport
          Science and run my own company as a Health coach.{" "}
        </h2>
        <br />

        <h1>Education</h1>
        <br/>
        <h3>Univeristy</h3>
        <ul>
          <li>Sport science at linneuniversitet</li>
          <li>Starting out with Java at linneuniversitet</li>
          
        </ul>
        <h3></h3>
        <h3></h3>

        
        <br />
        <h3>Udemy courses</h3>
        <ul>
          <li>React bootcamp</li>
          <li>Complete JavaScript..</li>
          <li>Foundations of Frontend development</li>
        </ul>
      </div>
    );
  }
}
export default About;
