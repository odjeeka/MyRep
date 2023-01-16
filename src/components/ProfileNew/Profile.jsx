import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
/*import stiliprofile from"./Profile.module.css";*/

const Profile = (props) => {

    
   

    return (
        <div>
            <ProfileInfo  />                        
            <MyPosts massivPosta={props.massivPosta} addPost={props.addPost} newPostText={props.newPostText} newTextArea={props.newTextArea} />            
        </div>
    )
}


export default Profile;

