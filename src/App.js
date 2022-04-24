import React, { createContext } from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "./Components/Cards";
// import Navigation from "./Components/Navigation";
// import Score from "./views/Score";
import "./App.css";

//export const ScoreContext = createContext();

const App = () => {
  return (
    <div>
      {/* <Router> */}
        {/* <header>
          <Navigation />
        </header> */}
        
        <main >
          <Cards 
          />
          {/* <Switch>
            <Route path="/score" exact>
              <ScoreContext.Provider
                value={
                  {
                    // allScores: scores,
                    // newCommentTitle: newCommentTitle,
                    // newCommentBody: newCommentBody,
                    // updateNewCommentTitle: updateNewCommentTitle,
                    // updateNewCommentBody: updateNewCommentBody,
                    // updateComments: updateComments
                  }
                }
              >
                <Score />
              </ScoreContext.Provider>
            </Route>
          </Switch> */}
        </main>
      {/* </Router> */}
    </div>
  );
};

export default App;
