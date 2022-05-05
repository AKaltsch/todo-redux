import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  //   console.log(props);
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      {/* stopPropagation stops the onCLick from being passed down to the children of the parent div */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title} </div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
