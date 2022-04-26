
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useState, useEffect } from 'react';
import Cards from './Components/Cards';
import Navigation from './Components/Navigation';
import LoginPage from './views/LoginPage';
import StartGame from "./views/StartGame";
import Info from "./views/Info";
import './App.css';

export const LoginContext = createContext();

const App = () => {
  const [userData, setUserData] = useState({ playerName: null });

  const [highScore, setHighScore] = useState(0);


  const [game, setGame] = useState([]);
  const [options, setOptions] = useState([]);
  const [flippedCount, setFlippedCount] = useState([]);

  useEffect(() => {
    const finished = !game.some((card) => !card.flipped);
    if (finished && game.length > 0) {
      setTimeout(() => {
        const bestPossible = game.length;
        let multiplier;

        if (options === 12) {
          multiplier = 5;
        } else if (options === 18) {
          multiplier = 2.5;
        } else if (options === 24) {
          multiplier = 1;
        }

        const pointsLost = multiplier * (0.66 * flippedCount - bestPossible);

        let score;
        if (pointsLost < 100) {
          score = 100 - pointsLost;
        } else {
          score = 0;
        }

        if (score > highScore) {
          setHighScore(score);
          const json = JSON.stringify(score);
          localStorage.setItem("memorygamehighscore", json);
        }

        const newGame = alert("You Win!, SCORE: " + score + " New Game?"); //confirm
        if (newGame) {
          const gameLength = game.length;
          setOptions(null);
          setTimeout(() => {
            setOptions(gameLength);
          }, 5);
        } else {
          setOptions(null);
        }
      }, 500);
    }
  }, [game]);



  useEffect(() => {
    const json = localStorage.getItem('memorygamehighscore');
    const savedScore = JSON.parse(json);
    if (savedScore) {
      setHighScore(savedScore);
    }
  }, []);

  return (
    <>

      <div className="">
        <LoginContext.Provider value={{ userData, setUserData }}>
          <Router>
            <header>
              <Navigation />
            </header>
            <>
              <div className="container">
                <h1>Memory Game</h1>
                <div>High Score: {highScore}</div>
                <div>
                  {options === null ? (
                    <>
                      <button onClick={() => setOptions(12)}>Easy</button>
                      <button onClick={() => setOptions(18)}>Medium</button>
                      <button onClick={() => setOptions(24)}>Hard</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          const prevOptions = options;
                          setOptions(null);
                          setTimeout(() => {
                            setOptions(prevOptions);
                          }, 5);
                        }}
                      >
                        Start Over
                      </button>
                      <button onClick={() => setOptions(null)}>Main Menu</button>
                    </>
                  )}
                </div>
              </div>

              {options ? (
                <Cards
                  options={options}
                  setOptions={setOptions}
                  highScore={highScore}
                  setHighScore={setHighScore}
                />
              ) : (
                <h2>Choose a difficulty to begin!</h2>
              )}
            </>
            <Routes>
              <Route path="/" element={<StartGame />} />

              <Route path="/home" element={<LoginPage />} />
              <Route path="/cards" element={<Cards />} />


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
