import React, {Component, Fragment} from "react";
import {Helmet} from "react-helmet";
import {QuizData} from "./QuizData";
import {Link} from "react-router-dom";


class QuizSummery extends Component{
    constructor(props) {
        super(props);
        this.state = {
            score :0,
        };
    }

    componentDidMount() {
        const {state} = this.props.location;
        this.setState({
            score: state.score
        });
    }


    render() {
        const {state} = this.props.location;
        let stats;

        if(state !== undefined) {
            stats = (
                <Fragment>
                    <div className="icon">
                    <span className="mdi mdi-check-circle-outline mdi-48px success-icon">

                    </span>
                    </div>
                    <h1>MCQ paper has ended!!!</h1>
                    <div className="container">

                        <h2 className="final">Your Marks : {this.state.score}/{QuizData.length}</h2>
                    </div>

                    <section>
                        <p className="finalPara">
                            The answers for the mcq are :

                            <ol>
                                <br/>
                                {QuizData.map((item, index) => (
                                    <li className='options'
                                        key={index}>
                                        {item.id+1}.{item.question} =>  {item.answer} <br/><br/>

                                    </li>
                                ))}
                            </ol>
                        </p>
                    </section>

                    <section>
                        <ul className="center">
                            <li>
                                <Link to="/">Back to Home</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>

            );
        }else {
            stats = (
                <section>
                <h1 className="No stats">No stats available..please take a MCQ paper</h1>
            <ul>
                <li>
                    <Link to="/">Take a MCQ Paper</Link>
                </li>
            </ul>
                </section>
            );
        }
        return(
            <Fragment>
                <Helmet><title>Online MCQ Master-Summery</title></Helmet>
                {stats}
            </Fragment>
        );
    }
}

export default QuizSummery;