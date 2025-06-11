import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(20);

  // Mount 단계
  useEffect(() => {
    console.log("mount...");

    return () => {
      // Unmount 단계
      console.log("unmount...");
    };
  }, []);

  // Update 단계
  useEffect(() => {
    console.log("update...");
  });

  // 의존성 배열의 상태값이 업데이트 되면 useEffect 실행
  useEffect(() => {
    console.log("name update!!!");
  }, [name, age]);

  return (
    <div className="UseEffectComponent">
      <h4>useEffect() Hook 실습</h4>

      <div>
        <p>이름 : {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div>
        <p>나이 : {age}</p>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default UseEffectComponent;
