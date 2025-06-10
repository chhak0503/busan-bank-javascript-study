import { useReducer } from "react";

// 상태 선언
const initCountState = { count: 0 };

// 리듀서 정의
function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };

    case "DECREASE":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };
  }
}

export default function UseReducerComponent() {
  //useReducer() - 복잡한 상태처리 또는 다양한 상태 전이가 필요할때 사용되는 상태관리 훅
  const [countState, countDispatch] = useReducer(countReducer, initCountState);

  return (
    <div className="UseReducerComponent">
      <h4>useReducer() Hook 실습</h4>

      <p>count : {countState.count}</p>
      <button
        onClick={() => {
          countDispatch({ type: "INCREASE" });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          countDispatch({ type: "DECREASE" });
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          countDispatch({ type: "RESET" });
        }}
      >
        리셋
      </button>
    </div>
  );
}
