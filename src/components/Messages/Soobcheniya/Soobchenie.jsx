import React from "react";
import stilisoobcheniya from './Soobchenie.module.css';

const Soobchenie = (props) => {


 
   
    return (
        <div className={stilisoobcheniya.sobesednik}>

            <img src="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png" alt="#" className={stilisoobcheniya.logo} />                

            {props.text} 
            
            

            </div>

    )
}


export default Soobchenie;