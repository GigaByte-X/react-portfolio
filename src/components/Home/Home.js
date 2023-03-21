import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="container-fluid home" id="home">
            <div className="container home-content">
                <h1>I am <Typewriter options={{ strings: ["a Front-End Web Developer", "a Server Administrator", "an Entrepreneur", "Corbin C."], pauseFor: 2500, autoStart: true, loop: true, }} />
                </h1>
                <p>Welcome to my portfolio!</p>
                <span className="view-details-home-button">
                    I have always wanted to develop websites, and here I am! I started at 8 years old, when I got my first PC. At first, I thought I would NEVER get to this point! Yet, here I am learning JS, and many other languages, and applying for positions at companies I never thought I could work with. This basically proves, dont mind your brain always saying "You cant do it!", and just do it!<br></br>If you are reading this to hire me, here are some reasons why I am a great freelancer!<br></br><br></br>I have great communication skills, I have many great reviews, and I believe that I should stay at lower prices to attract more customers! That does not change the quality though.
                </span>
            </div>
        </div>
    );
}

export default Home;