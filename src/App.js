import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from './components/AppBar';
import Home from './pages/Home';
import './App.css';

const useStyles = makeStyles({
    bgcolor: {
        backgroundColor: '#08182D',
        width: '100%',
        // height: '1600px'
    },
  });

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.bgcolor}>
      <Router>
      <AppBar />
      <Route exact path="/" component={Home} />
      </Router> 
      </div>

    </div>
  );
}

export default App;
