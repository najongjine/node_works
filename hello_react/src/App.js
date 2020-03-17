import React from "react";
import logo from "./logo.svg";
import "./App.css";
//component를 사용하기위해서 불러오는 절차
import RCC from "./component/RCC";
import RSC from "./component/RSC";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Page test sentence1</p>
        <RCC />
        <RSC />
      </header>
    </div>
  );
}

export default App;
