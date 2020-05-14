import React, { Fragment} from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import "../../styles/components/_firstselection.scss";

const ScienceStream = () => (
    <Fragment>
        <Helmet>
            <title>
                Science Stream|විද්‍යා ධාරාව
            </title>
        </Helmet>
        <div>
            <h2>
                Science Stream - විද්‍යා ධාරාව
            </h2>
        </div>
        <div>
            <div className="row">
                <div className="column">
                    <a href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        CHEMISTRY/රසායන විද්‍යාව
                    </a>
                </div>
                <div className="column">
                    <a href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        PHYSICS/භෞතික විද්‍යාව
                    </a>
                </div>
                <div className="column">
                    <a href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        BIOLOGY/ජීව විද්‍යාව
                    </a>
                </div>
            </div>
        </div>
    </Fragment>
);
export default ScienceStream;
