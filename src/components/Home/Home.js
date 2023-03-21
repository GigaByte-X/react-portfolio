import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="container-fluid home" id="home">
            <div className="container home-content">
                <h1>I am a <Typewriter options={{ strings: ["Front-End Web Developer", "Server Administrator", "Entreprenuer"], pauseFor: 2500, autoStart: true, loop: true, }} />
                </h1>
                <p>Welcome to my portfolio!</p>
                <span className="view-details-home-button">
                    View Details
                </span>
            </div>
        </div>
    );
}

export default Home;