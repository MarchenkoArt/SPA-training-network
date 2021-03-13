import React from 'react'
import "./SendPosts.css";

function SendPosts(props) {

    let addPostActionCreator = () => {
        return {
            type: "ADD-POST"
        }
    };

    let UpdateNewPostTextActionCreator = (text) => {
        return {
            type:"UPDATE-POST",
            newText:text
        }
    };

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
        props.dispatch(UpdateNewPostTextActionCreator(""))
    };

    let changeTextArea = () => {
        let text = newPostElement.current.value;
        props.dispatch(UpdateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <h2 className="content-profile__title">My Posts</h2>
            <form className="send-form">
                <textarea onChange={changeTextArea} ref={newPostElement} cols="30" rows="2" id="posts-content"
                                              placeholder="Your news..." value={props.textPost}/>
                <button type="reset" onClick={addNewPost}>Send</button>
            </form>
        </div>
    )
};

export default SendPosts;