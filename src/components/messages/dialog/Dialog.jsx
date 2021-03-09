import React from 'react'
import "./Dialog.css";
import MessageFriend from "./message/Message-friend";
import MessageMe from "./message/Message-me";

function Dialog(props) {


    let messagesElements = props.messagesList.map( messageElement => {
        if(messageElement.from === "me") return (<MessageMe message={messageElement.message}/>)
        else if(messageElement.from === "friend") return (<MessageFriend message={messageElement.message}/>)
    });

    return (
        <div className="messages-list__dialog">
            {messagesElements}
        </div>
)
};

export default Dialog;