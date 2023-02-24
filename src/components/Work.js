import "./workCardStyles.css";
import React from "react";
import pro1 from "../assets/project6.jpeg"
import { NavLink } from "react-router-dom";
const Work = ({item}) => {
  return (
    <div className="work-container">
      <h1 className="project-heading"></h1>
      <div className="project-container">
      <div className="project-card">
    <img src={item.imgsrc} alt="image"></img>
    <h2 className="project-title">{item.title}</h2>
    <div className="pro-details">
      <p>{item.text}</p>
    <div className="pro-btns">
      <NavLink to={item.view} className="btn">view</NavLink>
      <NavLink to={item.source}className="btn">source</NavLink>
    </div>
    </div>
  </div>
      </div>
    </div>
  );
};

export default Work;
