import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer">
          <div>
            <small>All Content Copyright 2019.</small>
            <br />
            <small>
              Site Designed by <a href="./">Martin Persson</a>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
