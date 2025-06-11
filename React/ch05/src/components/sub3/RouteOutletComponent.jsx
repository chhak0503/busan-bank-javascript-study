import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ParentComponent from "./ParentComponent";
import Child1Component from "./Child1Component";
import Child2Component from "./Child2Component";

function RouteOutletComponent() {
  return (
    <div className="RouteOutletComponent">
      <h4>Route Outlet 실습</h4>

      <p>
        <Link to={"/parent"}>parent</Link>
        <Link to={"/parent/child1"}>child1</Link>
        <Link to={"/parent/child2"}>child1</Link>
      </p>
      <Routes>
        <Route path="/parent" element={<ParentComponent />}>
          <Route path="/parent/child1" element={<Child1Component />} />
          <Route path="/parent/child2" element={<Child2Component />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouteOutletComponent;
