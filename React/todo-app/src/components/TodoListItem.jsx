import { Check, Edit2, X } from "lucide-react";
import React from "react";

function TodoListItem({ todo, onDelete, onToggle }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-md border ${
        todo.completed
          ? "bg-gray-50 border-gray-200"
          : "bg-white border-gray-300"
      }`}
    >
      <button
        onClick={() => {
          onToggle(todo.id);
        }}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center select-none border-gray-300 hover:border-green-400`}
      >
        {todo.completed && <Check size={16} />}
      </button>
      <span
        className={`flex-1 cursor-pointer text-gray-800 select-none ${
          todo.completed ? "text-gray-500 line-through" : "text-gray-800"
        }`}
      >
        {todo.title}
      </span>

      <button className="flex-shrink-0 w-6 h-6 text-blue-500 hover:text-blue-700 transition-colors">
        <Edit2 size={16} />
      </button>

      <button
        onClick={() => {
          onDelete(todo.id);
        }}
        className="flex-shrink-0 w-6 h-6 text-red-500 hover:text-red-700 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}

export default TodoListItem;
