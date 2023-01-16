import React from "react";
import { NavLink } from "react-router-dom";


const SpisokFriends = (props) => {
    return(
        <div>
            <NavLink to={/friends/ +  props.id}> {props.name} </NavLink>
        </div>
    )
}


export default SpisokFriends;