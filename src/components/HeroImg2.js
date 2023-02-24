import "./HeroImg2Styles.css";
import React, { Component } from "react";
import codingIMG from "../assets/project1.jpg";
class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <img
            className="Projectimg1"
            src={codingIMG}
            alt="codingIMG"
            style={{ height: "100vh" }}
          />
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
