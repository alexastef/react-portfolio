import React from 'react';
// import NavBar from "./components/NavBar";
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
      <div className="App">
          <div className="wrapper">
            {/* <NavBar /> */}
            <Main />
            <Projects />
            <About />
            <Resume />
            <Contact />
          </div>
      </div>
  );
}

export default App;

            // <Main />
            // <Projects />
            // <About />
            // <Resume />
            // <Contact />