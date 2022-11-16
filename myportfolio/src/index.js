import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
// import { HashRouter } from "react-router-dom";
// import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")

);

// ReactDOM.render((
//    <BrowserRouter basename={process.env.PUBLIC_URL}>
//      <App />
//    </BrowserRouter>
// ), ...)

// return (
//     <HashRouter base="/">
//         <App />
//     </HashRouter>
// )

reportWebVitals();


