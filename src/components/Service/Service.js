import React from "react";
import "./service.css";
import { FcApproval } from "react-icons/fc"

const Service = () => {
    const servicedata = [
        {
            id: 1,
            title: "Hosting",

            service1: "Websites",
            price1: "3",
            description1: "Host a website WITHOUT an SSL certificate!",

            service2: "Discord Bots",
            price2: "1+",
            description2: "Host your very own discord bot with a 80%+ uptime!",

            service3: "SCP: SL (Coming Soon)",
            price3: "7.50+",
            description3: "Get your own custom IP with a SCP: Secret Laboratory server!",

            service4: "Minecraft Servers",
            price4: "5+",
            description4: "Get your own Minecraft Server with a custom IP, and a built in Plugin Manager/Version Manager!"
        },
        {
            id: 2,
            title: "Development",

            service1: "Website Design",
            price1: "2.50+",
            description1: "Get a custom Website design!",

            service2: "Website Code",
            price2: "3+",
            description2: "Get a code for an already-made Website!",

            service3: "Discord Bots",
            price3: "1+",
            description3: "Get a Pre-Made or Custom discord bot!",

            service4: "N/A",
            price4: "N/A",
            description4: "No Service for this listing!"
        },
        {
            id: 3,
            title: "Management (Discord Server)",
            service1: "Moderator",
            price1: "2.50",
            description1: "I will moderate your discord server. This includes Activity Checks, Helping Others, Bot Setups, Etc...",

            service2: "Administrator",
            price2: "5",
            description2: "I will Administrate your discord server! This includes all from above, Better Bot Setups, 1 Nitro Classic Giveaway, And More!",

            service3: "Head Of Staff",
            price3: "7",
            description3: "Everything from above, with a Discord Server Setup & Promotions/Demotions.",

            service4: "Owner",
            price4: "7.50",
            description4: "Everything from above, but a better Discord Server Setup, and events!"
        },
        {
            id: 4,
            title: "Management (Minecraft Server)",
            service1: "Moderator",
            price1: "2.50",
            description1: "I will moderate your minecraft server. This includes Activity Checks, Helping Others, Plugin Setups, Etc...",

            service2: "Administrator",
            price2: "5",
            description2: "I will Administrate your discord server! This includes all from above, Better Plugin Setups, And More!",

            service3: "Head Of Server",
            price3: "7",
            description3: "Everything from above, with Staff Moderation & Promotions/Demotions.",

            service4: "Owner",
            price4: "7.50",
            description4: "Everything from above, but better!"
        },
    ]

    const colors = [
        "#1adbf5",
        "#4ad5a6",
        "#4987ee",
        "#0bb998",
        "#4bd00e",
        "#018fd0"
    ]

    return (
        <div className="container service-section" id="services">

            {/* Section Title */}

            <div className="section_title">
                <h5>Services</h5>
                <span className="line"></span>
            </div>
            <div className="row Services">
                {servicedata.map((item, index) => (
                    <>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 testMain" key={index}>
                            <div className="services">
                                <span className="service-number" style={{ backgroundColor: colors[index] }}>
                                    <p>{item.id}</p>
                                </span>

                                <div className="list-of-service">
                                    <h5 className="serviceTitleMain">{item.title}</h5>
                                    <span className="line2"></span>
                                    <p><FcApproval size={20} style={{ margin: "5px" }} /> {item.service1 + " - $" + item.price1}</p>
                                    <p className="serviceDescription">{item.description1}</p>
                                    <span className="serviceitemunderline"></span>
                                    <p><FcApproval size={20} style={{ margin: "5px" }} /> {item.service2 + " - $" + item.price2}</p>
                                    <p className="serviceDescription">{item.description2}</p>
                                    <span className="serviceitemunderline"></span>
                                    <p><FcApproval size={20} style={{ margin: "5px" }} /> {item.service3 + " - $" + item.price3}</p>
                                    <p className="serviceDescription">{item.description3}</p>
                                    <span className="serviceitemunderline"></span>
                                    <p><FcApproval size={20} style={{ margin: "5px" }} /> {item.service4 + " - $" + item.price4}</p>
                                    <p className="serviceDescription">{item.description4}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div >
    );
}

export default Service;