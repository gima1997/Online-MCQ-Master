import React, {Fragment} from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home =() => (
        <Fragment>
            <Helmet>
                <title>
                    Online_MCQ-Home
                </title>
            </Helmet>
            <div id ="home">
                <section>
                    <div>
                        <h1 className="display-3">Online MCQ Master</h1>

                        <div className="enter-button-container">
                            <ul>
                                <li>
                                    <Link className="enter-button lead" to="/play/stream">
                                        ENTER
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );


export default Home;
