import React from "react";
import Header from "../Header/Header";
import ProDetails from "../Projects/ProDetails";
import SideBar from "../Sidebar/SideBar";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.maincon}>
      <SideBar />
      <div className={classes.mainPage}>
        <Header />
        <ProDetails />
      </div>
    </div>
  );
};
export default Main;
