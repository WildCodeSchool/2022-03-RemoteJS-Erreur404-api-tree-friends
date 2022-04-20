import React from "react";
import { useNavigate } from "react-router-dom";

function StartButton() {
  const history = useNavigate();

  function handleClick() {
    history.push("/settings");
  }
  return (
    <div>
      <button type="button" className="start-button" onClick={handleClick}>
        <div className="button-arrow" />
        Start
      </button>
    </div>
  );
}

export default StartButton;
