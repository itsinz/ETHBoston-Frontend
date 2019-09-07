import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App" style={{ height: "100vh" }}>
        <Route path="/" exact component={Login} />
        {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
      </div>
    </Router>
  );
}

export default App;
