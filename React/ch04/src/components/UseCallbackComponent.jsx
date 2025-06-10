import React, { useCallback, useState } from "react";

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);

  // 핸들러 함수를 count 상태가 업데이트 될때마다 새로 생성하는게 아니고 useCallback()으로 저장해서 재활용
  const addHandler = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);

  return (
    <div className="UseCallbackComponent">
      <h4>useCallback() Hook 실습</h4>
      <p>count : {count}</p>
      <button onClick={addHandler}>증가</button>
    </div>
  );
};

export default UseCallbackComponent;
