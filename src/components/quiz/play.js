import React, {Component, Fragment} from "react";
import {Helmet} from "react-helmet";

import {QuizData} from '../quiz/QuizData';


class play extends Component{

    constructor(props) {
        super(props)

        this.state = {
            userAnswer:null,    //current users answer
            currentIndex:0,  //current questions index
            options: [],       //the four options
            quizEnd: false, //True if it's the last question
            score: 0,      //the Score
            disabled: true,
            time: {} , //time
        }
        this.interval = null
    }

    loadQuiz = () => {
        const {currentIndex} = this.state //get the current index
        this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options : QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
                }
            }
        )
    }

    //Handles Click event for the next button
    nextQuestionHander = () => {
        const {userAnswer, answer, score} = this.state
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })

        //Check for correct answer and increment score
        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }
        this.setState({
            currentIndex:this.state.currentIndex+1,
            userAnswer:null
        })
    }



    //Load the quiz once the component mounts
    componentDidMount(){
        this.loadQuiz();
        this.startTimer();
    }

    //Update the component
    componentDidUpdate(prevProps, prevState,snapshot) {
        const{currentIndex} = this.state;
        if(this.state.currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[currentIndex].question,
                    options : QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
                }
            });

        }
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    //Check the answer
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled:false
        })
    }

    //Responds to the click of the finish button
    finishHandler =() => {
        if(this.state.currentIndex === QuizData.length -1){
            this.setState({
                quizEnd:true
            })
        }

    }

    quitHandler =() => {
        window.confirm('Are you sure want to quit? ');
        if(window.confirm('Are you sure want to quit? ')) {
            this.props.history.push('/');
        }
    }

    startTimer = () => {
        const countDownTime= Date.now()+7200000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const hours = Math.floor((distance %(1000*60*60*60))/(1000*60*60));
            const minutes = Math.floor((distance %(1000*60*60))/(1000*60));
            const seconds = Math.floor((distance %(1000*60))/1000);

            if(distance <0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    }
                }, () =>{
                    this.endMcq();
                });
            } else {
                this.setState({
                    time: {
                        hours,
                        minutes,
                        seconds
                    }
                })
            }
        },1000);
    }

    endMcq =() => {
        alert('Quiz has ended!!!');
        const {state} = this;
        const studentStat = {
            score: state.score
        };
        console.log(studentStat);
        setTimeout(() =>{
            this.props.history.push('/play/quizSummery',studentStat);
        },1000)
    }



    render() {
        const {question, options, currentIndex, userAnswer, quizEnd,time} = this.state //get the current state

        if(quizEnd) {
            return (
                <div>
                    <h1>
                        FINISHED !!!
                    </h1>
                    <div className="icon">
                    <span className="mdi mdi-check-circle-outline mdi-48px success-icon">

                    </span>
                    </div>
                    <h2 className="finalHeading">
                        Final score is {this.state.score}/{QuizData.length}
                    </h2>
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
                    <div >
                        <button onClick={this.quitHandler} className="rightButton">
                            Quit
                        </button>
                    </div>
                </div>
            )
        }


        return(
            <Fragment>
                <Helmet>
                    <title>
                        MCQ paper
                    </title>
                </Helmet>
                <div className="questions">
                    <div>
                        <p>
                            <span className="left" style={{float: 'left'}}>{currentIndex+1}/{QuizData.length}</span>
                        </p>
                        <p>
                            <span className="right">{time.hours}:{time.minutes}:{time.seconds}<span className="mdi mdi-clock-outline mdi-24px"></span></span>
                        </p>
                    </div>
                    <br/><br/>

                    <div>
                        <h5>
                            {question}
                        </h5>
                    </div>
                    <br/><br/>
                    <div className="options-container">

                    {
                        options.map(options =>
                            <p key={options.id} className={`options ${userAnswer === options ? "selected" : null}`} onClick={() => this.checkAnswer(options)}>
                                {options}
                            </p>
                        )
                    }
                    </div>
                    <div  className="button-container">

                        <button onClick={this.quitHandler} className="button">
                            Quit
                        </button>

                        {currentIndex < QuizData.length-1 && <button disabled={this.state.disabled} onClick={this.nextQuestionHander} className="button">
                            Next
                        </button>}
                        {currentIndex === QuizData.length-1 && <button onClick={this.finishHandler } disabled={this.state.disabled} className="button">
                            Finish
                        </button>}



                    </div>

                </div>
            </Fragment>
        );
    }
}

export default play;
