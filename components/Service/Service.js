import React from "react";
import "./service.css";

const Service = () => {
    const servicedata = [
        {
            id: 1,
            title: "Hosting",
            service1: "Websites",
            service2: "Discord Bots",
            service3: "SCP: SL",
            service4: "Minecraft Servers"
        },
        {
            id: 1,
            title: "Hosting",
            service1: "Websites",
            service2: "Discord Bots",
            service3: "SCP: SL",
            service4: "Minecraft Servers"
        },
        {
            id: 1,
            title: "Hosting",
            service1: "Websites",
            service2: "Discord Bots",
            service3: "SCP: SL",
            service4: "Minecraft Servers"
        },
        {
            id: 1,
            title: "Hosting",
            service1: "Websites",
            service2: "Discord Bots",
            service3: "SCP: SL",
            service4: "Minecraft Servers"
        }
    ]
    return (
        <div className="container service-section">

            {/* Section Title */}

            <div className="section_title">
                <h5>Services</h5>
                <span className="line"></span>
            </div>
            <div className="row">
                {servicedata.map((item, index) => (
                    <>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="services">
                                
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Service;