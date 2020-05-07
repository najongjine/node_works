import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BBsMain from "./bbs/bbsMain";
import MainNav from "./MainNav";
import BBsWrite from "./bbs/bbsWrite";

function App() {
  const header_style = {
    marginBottom: 0,
  };
  return (
    <div className="container-fluid">
      <header style={header_style} className="jumbotron text-center">
        <h2>My BBS 2020</h2>
        <p>react &amp; Spring Boot BBS</p>
      </header>
      <Router>
        <MainNav />
        <Route exact path="/" component={BBsMain} />
        <Route path="/bbsWrite" component={BBsWrite} />
      </Router>
    </div>
  );
}

export default App;
