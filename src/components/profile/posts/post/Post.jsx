import React from 'react'
import "./Post.css";

function Post(props) {
    return (
        <div className="content-profile__wall-post">
            <img
                src={props.img}
                alt="" className="content-profile__wall-post_avatar"/>
            <div className="content-profile__wall-post_text">{props.message}</div>
        </div>
    )
};


export default Post;