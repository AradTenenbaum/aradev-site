import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import StorageIcon from '@material-ui/icons/Storage';
import DvrIcon from '@material-ui/icons/Dvr';
import { Container } from "@material-ui/core";
import React from "react";
import "./style.css";

const FeatureSection = () => {
  const features = [
    { name: "Mobile Friendly", icon: <MobileFriendlyIcon className="feature-icon" />, description: "Fully responsive applications, Can be opened on mobile phone, tablet and private computer" },
    { name: "Complex Data Capabilities", icon: <StorageIcon className="feature-icon" />, description: "Capable of handling data, complex logic and databases" },
    { name: "Strong UI/UX", icon: <DvrIcon className="feature-icon" />, description: "User frienly, Easy to use and special designs" },
  ];

  return (
    <div className="feature-container">
      <Container>
        <h1 className="second-title">Features</h1>
        <div className="features">
            {features.map((feature) => <div className="feature">
                {feature.icon}
                <div className="feature-name">{feature.name}</div>
                <div className="feature-des">{feature.description}</div>
            </div>)}
        </div>
      </Container>
    </div>
  );
};

export default FeatureSection;
