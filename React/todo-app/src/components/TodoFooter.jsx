import React from "react";

function TodoFooter() {
  return (
    <div className="mt-4 pt-4 border-t border-gray-200 select-none">
      <button className="w-full py-2 text-sm text-red-600 hover:text-red-800 transition-colors">
        완료된 할 일 모두 삭제 (1개)
      </button>
    </div>
  );
}

export default TodoFooter;
