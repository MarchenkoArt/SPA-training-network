import React from 'react'
import "./SendPosts.css";

function SendPosts() {

    let addPost = () => {

    };
    return (
        <div>
            <h2 className="content-profile__title">My Posts</h2>
            <form action="" className="send-form">
                <textarea name="posts" id="" cols="30" rows="2" id="posts-content"
                                              placeholder="Your news..."/>
                <button onClick={addPost}>Send</button>
            </form>
        </div>
    )
};

export default SendPosts;