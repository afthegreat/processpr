import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RegistrationForm from "./sale";
// import Wellcome from "./jsx";

//import RegistrationForm from "./sale";
//import MyComponent from "./link";
//import { Router } from "react-router-dom";
//import { Link } from "react-router-dom";
//import React from "react";
//import sales from "./sales";
// import slideshowhtml from "./projects/slideshowhtml";
import Slideshowhtml from "./projects/slideshowhtml";
import Slideshowtrial from "./projects/slideshowtrial";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RegistrationForm /> */}
    <Slideshowhtml />
    {/* <Slideshowtrial /> */}
  </React.StrictMode>
);
