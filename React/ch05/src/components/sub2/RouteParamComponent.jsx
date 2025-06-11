import React from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Result1Component from "./Result1Component";

function RouteParamComponent() {
  // 라우팅을 제공하는 hook
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const btn1Handler = () => {
    // 쿼리 스트링 전송
    const query = `?name=${formData.name}&email=${formData.email}&age=${formData.age}`;

    // 라우팅
    navigate(`/result1${query}`);
  };
  const btn2Handler = () => {};
  const btn3Handler = () => {};

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="RouteParamComponent">
      <h4>React Parameter 실습</h4>

      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={changeHandler}
        />
        <br />
        <input type="button" value="쿼리 스트링 전송" onClick={btn1Handler} />
        <br />
        <input type="button" value="주소 파라미터 전송" onClick={btn2Handler} />
        <br />
        <input type="button" value="State 전송" onClick={btn3Handler} />
        <br />
      </form>

      <Routes>
        <Route path="/result1" element={<Result1Component />} />
        <Route path="/result2" element={null} />
        <Route path="/result3" element={null} />
      </Routes>
    </div>
  );
}

export default RouteParamComponent;
