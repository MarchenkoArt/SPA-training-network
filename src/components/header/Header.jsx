import React from 'react'
import settings from "../../settings.svg";
import "./Header.css";

function Header() {
    return (
        <header className="head">
            <div className="container">
                <div className="head__site-title">&#64;CatChat</div>
                <a href="#" className="head__settings"><img src={settings} alt="settings"/></a>
            </div>
        </header>
    )
};

export default Header;