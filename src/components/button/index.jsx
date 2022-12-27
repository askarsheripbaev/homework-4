import React from "react";

const ButtonType = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default ButtonType