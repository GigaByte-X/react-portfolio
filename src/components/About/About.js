import React from "react";
import "./about.css";
import about from "../logo512.png";
import { DiHtml5, DiCss3, DiJsBadge } from "react-icons/di";
const About = () => {
    return (
        <div className="container about-section" id="about">
            <div className="row">
                <div className="col-xs-6 col-lg-6 col-md-12">

                    <div className="about-image">
                        <img src={about} height="300px" width="300px" alt="react-logo" />
                    </div>

                </div>
                <div className="col-xs-6 col-lg-6 col-md-12">

                    <div className="about-details">

                        <div className="about-title">
                            <h5>About</h5>
                            <span className="line"></span>
                        </div>

                        <p>I currently know many languages! Below, you will see some of the languages I mainly specialize in.</p>

                        <div className="card-design">
                            <div className="about-list-item">
                                <div className="about-details-icon">
                                    <p><DiHtml5 size={50} /></p>
                                </div>
                                <div>
                                    <h6>HTML</h6>
                                    <p>HTML (HyperText Markup Language) is one of the languages I code!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-design">
                            <div className="about-list-item">
                                <div className="about-details-icon">
                                    <p><DiCss3 size={50} /></p>
                                </div>
                                <div>
                                    <h6>CSS</h6>
                                    <p>CSS is one of languages I am still learning but for the most part, I know!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-design">
                            <div className="about-list-item">
                                <div className="about-details-icon">
                                    <p><DiJsBadge size={50} /></p>
                                </div>
                                <div>
                                    <h6>JS</h6>
                                    <p>I still have tons to learn, but I am pretty much good at it!</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default About;