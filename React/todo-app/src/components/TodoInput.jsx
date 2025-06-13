import { Plus } from "lucide-react";
import React, { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addHandler = () => {
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
        placeholder="새로운 할 일을 입력하세요"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={addHandler}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <Plus size={20} />
      </button>
    </div>
  );
}

export default TodoInput;
