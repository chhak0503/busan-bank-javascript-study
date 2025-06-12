import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

const ChildComponent = () => {
  // Context에서 상태값, 액션을 제공받는 hook
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div className="ChildComponent">
      <h4>ChildComponent</h4>
      <p>count : {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button
        onClick={() => {
          reset(1);
        }}
      >
        리셋
      </button>
    </div>
  );
};

export default ChildComponent;
