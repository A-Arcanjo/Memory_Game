import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './Components/Navigation';
import Score from './views/Score';


export const ScoreContext = createContext();

const App = () => {
  return (
    <div className="">

      <Router>
        <header>
          <Navigation />
        </header>
        <Route path="/score" exact>
          <ScoreContext.Provider value={{
            // allScores: scores,
            // newCommentTitle: newCommentTitle,
            // newCommentBody: newCommentBody,
            // updateNewCommentTitle: updateNewCommentTitle,
            // updateNewCommentBody: updateNewCommentBody,
            // updateComments: updateComments
          }}>
            <Score />
          </ScoreContext.Provider>
        </Route>
      </Router>
    </div>
  );
};

export default App;
