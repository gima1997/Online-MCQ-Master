import React, { Fragment} from "react";
import {Helmet} from "react-helmet";
import "../../styles/components/_firstselection.scss";

const ArtStream = () => (
    <Fragment>
        <Helmet>
            <title>
                Art Stream|කලා ධාරාව
            </title>
        </Helmet>
        <div>
            <h2>
                Art Stream - කලා ධාරාව
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
                        Economic science/ආර්ථික විද්‍යාව
                    </a>
                </div>
                <div className="column">
                    <a href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        History/ඉතිහාසය
                    </a>
                </div>
                <div className="column">
                    <a href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Political Science/දේශපාලන විද්යාව
                    </a>
                </div>
                <div className="column">
                    <a href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        History/ඉතිහාසය
                    </a>
                </div>
                <div className="column">
                    <a href="/play/instruction">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sinhala/සිංහල
                    </a>
                </div>
                <div className="column">
                    <a href="/play/instructions">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        English
                    </a>
                </div>
            </div>
        </div>
    </Fragment>
);
export default ArtStream;
