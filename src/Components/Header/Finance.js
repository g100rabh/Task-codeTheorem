import React, { useState } from "react";
import { MdUnfoldMore } from "react-icons/md";
import { staticData } from "./headerData";

import classes from "./Finance.module.css";

const Finance = () => {
  const [viewMonthly, setViewMonthly] = useState(true);
  
  return (
    <div className={classes.financeCon}>
      <span className={classes.heading}>
        <h3>Finance Overview</h3>
        <span onClick={() => setViewMonthly((prev) => !prev)}>
          <text>{viewMonthly ? "Monthly " : "Yearly "}</text><MdUnfoldMore />
        </span>
      </span>
      <ul className={classes.cardCon}>
        {staticData.map((i) => (
          <li key={i.amt}>
            <div  className={classes.cardFin}>
              <span>
                <h2>$ {i.amt}</h2>{" "}
                <text
                  className={classes[i.growth[0] == "gain" ? "gain" : "loss"]}
                >
                  {i.growth[1]}
                </text>
              </span>
              <p>{i.type}</p>
            </div>
            <span className={classes.iconFin}>{i.icon[0]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Finance;
