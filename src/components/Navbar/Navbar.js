import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar-main">
            <ul>
                <Link to="home" spy={true} smooth={true} offset={100} duration={100}>
                    <li className="nav-item">Home</li>
                </Link>
                <Link to="about" spy={true} smooth={true} offset={100}>
                    <li className="nav-item">About</li>
                </Link>
                <Link to="services" spy={true} smooth={true} offset={100}>
                    <li className="nav-item">Services</li>
                </Link>
                <Link to="testimonial" spy={true} smooth={true} offset={100}>
                    <li className="nav-item">Testimonial</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;