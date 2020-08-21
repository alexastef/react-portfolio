import React from 'react';
// import logo from './logo.svg';
// import NavBar from "./components/NavBar";
import './App.css';
import Main from "./views/Main";
// import waterImage from "./img/water-rotated.jpg";
import Projects from "./views/Projects";



function App() {
  return (
    <div className="App">
        <div className="wrapper">

          <Main />
          <Projects />

        </div>
    </div>
  );
}

export default App;
