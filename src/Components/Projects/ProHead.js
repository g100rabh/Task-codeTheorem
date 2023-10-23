import React from "react";

import classes from "./ProHead.module.css";

import { BiFilterAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";

const ProHead = () => {
  const dispatch = useDispatch();

  const formVisibleHandler = () => {
    dispatch(dataActions.setFormVisible());
  };

  return (
    <div className={classes.proheadCon}>
      <h4>Current Projects</h4>
      <span>
        <button className={classes.addProBtn} onClick={formVisibleHandler}>
          +Add Project
        </button>
        <button className={classes.filterBtn}>
          <BiFilterAlt />
        </button>
        <div className={classes.monthFilter}>
          <button>{"<"}</button>Oct<button>{">"}</button>
        </div>
        <div className={classes.yearFilter}>
          <button>{"<"}</button>2022<button>{">"}</button>
        </div>
      </span>
    </div>
  );
};

export default ProHead;
