import React from 'react'
import "./Wall.css";
import SendPosts from "../SendPosts";
import Post from "../post/Post";


function Wall(props) {

    let postElements = props.postData.map( post => <Post message={post.message} img={props.img}/>)

    return (
        <div className="content-profile__wall">
            <SendPosts dispatch={props.dispatch} textPost={props.textPost}/>
            <div className="content-profile__wall-posts">
                {postElements}
            </div>
        </div>
    )
};

export default Wall;