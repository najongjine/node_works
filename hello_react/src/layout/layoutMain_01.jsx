import React from "react";
import Nav from "./nav";
import "./layoutMain.css";
import LayoutBody from "./layoutBody";

const layoutMain_01 = () => {
  return (
    <div>
      <header>
        <h2>my book</h2>
      </header>
      <Nav />
      <LayoutBody />
    </div>
  );
};

export default layoutMain_01;
