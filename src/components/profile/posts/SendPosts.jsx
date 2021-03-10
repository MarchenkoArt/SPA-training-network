import React from 'react'
import "./SendPosts.css";

function SendPosts(props) {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let newPost = newPostElement.current.value;
        props.addPost(newPost);
    };

    return (
        <div>
            <h2 className="content-profile__title">My Posts</h2>
            <form className="send-form">
                <textarea  ref={newPostElement} cols="30" rows="2" id="posts-content"
                                              placeholder="Your news..."/>
                <button type="reset" onClick={addNewPost}>Send</button>
            </form>
        </div>
    )
};

export default SendPosts;