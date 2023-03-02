import React from "react";
import logo from "../images/Logo Falke 1.png";

export default function FalkeLoader() {
  return (
    <div className="loader-container">
      <img className="loader" src={logo} alt="Falke Logo" />
      <h3>loading</h3>
    </div>
  );
}
