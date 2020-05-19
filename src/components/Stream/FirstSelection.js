import React, { Fragment} from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import "../../styles/components/_firstselection.scss";

const FirstSelection = () => (
    <Fragment>
        <Helmet>
            <title>
                Stream-Selection
            </title>
        </Helmet>
        <div>
            <h2 className="display-3">
                Select your stream<br/>
                ඔබේ ධාරාව තෝරන්න
            </h2>
        </div>
        <div>
            <div className="rowa">
                <div className="column">
                    <a className="subject lead" href="/play/science">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        SCIENCE/විද්‍යා
                    </a>
                </div>
                <br/>
                <div className="column">
                    <a className="subject lead" href="/play/commerce">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        COMMERCE/වාණිජ
                    </a>
                </div>
                <br/>
                <div className="column">
                    <a className="subject lead" href="/play/art">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        ART/කලා
                    </a>
                </div>
            </div>
        </div>
    </Fragment>
);
export default FirstSelection;
