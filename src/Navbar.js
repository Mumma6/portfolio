import React, { Component } from "react";
import "./Navbar.css";

import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse ml-auto"
      : "collapse navbar-collapse show ml-auto";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed ml-auto"
      : "navbar-toggler navbar-toggler-right ml-auto";
    return (
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" onClick={this.scrollToTop}>
            Martin Persson
          </a>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler-icon">
              <div className="navbar-toggler-icon-line" />
              <div className="navbar-toggler-icon-line" />
              <div className="navbar-toggler-icon-line" />
            </div>
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  My projects
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>

              <li className="nav-item active">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
