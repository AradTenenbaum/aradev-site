import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {projects} from '../assets/data/projects';
import '../css/ImageSlider.css';

export default function ImageSlider() {

  return (
    <div className="project-container">
        <ArrowBackIcon />
        {projects.map((project) => (
        <div>
            <img className="project-img" src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
        </div>
        ))}
        <ArrowForwardIcon />
    </div>
  );
}
