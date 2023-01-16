import React from "react"
import { NavLink } from "react-router-dom";
import stilionedialog from './OneDialog.module.css';


const Sobesednik = (props) => {
    return (
        <div className={stilionedialog.sobesednik}>
            <img src="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png" className={stilionedialog.logo} alt="#" />
            <NavLink to={"/messages/" + props.id}> {props.name} </NavLink>
            
        </div>
    )
}

export default Sobesednik;