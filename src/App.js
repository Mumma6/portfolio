import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing id="landing" />
        <Projects id="projects" />
        <About id="about" />
        <Contact id="contact" />
      </div>
    );
  }
}

export default App;
