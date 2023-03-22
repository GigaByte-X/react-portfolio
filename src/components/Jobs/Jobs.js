import React, { useState } from "react";
import "./jobs.css";

const Jobs = () => {
    const data = [
        {
            "profile": "https://cdn.discordapp.com/icons/816281968575512607/a07995d503830dd0304cd9b153664714.png?size=4096",
            "name": "Galactic Development",
            "position": "Founder/Lead Freelancer"
        },
        {
            "profile": "https://cdn.discordapp.com/icons/891282611480186920/4fa3739b7661b348f52a4277cdbafcf8.png?size=4096",
            "name": "Light Services",
            "position": "Front-End Web Developer"
        },
        {
            "profile": "https://cdn.discordapp.com/icons/1041042634837331988/21b2571f4739bd8da91fe0ae045909a1.png?size=4096",
            "name": "Sunshine SMP",
            "position": "Web Developer/Hosting Provider/Manager"
        },
        {
            "profile": "https://cdn.discordapp.com/icons/1077357261036462150/5e773f1e4ccd0908b1246fb5406da5d5.png?size=4096",
            "name": "CPF Development",
            "position": "Web Developer/Hosting Provider/Co-Owner"
        },
        {
            "profile": "https://cdn.discordapp.com/icons/1069646270555246662/fb9c109c2db8acf4ef702eea90f51536.png?size=4096",
            "name": "Sylanio",
            "position": "Web Developer/Co-Owner"
        },
        {
            "profile": "https://cdn.discordapp.com/icons/886908662935875584/989ddcb6da39247e1c55931c90f8c225.png?size=4096",
            "name": "Musically Development",
            "position": "Web Developer/Co-Owner"
        }
    ]

    const [showMorePost, setShowMorePost] = useState(3);
    const loadMore = () => {
        setShowMorePost((prev) => prev + 3)
    };

    return (
        <div className="container testimonial-section" id="testimonial">
            <div className="section_title">
                <h5>My Jobs</h5>
                <span className="line"></span>
            </div>
            <div className="row">
                {data.slice(0, showMorePost).map((item, index) => (
                    < div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" >
                        <div className="content-card">
                            <img src={item.profile} alt="Profile"></img>
                            <br></br>
                            <br></br>
                            <span className="name">{item.name}</span>
                            <p>{item.position}</p>
                        </div>
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

export default Jobs;