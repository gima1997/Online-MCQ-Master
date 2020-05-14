import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import QuizInstructions from "./components/quiz/QuizInstructions";
import play from "./components/quiz/play";
import QuizSummery from "./components/quiz/QuizSummery";
import SignInForm from "./components/LoginForum/SignInForm";
import SignUpForm from "./components/LoginForum/SignUpForm";
import Leaderboard from "./components/quiz/Leaderboard";
import FirstSelection from "./components/Stream/FirstSelection";
import ScienceStream from "./components/Stream/ScienceStream";
import Select from "./components/Medium/Select";
import CommerceStream from "./components/Stream/CommerceStream";
import ArtStream from "./components/Stream/ArtStream";
import QuizInstructions_e from "./components/quiz/QuizInsructions_e";

function App() {
  return (
    <Router>
        <Route path="/" exact component={Login} />
        <Route path="/sign-in" exact component={SignInForm} />
        <Route path="/sign-up" exact component={SignUpForm} />
        <Route path="/play/home" exact component={Home} />
        <Route path="/play/stream" exact component={FirstSelection} />
        <Route path="/play/science" exact component={ScienceStream} />
        <Route path="/play/commerce" exact component={CommerceStream} />
        <Route path="/play/art" exact component={ArtStream} />
        <Route path="/play/medium" exact component={Select} />
        <Route path="/play/instructions" exact component={QuizInstructions} />
        <Route path="/play/instructions_e" exact component={QuizInstructions_e} />
        <Route path="/play/Quiz" exact component={play} />
        <Route path="/play/quizSummery" exact component={QuizSummery} />
        <Route path="/play/quiz/leaderboard" exact component={Leaderboard} />



    </Router>
  );
}

export default App;
