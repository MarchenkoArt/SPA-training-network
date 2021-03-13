import React from 'react'
import "./Messages.css";
import Users from "./users/Users";
import Dialog from "./dialog/Dialog";

let addMessageActionCreator = () => {
    return {type: "ADD-MESSAGE"}
}

let UpdateNewMessageTextActionCreator = (text) => {
   return  {type: "UPDATE-MESSAGE", newText: text}
}

function Messages(props) {

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
        props.dispatch(UpdateNewMessageTextActionCreator(""))
    };

    let changeMessageArea = () => {
        let text = newMessageElement.current.value;
        props.dispatch(UpdateNewMessageTextActionCreator(text))
    };

    return (
        <div className="content-message">
            <div className="content-message__dialogs">
                <div className="messages-list">
                    <Users usersData={props.messagePage.usersData}/>
                    <Dialog messagesList={props.messagePage.messagesList}/>
                    <form action="" className="messages-list__form send-form">
                        <textarea onChange={changeMessageArea} ref={newMessageElement} name="send-msg" cols="30"
                                  rows="1" id="send-msg"
                                  placeholder="Your news..." value={props.messagePage.messagePage}/>
                        <button type="reset" onClick={addNewMessage}>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Messages;