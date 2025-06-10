import React, { useMemo, useState } from "react";

const hardCalc = (num) => {
  console.log("hardCalc...");
  for (let i = 0; i < 1_000_000_000; i++) {}

  return num + 1000;
};

const easyCalc = (num) => {
  console.log("easyCalc...");
  return num + 1000;
};

const UseMemoComponent = () => {
  const [hardNum, setHardNum] = useState(0);
  const [easyNum, setEasyNum] = useState(0);

  // useMemo()를 사용하지 않으면 easyNum 상태를 업데이트 할때마다 hardCalc()가 매번 실행되기 때문에 성능 비용 발생
  //const hardResult = hardCalc(hardNum);

  // useMemo() 사용해서 연산된 결과를 캐싱해서 캐싱된 결과를 사용
  const hardResult = useMemo(() => {
    return hardCalc(hardNum);
  }, [hardNum]); // 의존성 배열(hardNum) 값이 업데이트 되면 hardCalc() 실행

  const easyResult = easyCalc(easyNum);

  return (
    <div className="UseMemoComponent">
      <h4>useMemo() Hook 실습</h4>

      <p>
        hardNum :{" "}
        <input
          type="number"
          value={hardNum}
          onChange={(e) => {
            setHardNum(e.target.value);
          }}
        />
        <span>hardResult : {hardResult}</span>
      </p>
      <p>
        easyNum :{" "}
        <input
          type="number"
          value={easyNum}
          onChange={(e) => {
            setEasyNum(e.target.value);
          }}
        />
        <span>easyResult : {easyResult}</span>
      </p>
    </div>
  );
};

export default UseMemoComponent;
