import React from "react";
import stilifriends from './Friends.module.css';
import SpisokFriends from "./SpisokFriends/SpisokFriends";

const Friends = (props) => {

  

    let massivMapFriends = props.massivFriends.map (
        element => <SpisokFriends name={element.name} id={element.id} />
    )

    return(
        <div className={stilifriends.glav}>           
            {massivMapFriends}
        </div>
    )
}


export default Friends;