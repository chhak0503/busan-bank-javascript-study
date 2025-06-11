import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Result2Component() {
  // URL의 주소 매개변수에 접근하기 위한 hook
  const { name, email, age } = useParams();

  return (
    <div className="Result2Component">
      <h4>Result2</h4>

      <p>
        이름 : {name}
        <br />
        이메일 : {email}
        <br />
        나이 : {age}
        <br />
      </p>
    </div>
  );
}

export default Result2Component;
