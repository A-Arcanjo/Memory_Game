
import React from 'react';
import Cards from './components/Cards';
import Navigation from './Components/Navigation';
import Score from './views/Score';
import './App.css';

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
<div className="cards-container">
      
      <Cards />
    </div>
      </Router>
   </div>
  );
};

export default App;
