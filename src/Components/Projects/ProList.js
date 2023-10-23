import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataActions } from "../../store/data-slice";

import classes from "./ProList.module.css";

const ProList = () => {
  const [showOptions, setShowOptions] = useState(null);

  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleBsThreeDotsClick = (itemIndex) => {
    if (showOptions === null) {
      setShowOptions(itemIndex);
    } else {
      setShowOptions(null);
    }
  };

  const handleOptionClick = (option, item) => {
    if (option === "edit") {
      dispatch(dataActions.setEditItem(item));
      dispatch(dataActions.setFormVisible());
    } else if (option === "delete") {
      dispatch(dataActions.itemDelete(item));
    } else if(option === "view"){
        dispatch(dataActions.setViewItem(item));
        navigate("/viewdetails");
    }
    setShowOptions(null);
  };

  return (
    <div className={classes.tableCon}>
      <Table>
        <thead className={classes.tableHead}>
          <tr>
            <th>Project Name</th>
            <th>Customer</th>
            <th>Sent Date</th>
            <th>Amount</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody className={classes.listCon}>
          {data.projectList.map((item, i) => (
            <tr key={i} className={classes[i % 2 !== 0 && "evenItem"]}>
              <td>{item.name}</td>
              <td>{item.customer}</td>
              <td>{item.date}</td>
              <td>$ {item.amt}</td>
              <td>
                <div
                  className={`${classes.dropdown} ${
                    showOptions === i && classes.active
                  }`}
                >
                  <BsThreeDots
                    onClick={() => handleBsThreeDotsClick(i)}
                    className={classes.threeDots}
                  />
                  {showOptions === i && (
                    <div className={classes.dropdownContent}>
                      <div
                        className={classes.editItem}
                        onClick={() => handleOptionClick("edit", item)}
                      >
                        Edit
                      </div>
                      <div
                        className={classes.deleteItem}
                        onClick={() => handleOptionClick("delete", item)}
                      >
                        Delete
                      </div>
                      <div
                        className={classes.viewItem}
                        onClick={() => handleOptionClick("view", item)}
                      >
                        View
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProList;
