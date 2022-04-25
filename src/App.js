
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useState } from 'react';
import Cards from './Components/Cards';
import Navigation from './Components/Navigation';
import LoginPage from './views/LoginPage';
import './App.css';

export const ScoreContext = createContext();

const App = () => {
  const [userData, setUserData] = useState({ playerName: null });
  return (


    <div className="">
      {/* <ScoreContext.Provider value={{ userData, setUserData }}>
        <Router>
          <header>
            <Navigation />
          </header>
          <Routes>
            <Route path="/home" element={<LoginPage />} />
            <Route path="/cards" element={<Cards />} />
            {/* <Route path="/score" exact>

            <Score />

          </Route> */}
    {/* </Routes>
        </ Router>
      </ScoreContext.Provider> */} 
            
            <Cards 
            
            />
         

      
    </div>


  );
};

export default App;
