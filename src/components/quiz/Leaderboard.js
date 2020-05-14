import React, {Fragment} from "react";
import {Helmet} from "react-helmet";
import {Link,Route,Switch,useRouteMatch, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Scorecard from "./Leaderboard.scorcard";
import {scores} from "./QuizScoreData";

const Score =({name,index,score,rank})=>{
    return( 
    <tr>
      <td>{rank}</td>
      <td>{index}</td>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
}

const Leaderboard =() => {
        let { path, url } = useRouteMatch();

       return(
        <div>
        <h2 id="lead" className="text-center">Score Leaderboard</h2>
            <div>
            <Link  className="btn btn-primary" to={`${url}/physics`}>Physics</Link>
            <Link  className="btn btn-primary" to={`${url}/maths`}>Maths</Link>
            <Link className="btn btn-primary" to={`${url}/chemistry`}>chemistry</Link>
  
            <Switch>
            <Route exact path={path}>
            <h3>Please select a subject</h3>
            </Route>
            <Route path={`${path}/:subjectId`}>
            <Scorecard useParams={useParams} />
            </Route>
            </Switch>
            </div>
      </div>
       );
}

export default Leaderboard;
