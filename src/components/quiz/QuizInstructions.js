import React, { Fragment} from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const QuizInstructions = () => (
    <Fragment>
        <Helmet>
            <title>
                MCQ Instructions-Online MCQ Master
            </title>
        </Helmet>
        <div className="instruction container">
            <h1>
                Instructions- උපදෙස්
            </h1>
            <p>
                Are you in english medium?
            </p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p>
                ඔබ සිංහල මාධ්‍යයෙන්ද?
            </p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div>
                <span className="left"><Link to="/">No take me back</Link></span>
                <span className="right"><Link to="/play/quiz">Ok,Let`s do this</Link></span>
            </div>
        </div>
    </Fragment>
);
export default QuizInstructions;