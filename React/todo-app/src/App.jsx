import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Plus, X, Check, Edit2 } from "lucide-react";

function App() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-300 shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        할 일 목록
      </h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="새로운 할 일을 입력하세요"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
          <Plus size={20} />
        </button>
      </div>
      <div className="mb-4 text-sm text-gray-600 text-center">
        전체 1개 중 1개 완료
      </div>
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
      <div className="mt-4 pt-4 border-t border-gray-200 select-none">
        <button className="w-full py-2 text-sm text-red-600 hover:text-red-800 transition-colors">
          완료된 할 일 모두 삭제 (1개)
        </button>
      </div>
    </div>
  );
}

export default App;
