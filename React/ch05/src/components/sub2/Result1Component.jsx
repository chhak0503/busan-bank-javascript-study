import React from "react";
import { useSearchParams } from "react-router-dom";

function Result1Component() {
  // URL의 쿼리 매개변수에 접근하기 위한 hook
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const age = searchParams.get("age");

  return (
    <div className="Result1Component">
      <h4>Result1</h4>

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

export default Result1Component;
