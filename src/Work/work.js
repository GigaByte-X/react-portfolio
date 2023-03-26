import React, { useState } from "react";
import "./work.css";

const Work = () => {
    const data = [
        {
            "profile": "https://th.bing.com/th/id/OIP.0OUoxz6bqF45R-5CZwqVagHaHZ?w=204&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "name": "Galactic 1.0",
            "position": "Galactic 1.0 is a multipurpose bot that will be sold on BuiltByBit.com (A place where you can sell Discord Bots, Minecraft Builds, etc...) for a cheaper price than any other multipurpose bots!",
            "link": "#"
        },
        {
            "profile": "https://th.bing.com/th/id/OIP.-PmHMX_3UQpef8si1nvAOgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "name": "My Portfolio",
            "position": "At first, it started off as a line at the top of the page with the text \"Portfolio\". Now, it is a beautiful website that previews all my hard work and efforts.",
            "link": "https://itsgalactic.netlify.app/"
        },
        {
            "profile": "https://th.bing.com/th/id/OIP.0OUoxz6bqF45R-5CZwqVagHaHZ?w=204&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "name": "LogicFlame",
            "position": "One of the first public bots that can not only control your discord server with many features, but can also control your hosting servers with the click of a few commands.",
            "link": "https://logicflame.dev/"
        },
        {
            "profile": "https://th.bing.com/th/id/OIP.-PmHMX_3UQpef8si1nvAOgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "name": "Family Site",
            "position": "For family security reasons, I can not show the website as it has our faces, but, this site was made for me and my family to communicate from long distances on a platform. We are working on a DM system, but we got public messages down!",
            "link": "#"
        }
    ]

    const [showMorePost, setShowMorePost] = useState(3);
    const loadMore = () => {
        setShowMorePost((prev) => prev + 3)
    };

    return (
        <div className="container testimonial-section" id="testimonial">
            <div className="section_title">
                <h5>Recent Projects</h5>
                <h5>Click on a card to see the site.</h5>
                <span className="line"></span>
            </div>
            <div className="row">
                {data.slice(0, showMorePost).map((item, index) => (

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" >
                        <a href={item.link}>
                            <div className="content-card">
                                <img src={item.profile} alt="Profile"></img>
                                <br></br>
                                <br></br>
                                <span className="name">{item.name}</span>
                                <br></br>
                                <p>{item.position}</p>

                            </div>
                        </a>
                    </div>

                ))}
                {showMorePost >= data.length ? null : (
                    <span className="load-more-button" onClick={loadMore}>
                        Load More
                    </span>
                )}
            </div>
        </div >
    )
}

export default Work;