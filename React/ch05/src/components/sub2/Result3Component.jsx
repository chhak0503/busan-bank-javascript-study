import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function Result3Component() {
  // 현재 URL에 대한 정보에 접근하기 위한 hook
  const location = useLocation();

  const data = location.state.formData;

  return (
    <div className="Result3Component">
      <h4>Result3</h4>

      <p>
        이름 : {data.name}
        <br />
        이메일 : {data.email}
        <br />
        나이 : {data.age}
        <br />
      </p>
    </div>
  );
}

export default Result3Component;
