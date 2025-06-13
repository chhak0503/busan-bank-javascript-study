import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Plus, X, Check, Edit2 } from "lucide-react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoStats from "./components/TodoStats";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const todo = {
      id: Date.now(),
      title: text,
      completed: false,
    };

    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    alert("삭제!" + id);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-300 shadow">
      <TodoHeader />
      <TodoInput onAddTodo={addTodo} />
      <TodoStats />
      <TodoList todos={todos} onDelete={deleteTodo} />
      <TodoFooter />
    </div>
  );
}

export default App;
