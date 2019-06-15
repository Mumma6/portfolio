import React, { Component } from "react";
import "../App.css";

class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
                <br />
                <main id="home">
                <h1 className="lg-heading">
                  Martin <span style={{color: "#00e64d" }}>Persson</span>
                </h1>
                <br/>
                <h3>
                  Frontend Developer specialized in React
                </h3>
                <br/>
                <div className="profile-about">
       
          
          <div className="line"></div>
          <h2 className="text-primarys">Skill Set</h2>
          <div className="skills">
            <div className="p-1"><i className="fa fa-check"></i> HTML</div>
            <div className="p-1"><i className="fa fa-check"></i> CSS</div>
            <div className="p-1"><i className="fa fa-check"></i> JavaScript</div>
            <div className="p-1"><i className="fa fa-check"></i> React.js</div>
            <div className="p-1"><i className="fa fa-check"></i> Node.js</div>
          </div>
        </div>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/martin-persson-b46319170/">
                    <i class="fab fa-linkedin fa-2x" />
                  </a>
                  <a href="https://www.facebook.com/martin.persson.3597">
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                  <a href="https://github.com/Mumma6">
                    <i className="fab fa-github fa-2x" />
                  </a>
                </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
