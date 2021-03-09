import React from 'react'
import "./Users.css";
import User from "./user/User";




function Users(props) {
    let usersElements = props.usersData.map( user => <User id={user.id} name={user.name}  img={user.img} /> );
    return (
        <div className="messages-list__users">
            {usersElements}
        </div>
    )
};

export default Users;