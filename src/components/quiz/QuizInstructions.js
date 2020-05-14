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
        <div className="instruction container" id ="instructions">
            <h1 className="display-3">
                Instructions - උපදෙස්
            </h1>
            <p className="lead" id="p1">
                Are you in english medium?
            </p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p className="lead" id="p2">
                ඔබ සිංහල මාධ්‍යයෙන්ද?
            </p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div>
                <span><Link className="left btn btn-primary" to="/">No take me back</Link></span>
                <span><Link className="right btn btn-primary" to="/play/quiz">Ok,Let`s do this</Link></span>
            </div>
        </div>
    </Fragment>
); 
export default QuizInstructions;
