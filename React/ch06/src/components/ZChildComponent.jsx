import React from "react";
import CounterContext from "../contexts/CounterContext";
import useCountStore from "../stores/countStore";

const ZChildComponent = () => {
  const { count, increment, decrement, reset } = useCountStore();

  return (
    <div className="ZChildComponent">
      <h4>ZChildComponent</h4>
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

export default ZChildComponent;
