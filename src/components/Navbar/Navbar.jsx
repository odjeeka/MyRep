import React from "react";
import { NavLink } from "react-router-dom";
import stilinav from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={stilinav.nav}>

      <div className={stilinav.punktpaneli}>
        <NavLink to="/profile"> Profile </NavLink>
      </div>
      <div className={stilinav.punktpaneli}>
        <NavLink to="/messages">Messages </NavLink>
      </div>
      <div className={stilinav.punktpaneli}>
        <NavLink to="/feed"> Feed </NavLink>
      </div>
      <div className={stilinav.punktpaneli}>
        <NavLink to="/friends"> Friends </NavLink>
      </div>

      
    </div>
  )
}

export default Navbar;