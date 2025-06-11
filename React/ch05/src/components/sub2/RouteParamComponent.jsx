import React from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Result1Component from "./Result1Component";
import Result2Component from "./Result2Component";
import Result3Component from "./Result3Component";

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
  const btn2Handler = () => {
    // 주소 파라미터 전송
    const params = `/${formData.name}/${formData.email}/${formData.age}`;

    // 라우팅
    navigate(`/result2${params}`);
  };
  const btn3Handler = () => {
    // state 전송 라우팅
    navigate(`/result3`, { state: { formData } });
  };

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
        <Route
          path="/result2/:name/:email/:age"
          element={<Result2Component />}
        />
        <Route path="/result3" element={<Result3Component />} />
      </Routes>
    </div>
  );
}

export default RouteParamComponent;
