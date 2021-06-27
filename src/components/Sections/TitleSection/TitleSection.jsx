import SendIcon from '@material-ui/icons/Send';
import { Button } from "@material-ui/core";
import React from "react";
import './style.css';

const TitleSection = () => {
  return (
    <div>
      <div className="title">
        <h1 className="main-t">Create you'r own business website</h1>
        <a className="btn-container" href="#contact">
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<SendIcon />}
          className="contact-btn"
        >
          Get Started
        </Button>
        </a>
      </div>
    </div>
  );
};

export default TitleSection;
