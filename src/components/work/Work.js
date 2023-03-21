import React from "react";
import "./work.css";

const Work = () => {
    return (
        <div className="work workContainer">
            <h6 className="centerMain">Previous Work</h6>
            <span className="line"></span>
            <div className="workingContainer">
                <div className="work1">
                    <h6 className="centerMain">My First Website</h6>
                    <p className="centerMain">Image Links:<br></br>https://the-possibility.wants.solutions/msedge_LXde0hHZd2.png<br></br>https://the-possibility.wants.solutions/msedge_ALmwT00rT2.png</p>
                    <h6 className="centerMain">Refer to ItsAlex41 (Review 1) to see review!</h6>
                </div>
                <div className="work1">
                    <h6 className="centerMain">My First Portfolio</h6>
                    <p className="centerMain">Image Links:<br></br>https://the-possibility.wants.solutions/msedge_7LqmyBbCGH.jpg<br></br>https://the-possibility.wants.solutions/msedge_zY3Q9XQnxN.png</p>
                </div>
            </div>
        </div>
    );
}

export default Work;