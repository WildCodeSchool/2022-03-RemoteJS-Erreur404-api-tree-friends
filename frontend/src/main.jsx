import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ExportContext from "./contexts/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <ExportContext.MovieProvider>
      <App />
    </ExportContext.MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
