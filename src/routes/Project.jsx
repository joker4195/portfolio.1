import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import WorkCard from "../components/WorkCard";
import Work from "../components/Work";
// import Work from "../components/work";
// import PricingCard from "../components/PricingCard";
// import projectCardData from '../components/WorkCardData'
import projectCardData from "../components/workCardData";
const Project = () => {
  
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="some of my most recent works " />
      {/* <Work/> */}
      
     {
       projectCardData.map((item , i ) => <Work item={item} key={i}></Work>)
     }
      {/* <workCardData /> */}
      {/* <WorkCard /> */}
      {/* <PricingCard /> */}
      <Footer />
      {/* <WorkCard /> */}
    </div>
  );
};

export default Project;
