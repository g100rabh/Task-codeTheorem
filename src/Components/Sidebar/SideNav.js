import React, { useState } from "react";

import classes from "./SideNav.module.css";
import { BiSolidDashboard } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FiFileText } from "react-icons/fi";
import { TbSettingsCheck } from "react-icons/tb";
import { AiFillFolder } from "react-icons/ai";
import { MdReceiptLong } from "react-icons/md";
import { GoPeople } from "react-icons/go";

const SideNav = () => {
  return (
    <ul className={classes.sidenav}>
      <li className={classes.activeNav}>
        <BiSolidDashboard />
        <span>Dasboard</span>
      </li>
      <li>
        <LiaFileInvoiceDollarSolid />{" "}
        <span>Invoices</span>
      </li>
      <li>
        <FiFileText />
        <span>Proposals</span>
      </li>
      <li>
        <TbSettingsCheck />
        <span>Services</span>
      </li>
      <li>
        <MdReceiptLong />
        <span>Tansactions</span>
      </li>
      <li>
        <AiFillFolder />
        <span>Projects</span>
      </li>
      <li>
        <GoPeople />
        <span>Customers</span>
      </li>
    </ul>
  );
};

export default SideNav;
