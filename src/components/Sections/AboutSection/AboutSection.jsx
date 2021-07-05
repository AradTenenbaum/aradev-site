import React from "react";
import MeImg from "../../../assets/images/Me.jpeg";
import "./style.css";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="left-container">
        <div className="about-name">I'm Arad Tenenbaum</div>
        <div className="about-text">
          A freelance web developer. I am programming since I was a kid and
          work with a lot of cool technologies. I can help your business
          to develop by building your own business website! It can be for promoting
          products, saving resevations and so on...
        </div>
      </div>
      <img className="about-img" src={MeImg} />
    </div>
  );
};

export default AboutSection;
