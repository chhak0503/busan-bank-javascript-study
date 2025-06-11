import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import HelloComponent from "./HelloComponent";
import WelecomeComponent from "./WelcomeComponent";
import GreetingComponent from "./GreetingComponent";

const RouterMainComponent = () => {
  return (
    <div className="RouterMainComponent">
      <h4>React Router 기본</h4>
      <p>
        <Link to={"/hello"}>hello</Link>&nbsp;
        <Link to={"/welcome"}>welcome</Link>&nbsp;
        <Link to={"/greeting"}>greeting</Link>&nbsp;
      </p>

      <Routes>
        <Route path="/hello" element={<HelloComponent />} />
        <Route path="/welcome" element={<WelecomeComponent />} />
        <Route path="/greeting" element={<GreetingComponent />} />
      </Routes>
    </div>
  );
};

export default RouterMainComponent;
