import React from "react";

import classes from "./SideBar.module.css";
import logo from "../../assests/Logo.jpg";
import SideNav from "./SideNav";
import LowerNav from "./LowerNav";

const SideBar = () => {
  return (
    <div className={classes.sideCon}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <SideNav />
      <LowerNav />
    </div>
  );
};

export default SideBar;
