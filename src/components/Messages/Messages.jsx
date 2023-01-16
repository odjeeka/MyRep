import React from "react";
import stillimessages from "./Messages.module.css";
import Sobesednik from "./OneDialog/OneDialog";
import Soobchenie from "./Soobcheniya/Soobchenie";


const Messages = (props) => {   

    let massivMapSobesedniki = props.massivSobesednikov.map(elementMassiva => <Sobesednik name={elementMassiva.name} id={elementMassiva.id} />)   
    let massivMapText = props.massivTexta.map(elementMassiva => <Soobchenie text={elementMassiva.text} />) 
    

    return (
        <div className={stillimessages.fullblock}>

            <div className={stillimessages.leftblock}>
                {massivMapSobesedniki}
            </div>

            <div className={stillimessages.rightblock}>
                {massivMapText}
            </div>
            
        </div>
    )
}



export default Messages;