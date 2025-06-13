import { Check, Edit2, X } from "lucide-react";
import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, onDelete }) {
  return (
    <div className="space-y-2">
      <div className="text-center text-gray-500 py-8 select-none">
        할 일이 없습니다. 새로운 할 일을 추가해보세요!
      </div>

      {todos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;
