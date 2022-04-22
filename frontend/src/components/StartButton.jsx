import React from "react";
import { Link } from "react-router-dom";

function StartButton() {
  return (
    <Link className="button-link" to="/settings">
      <button className="start-button" type="button">
        <i className="button-arrow" />
        <h2 className="start">Start</h2>
      </button>
    </Link>
  );
}

export default StartButton;
