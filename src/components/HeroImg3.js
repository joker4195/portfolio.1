import "./HeroImg3Styles.css";
import React, { Component } from "react";
import About from "../assets/project2.jpg";
class HeroImg3 extends Component {
  render() {
    return (
      <div className="hero2-img">
        <div className="heading2">
          <img
            className="reactimg1"
            src={About}
            alt="About"
            style={{ height: "100vh" }}
          />
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg3;
