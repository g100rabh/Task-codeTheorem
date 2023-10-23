import React, { useState } from "react";
import classes from "./ProDetails.module.css";
import ProHead from "./ProHead";
import ProList from "./ProList";

const ProDetails = () => {
    
  return (
    <div className={classes.proDetailsCon}>
      <ProHead />
      <ProList />
    </div>
  );
};
export default ProDetails;
