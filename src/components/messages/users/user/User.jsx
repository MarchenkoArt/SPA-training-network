import React from 'react'
import "./User.css";
import {NavLink} from "react-router-dom";


function User(props) {
    return (
        <NavLink to={"/messages/id" + props.id} className="messages-list__user">
            <img src={props.img} alt=""/>
            <p>@{props.name}</p>
        </NavLink>
    )
};

export default User;