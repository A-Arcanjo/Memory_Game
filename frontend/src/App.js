import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useState, useEffect } from "react";
import Cards from "./Components/Cards";
import Navigation from "./Components/Navigation";
import LoginPage from "./views/LoginPage";
import Info from "./views/Info";
import Home from "./views/Home";
import HighScore from "./Components/HighScore";
import RegisterPage from "./views/RegisterPage";
import "./App.css";

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
            {/* <Register setCurrentUserId={setCurrentUserId} setIsLoggedIn={setIsLoggedIn}/> */}
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/login" element={<LoginPage />} />

              <Route path="/register"  element={<RegisterPage/>}/>

              <Route path="/cards" element={<Cards />} />

              <Route path="/score" element={<HighScore />} />

              <Route path="/info" element={<Info />} />

            </Routes>
          </Router>
        </LoginContext.Provider>
      </div>
    </>
  );
};

export default App;
