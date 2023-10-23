import React from "react";
import { useSelector } from "react-redux";

import classes from "./ViewProject.module.css";

const ViewProject = () => {
  const data = useSelector((state) => state.data);
  return (
    <div className={classes.detailsCon}>
    <div>
      <h1>{data.viewItem.name}</h1>
      <h2>{data.viewItem.customer}</h2>
      </div>
      <div className={classes.thanks}>
        <h1 className={classes.fadeIn}>
          I wanted to extend my gratitude for shortlisting me for the task. I am
          eager for the next steps and look forward to a positive outcome. Thank
          you for this opportunity.
        </h1>
      </div>
    </div>
  );
};

export default ViewProject;
