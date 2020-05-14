import React, {Fragment} from "react";
import {scores} from "./QuizScoreData";

const  Scorecard = ({useParams})=> {
    let {subjectId} = useParams();
    let subject = scores[0];
    let s = "" + subjectId;
    const scoreSet = subject[s];  //array
    scoreSet.sort(function(a, b){return b.score - a.score});
    console.log(scoreSet);
    let r = 1;
    let prev = scoreSet[0].score;
    let now = scoreSet[0].score;
    console.log("NP ",prev,now);
    const rows = scoreSet.map((s,i)=>{
        console.log("ROW",s,i);
        prev = now;
        now = s.score;
        if(now < prev){
            r++;
        }

        return( 
            <tr>
              <td>{r}</td>
              <td>{s.indexNo}</td>
              <td>{s.studentName}</td>
              <td>{s.score}</td>
            </tr>
          );
        //     let name= s.studentName;
        //     let index= s.indexNo;
        //     let score= s.score ;
        //     let rank =i+1;
        // Score(name,index,score,rank);
    });
    console.log(rows);
    return (
      <div>
        <div className="container">
        <h3 id="subheader">{subjectId.toUpperCase()} Rankings by THE Score</h3>         
        <table className="table table-dark table-striped table-hover">
            <thead>
            <tr>
                <th>Rank</th>
                <th>Index</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
        </div>
      </div>
    );


  }

  export default Scorecard;

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
  