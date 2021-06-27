import React, { useLayoutEffect, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

import MyDrawer from "./MyDrawer";
import logo from '../assets/images/WebLogo.png';

const useStyles = makeStyles({
  appBar: {
    background: "#08182D",
    color: "#FBF5F3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"

  },
  appBarSmall: {
    background: "#08182D",
    color: "#FBF5F3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"

  },
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    background: "#08182D",
    color: "#FBF5F3",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"

  },
  logo: {
    width: '50px',
    paddingRight: '10px'
  },
  appText: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: "lighter",
    margin: "auto"
  },
  aNone: {
    textDecoration: "none",
    color: "white",
    textAlign: "center"
  }
});

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function HideAppBar(props) {
  const classes = useStyles();
  const [isSmall, setIsSmall] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [width, height] = useWindowSize();
  const history = useHistory();

  useEffect(() => {
    if (width < 420) setIsSmall(true);
    else if (isSmall) setIsSmall(false);
  }, [width]);

  const handleClick = () => {
    setIsOpenDrawer(false);
  };

  const buttons = (
    <div className={isSmall || isOpenDrawer ? classes.drawer : ''}>
      <a onClick={handleClick} href="#features" className={classes.aNone}><Button className={classes.appText} color="inherit">FEATURES</Button></a>
      <a onClick={handleClick} href="#about" className={classes.aNone}><Button className={classes.appText} color="inherit">ABOUT</Button></a>
      <a onClick={handleClick} href="#contact" className={classes.aNone}><Button className={classes.appText} color="inherit">CONTACT</Button></a>
    </div>
  );

  const Options = !isSmall ? (
    buttons
  ) : (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={() => setIsOpenDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={isSmall ? classes.appBarSmall : classes.appBar}>
          <Toolbar>
            <img className={classes.logo} src={logo} alt='logo'/>
            <Typography className={classes.appText} variant="h6">AraDev</Typography>
          </Toolbar>
          {Options}
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <MyDrawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} buttons={buttons} />
    </React.Fragment>
  );
}
