import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UserMainComponent from "./components/UserMainComponent";

function App() {
  return (
    <>
      <h3>7.React HTTP 통신</h3>

      <BrowserRouter>
        <UserMainComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
