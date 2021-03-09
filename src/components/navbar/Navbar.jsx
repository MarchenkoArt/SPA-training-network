import React from 'react'
import "./Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="container">
                <ul>
                    <li><NavLink  to="/profile" >Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                </ul>

                <div className="nav-bar__ad">
                    <NavLink to="#"><img
                        src="https://i.pinimg.com/originals/42/4e/c9/424ec9199002283a8559dd58930f576d.jpg" alt=""
                        className="nav-bar__ad_img"/>
                        <br/>Cat food 1.2$ NOW</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Navbar;