import React from "react";
import "../Home.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className="logo">Jo<span>bb</span>er</h3>
            <ul className="nav-link">
                <div className="non-but">
                    <li><a href="#home" className="home">Home</a></li>
                    <li><a href="#about" className="aboutus">About Us</a></li>
                    <li><a href="#contact" className="contact">Contact Us</a></li>
                </div>
                <div className="butt">
                    <button className="login">login</button>
                    <button className="signup">sign up</button>
                </div>

            </ul>

        </nav>
    )
}
export default Navbar;