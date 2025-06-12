import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <>
      <h3>6.리액트 상태 관리</h3>

      <h4>Context API 실습</h4>
      <ParentComponent />
    </>
  );
}

export default App;
