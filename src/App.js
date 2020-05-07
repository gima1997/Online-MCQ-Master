import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/Home";
import QuizInstructions from "./components/quiz/QuizInstructions";
import play from "./components/quiz/play";
import QuizSummery from "./components/quiz/QuizSummery";

function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/play/instructions" exact component={QuizInstructions} />
        <Route path="/play/Quiz" exact component={play} />
        <Route path="/play/quizSummery" exact component={QuizSummery} />

    </Router>
  );
}

export default App;
