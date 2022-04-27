import React from "react";
import { Link } from "react-router-dom";

import "./StartButton.css";

function StartButton({ link, content }) {
  return (
    <Link className="button-link" to={link}>
      <button className="start-button bg-orange-400" type="button">
        <i className="button-arrow" />
        <h2 className="start">{content}</h2>
      </button>
    </Link>
  );
}

export default StartButton;
