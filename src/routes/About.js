import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg3 from "../components/HeroImg3";
import AboutContent from "../components/AboutContent";

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg3 heading="ABOUT." text="Im a friendly Front-End Developer." />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
