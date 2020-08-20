import React from 'react';
// import logo from './logo.svg';
import NavBar from "./components/NavBar";
import './App.css';
import Main from "./views/Main";
import waterImage from "./img/water-rotated.jpg";



function App() {
  return (
    <div className="App">
      <body>
        <div className="wrapper">

          {/* <NavBar /> */}

          <Main />

        </div>
      </body>
    </div>
  );
}

export default App;
