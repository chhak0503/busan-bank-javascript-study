import React, { createContext, useState } from "react";

// Context 생성
const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  // 모든 컴포넌트에서 공유할 상태값
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = (value) => {
    setCount(value);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
``;
export default CounterContext;
