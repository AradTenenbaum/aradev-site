import React from "react";
import "../css/Home.css";
import TitleSection from "../components/Sections/TitleSection/TitleSection";
import FeatureSection from "../components/Sections/FeatureSection/FeatureSection";
import AboutSection from "../components/Sections/AboutSection/AboutSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
   

function Home() {

  return (
    <div>
      <section id="title">
        <TitleSection/>
      </section>
      <section id="features">
        <FeatureSection/>
      </section>
      <section id="about">
        <AboutSection/>
      </section>
      <section id="contact">
        <ContactSection/>
      </section>
    </div>
  );
}

export default Home;
