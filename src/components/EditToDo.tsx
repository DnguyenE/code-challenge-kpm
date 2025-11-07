import type { ToDoData } from "../types";

export const EditToDo = () => {

  return (
    <div className="mb-4 flex item-center bg-gray-200 rounded-full mt-4">
      <input
        type="text"
        placeholder="Enter your task"
        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-7 placeholder:text-slate-600"
      />
      <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointe">
        Edit Task
      </button>
    </div>
  );
};
