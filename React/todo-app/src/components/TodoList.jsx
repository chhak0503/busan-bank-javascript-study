import { Check, Edit2, X } from "lucide-react";
import React from "react";

function TodoList() {
  return (
    <div className="space-y-2">
      <div className="text-center text-gray-500 py-8 select-none">
        할 일이 없습니다. 새로운 할 일을 추가해보세요!
      </div>

      <div
        className={`flex items-center gap-3 p-3 rounded-md border bg-white border-gray-300`}
      >
        <button
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center select-none border-gray-300 hover:border-green-400`}
        ></button>
        <span className={`flex-1 cursor-pointer text-gray-800 select-none`}>
          코딩하기
        </span>

        <button className="flex-shrink-0 w-6 h-6 text-blue-500 hover:text-blue-700 transition-colors">
          <Edit2 size={16} />
        </button>

        <button className="flex-shrink-0 w-6 h-6 text-red-500 hover:text-red-700 transition-colors">
          <X size={16} />
        </button>
      </div>
      <div
        className={`flex items-center gap-3 p-3 rounded-md border bg-gray-50 border-gray-200`}
      >
        <button
          className={`w-6 h-6 rounded-full flex items-center justify-center select-none bg-green-500 text-white`}
        >
          <Check size={16} />
        </button>

        <span className={`flex-1 cursor-pointer text-gray-800 select-none`}>
          운동하기
        </span>

        <button className="flex-shrink-0 w-6 h-6 text-blue-500 hover:text-blue-700 transition-colors">
          <Edit2 size={16} />
        </button>

        <button className="flex-shrink-0 w-6 h-6 text-red-500 hover:text-red-700 transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default TodoList;
