
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useState, useEffect } from 'react';
import Cards from './Components/Cards';
import Navigation from './Components/Navigation';
import LoginPage from './views/LoginPage';
import StartGame from "./views/StartGame";
import Info from "./views/Info";
import HighScore from "./Components/HighScore";
import './App.css';

export const LoginContext = createContext();

const App = () => {
  const [userData, setUserData] = useState({ playerName: null });

  return (
    <>

      <div className="">
        <LoginContext.Provider value={{ userData, setUserData }}>
          <Router>
            <header>
              <Navigation />
            </header>

            <Routes>
              <Route path="/" element={<StartGame />} />

              <Route path="/home" element={<LoginPage />} />

              <Route path="/cards" element={<Cards />} />


              <Route path="/score" element={<HighScore />} />



              <Route path="/info" element={<Info />} />

              {/* <Route path="/score" exact>

            <Score />


          </Route> */}
            </Routes>
          </ Router>
        </LoginContext.Provider>


      </div>

    </>
  );

};

export default App;
