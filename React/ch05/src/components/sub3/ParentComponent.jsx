import React from "react";
import { Outlet } from "react-router-dom";

function ParentComponent() {
  return (
    <div className="ParentComponent">
      <h4>ParentComponent</h4>

      {/* 중첩된 자식 컴포넌트 라우팅 */}
      <Outlet />
    </div>
  );
}

export default ParentComponent;
