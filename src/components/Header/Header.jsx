import React from "react";
import stilihead from "./Header.module.css";


const Header = () => {
    return(
        <div className={stilihead.header}>
        Header
        <div className={stilihead.proverka}> Proverka</div>
      </div>
    )
}

export default Header;