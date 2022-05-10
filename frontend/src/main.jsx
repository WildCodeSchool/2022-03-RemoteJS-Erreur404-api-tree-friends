import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ExportContext from "./contexts/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <ExportContext.MovieProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExportContext.MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
