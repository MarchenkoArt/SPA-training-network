import React from 'react'
import "./Messages.css";
import Users from "./users/Users";
import Dialog from "./dialog/Dialog";


function Messages(props) {
    return (
        <div className="content-message">
            <div className="content-message__dialogs">
                <div className="messages-list">
                    <Users usersData={props.usersData}/>
                    <Dialog messagesList={props.messagesList}/>
                    <form action="" className="messages-list__form send-form">
                        <textarea name="send-msg" cols="30" rows="1" id="send-msg"
                                  placeholder="Your news..."/>
                        <button>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Messages;