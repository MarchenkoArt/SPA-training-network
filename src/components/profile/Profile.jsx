import React from 'react'
import "./Profile.css";
import Wall from "./posts/wall/Wall";

function Profile(props) {

    return (
        <div className="content-profile">
            <div className="content-profile__wrapper">
                <img src={props.profileData.cover} alt=""
                     className="content-profile__banner"/>

                <div className="content-profile__user">

                    <div className="content-profile__user_info">
                        <img
                            src={props.profileData.avatar}
                            alt="" className="content-profile__user_image"/>
                        <div className="content-profile__user_name">&#64;{props.profileData.name}</div>
                        <div className="content-profile__user_data">Date of Birth: {props.profileData.birth} <br/>
                            City: {props.profileData.city} <br/>
                            Languages: {props.profileData.languages}
                        </div>
                    </div>
                    <Wall img={props.profileData.avatar} postData={props.postData}/>
                </div>
            </div>
        </div>
    )
};





export default Profile;