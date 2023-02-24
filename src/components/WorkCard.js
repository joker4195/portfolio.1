import "./workCardStyles.css";
import React from "react";
import pro1 from "../assets/project2.jpg";
import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"></img>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
      <p>{props.text}</p>
    <div className="pro-btns">
      <NavLink to={props.view} className="btn">view</NavLink>
      <NavLink to={props.source} className="btn">source</NavLink>
    </div>
    </div>
  </div>
  );
};

export default WorkCard;
