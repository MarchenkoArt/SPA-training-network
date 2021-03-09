import React from 'react'
import "./Message-friend.css";


function MessageFriend(props) {
    return (
        <p className="messages-list__message-he">{props.message}</p>
)
};

export default MessageFriend;