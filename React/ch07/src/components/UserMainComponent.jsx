import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import UserListComponent from "./UserListComponent";
import UserRegisterComponent from "./UserRegisterComponent";
import UserModifyComponent from "./UserModifyComponent";

function UserMainComponent() {
  return (
    <div className="UserMainComponent">
      <h4>회원관리</h4>
      <p>
        <Link to={"/user/list"}>목록</Link>&nbsp;
        <Link to={"/user/register"}>등록</Link>&nbsp;
      </p>

      <Routes>
        <Route path="/user/list" element={<UserListComponent />} />
        <Route path="/user/register" element={<UserRegisterComponent />} />
        <Route path="/user/modify" element={<UserModifyComponent />} />
      </Routes>
    </div>
  );
}

export default UserMainComponent;
