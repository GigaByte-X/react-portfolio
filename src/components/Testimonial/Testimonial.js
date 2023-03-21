import React, { useState } from "react";
import "./testimonial.css";

const Testimonial = () => {
    const data = [
        {
            "profile": "https://cdn.discordapp.com/avatars/766957620748746772/5b3a62c091c599c520a560c981e13e1e.png?size=4096",
            "content": "Words can't explain how amazing the customer support is! I wanted to add something to my website, they would add it in less than a minute! the person that made my website (ItsGalactic#1122) did a spectacular job on it and I'm very greatful for it!",
            "name": "ItsAlex41",
            "rating": "5 Stars"
        },
        {
            "profile": "https://cdn.discordapp.com/avatars/1058927354791075942/a_1356ee85a492a5d7d104a81068ac89af.png?size=4096",
            "content": "Spectacular customer service. Quick at any support for my bot thats needed. Errors fixed in minutes and great communication. Would definitely recommend ItsGalactic to anyone else",
            "name": "PlantedPurpose",
            "rating": "5 Stars"
        },
        {
            "profile": "https://cdn.discordapp.com/avatars/590057334668132352/a_3409ad0cf6d1a060d23ca8e969f9cb80.png?size=4096",
            "content": "I love the Color Combinations, Fast Support, & The fact that the websites are so simple yet so high quality!",
            "name": "AudiRo",
            "rating": "5 Stars"
        },
    ]

    const [showMorePost, setShowMorePost] = useState(3);
    const loadMore = () => {
        setShowMorePost((prev) => prev + 3)
    };

    return (
        <div className="container testimonial-section">
            <div className="section_title">
                <h5>Testimonials</h5>
                <span className="line"></span>
            </div>
            <div className="row">
                {data.slice(0, showMorePost).map((item, index) => (
                    < div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" >
                        <div className="content-card">
                            <img src={item.profile} alt="Profile"></img>
                            <p>{item.content}</p>
                            <span className="name">{item.name}</span>
                            <p>{item.rating}</p>
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

export default Testimonial;