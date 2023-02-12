import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import RestoDashboard from "./components/RestoDashboard";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Routetable = () => {
  let isAuthenticated = true;

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login history={history} />} />
          <Route path="/Login" element={<Login history={history} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/RestoDashboard" element={<RestoDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routetable;