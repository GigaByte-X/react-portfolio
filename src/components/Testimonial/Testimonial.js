import React from "react";
import "./testimonial.css";

const Testimonial = () => {
    const data = [
        {
            "profile": "https://cdn.discordapp.com/avatars/766957620748746772/5b3a62c091c599c520a560c981e13e1e.png?size=4096",
            "content": "",
            "name": "ItsAlex41",
            "rating": "5 Stars"
        }
    ]
    return (
        <div className="container testimonial-section">
            <div className="section_title">
                <h5>Testimonials</h5>
                <span className="line"></span>
            </div>
            <div className="row">
                {data.map((item, index) => {
                    <div className=""></div>
                })}
            </div>
        </div>
    )
}

export default Testimonial;