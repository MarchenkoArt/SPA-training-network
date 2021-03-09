import React from 'react'
import "./Message-me.css";


function MessageMe(props) {
    return (
        <p className="messages-list__message-me">{props.message}</p>
)
};

export default MessageMe;