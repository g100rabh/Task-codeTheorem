import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(dataActions.setFormVisibleOff())
        dispatch(dataActions.setEditItemNull);
    }
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClickBackdrop} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
