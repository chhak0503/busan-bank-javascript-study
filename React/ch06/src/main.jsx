import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider } from "./contexts/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* App컴포넌트 하위 모든 컴포넌트에 CounterContext 제공 */}
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
