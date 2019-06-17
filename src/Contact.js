import React, { Component } from "react";
import "./Contact.css";

import { messagesRef } from "../config/firebase";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const contactForm = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };

    var newMessagesRef = messagesRef.push();
    newMessagesRef.set(contactForm);

    console.log(contactForm);

    document.querySelector(".alert").style.display = "block";
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form and state
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="contact">
        <div className="container">
          <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>
            Contact me
          </h1>
          <div className="wrapper">
            <div className="company-info">
              <h3>Martin Persson</h3>
              <br />
              <h4>
                <i className="fa fa-phone" /> +46 707517728
              </h4>
              <br />
              <h4>
                <i className="fa fa-envelope" /> moarte6@gmail.com
              </h4>
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
            </div>
            <div className="contact">
              <div class="alert">Your message has been sent</div>
              <form onSubmit={this.onSubmit}>
                <p>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                </p>

                <p>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                </p>
                <p className="full">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={this.state.message}
                    onChange={this.onChange}
                  />
                </p>
                <p className="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
