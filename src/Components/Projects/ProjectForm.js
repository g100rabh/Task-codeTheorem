import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import Modal from "./Modal";

import classes from "./ProjectForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store/data-slice";

const ProjectForm = () => {
  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const customerInputRef = useRef();
  const dateInputRef = useRef();
  const amtInputRef = useRef();
  const data = useSelector((state) => state.data);
  const editItem = data.editItem;

  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const closeHandler = () => {
    dispatch(dataActions.setFormVisibleOff());
    dispatch(dataActions.setEditItemNull);
  };

  const saveItemHandler = () => {
    const date = new Date(dateInputRef.current.value);

    const monthAbbreviation = monthNames[date.getMonth()];
    if (editItem == null) {
      const itemData = {
        id: Math.random().toString(),
        name: nameInputRef.current.value,
        customer: customerInputRef.current.value,
        date: ` ${date.getDate()} ${monthAbbreviation} ${date.getFullYear()}`,
        amt: amtInputRef.current.value,
      };
      dispatch(dataActions.pushItem(itemData));
    } else {
      const itemData = {
        id: editItem.id,
        name: nameInputRef.current.value,
        customer: customerInputRef.current.value,
        date: ` ${date.getDate()} ${monthAbbreviation} ${date.getFullYear()}`,
        amt: amtInputRef.current.value,
      };
      dispatch(dataActions.editItemData({ item: itemData, edit: editItem }));
    }
    dispatch(dataActions.setFormVisibleOff());
  };

  let defaultDate = "";
  if (editItem !== null) {
    const parts = editItem.date.split(" ");
    const monthIndex = monthNames.findIndex((month) => month === parts[1]);
    const isoDate = `${parts[2]}-${(monthIndex + 1)
      .toString()
      .padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
    defaultDate = isoDate;
  }

  return (
    <Modal>
      <div className={classes.container}>
        <h1>Add New Project</h1>
        <form>
          <span>
            {" "}
            <label>Project Name:</label>
            <input
              type="text"
              ref={nameInputRef}
              defaultValue={editItem !== null ? editItem.name : ""}
            />
          </span>
          <span>
            <label>Customer:</label>
            <input
              type="text"
              ref={customerInputRef}
              defaultValue={editItem !== null ? editItem.customer : ""}
            />
          </span>
          <span>
            <label>Sent Date:</label>
            <input
              type="date"
              ref={dateInputRef}
              defaultValue={editItem !== null && defaultDate}
            />
          </span>
          <span>
            <label>Amount:</label>
            <input
              type="number"
              ref={amtInputRef}
              defaultValue={editItem !== null ? editItem.amt : ""}
            />
          </span>

          <div>
            <Button variant="primary" onClick={saveItemHandler}>
              {editItem !== null ? "Edit" : "Save"}
            </Button>{" "}
            <Button variant="danger" onClick={closeHandler}>
              Close
            </Button>{" "}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ProjectForm;
