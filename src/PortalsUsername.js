import React from "react";
import ReactDOM from "react-dom";
export default function PortalsUsername({children}) {
  return ReactDOM.createPortal(children, document.getElementById("htmlAppUsername"));
}
