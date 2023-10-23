import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import classes from "./LowerNav.module.css";

const LowerNav = () => {
  return (
     
    <ul className={classes.lowernav}>
      <li>
        <AiOutlineSetting />
        <span>Setting</span>
      </li>
      <li>
        <FiLogOut /> <span>Logout</span>
      </li>
    </ul>
  );
};

export default LowerNav;
