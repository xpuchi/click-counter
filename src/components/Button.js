import React from "react";

function Button({ text, isButtonClick, click }) {
  return (
    <button
      className={isButtonClick ? "button-click" : "button-restart"}
      onClick={click}
    >
      {text}
    </button>
  );
}

export default Button;
