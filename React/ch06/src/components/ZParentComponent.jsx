import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";
import ChildComponent from "./ChildComponent";
import useCountStore from "../stores/countStore";
import ZChildComponent from "./ZChildComponent";

const ZParentComponent = () => {
  const { count, increment, decrement, reset } = useCountStore();

  return (
    <div className="ZParentComponent">
      <h4>ZParentComponent</h4>
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

      <ZChildComponent />
    </div>
  );
};

export default ZParentComponent;
