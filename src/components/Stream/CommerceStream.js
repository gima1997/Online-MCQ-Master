import React, { Fragment} from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import "../../styles/components/_firstselection.scss";

const CommerceStream = () => (
    <Fragment>
        <Helmet>
            <title>
                Commerce stream|වාණිජ ධාරාව
            </title>
        </Helmet>
        <div>
            <h2 className="display-3">
                Commerce stream - වාණිජ ධාරාව
            </h2>
        </div>
        <div>
            <div className="row">
                <div className="column">
                    <a className="subject lead" href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Accountancy/ගණකාධිකරණය
                    </a>
                </div>
                <div className="column">
                    <a className="subject lead" href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Business Studies/ව්යාපාර අධ්යයනය
                    </a>
                </div>
                <div className="column">
                    <a className="subject lead" href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Business Statistics/ව්යාපාර සංඛ්‍යාලේඛන
                    </a>
                </div>
                <div className="column">
                    <a className="subject lead" href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        History/ඉතිහාසය
                    </a>
                </div>
                <div className="column">
                    <a className="subject lead" href="/play/medium">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Political Science/දේශපාලන විද්යාව
                    </a>
                </div>
                <div className="column">
                    <a className="subject lead" href="/play/medium">
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
export default CommerceStream;
