import React from 'react'
import "./Profile.css";
import Wall from "./posts/wall/Wall";

function Profile(props) {

    return (
        <div className="content-profile">
            <div className="content-profile__wrapper">
                <img src={props.profilePage.profileData.cover} alt=""
                     className="content-profile__banner"/>

                <div className="content-profile__user">

                    <div className="content-profile__user_info">
                        <img
                            src={props.profilePage.profileData.avatar}
                            alt="" className="content-profile__user_image"/>
                        <div className="content-profile__user_name">&#64;{props.profilePage.profileData.name}</div>
                        <div className="content-profile__user_data">Date of Birth: {props.profilePage.profileData.birth}
                            <br/>
                            City: {props.profilePage.profileData.city} <br/>
                            Languages: {props.profilePage.profileData.languages}
                        </div>
                    </div>
                    <Wall img={props.profilePage.profileData.avatar} postData={props.profilePage.postData}
                          textPost={props.profilePage.textPost}
                          dispatch={props.dispatch}/>
                </div>
            </div>
        </div>
    )
};


export default Profile;