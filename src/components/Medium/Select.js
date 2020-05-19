import React, { Fragment} from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import "../../styles/components/_firstselection.scss";

const Select = () => (
    <Fragment>
        <Helmet>
            <title>
                Medium|මාධ්‍යය
            </title>
        </Helmet>
        <div>
            <h2 className="display-3">
                Select your medium<br/>
                ඔබේ මාධ්‍යය තෝරන්න
            </h2>
        </div>
        <div>
            <div className="row2">
                <div className="column">
                    <a className="subject lead" href="/play/instructions">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        සිංහල මාධ්‍යය
                    </a>
                </div>
                <br/>
                <div className="column">
                    <a className="subject lead" href="/play/instructions_e">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        English Medium
                    </a>
                </div>
            </div>
        </div>
    </Fragment>
);
export default Select;
