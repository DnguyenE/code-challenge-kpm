import type { FC } from "react";
import type { ToDoData } from "../types";
import {
  TrashIcon,
  PencilIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export const CircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-8 w-8 text-white"
  >
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export interface ToDoListProps {
  data: ToDoData[];
  toggle: (id: number) => void;
  edit: (id: number) => void;
  deleteToDo: (id: number) => void;
}

const ToDoList: FC<ToDoListProps> = ({ data, toggle, edit, deleteToDo }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="flex items-center my-3 gap-2">
          <div
            onClick={() => toggle(item.id)}
            className="flex items-center cursor-pointer flex-1"
          >
            {item.isCompleted ? (
              <CheckCircleIcon className="size-8 text-white" />
            ) : (
              <CircleIcon />
            )}

            <p
              className={`ml-4 text-[17px] ${
                item.isCompleted
                  ? "line-through text-[#78CFB0]"
                  : "text-[#9E78CF]"
              }`}
            >
              {item.title}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              edit(item.id);
            }}
            className="p-1 hover:bg-gray-100 rounded"
            aria-label="Delete task"
          >
            <PencilIcon className="size-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteToDo(item.id);
            }}
            className="p-1 hover:bg-gray-100 rounded"
            aria-label="Delete task"
          >
            <TrashIcon className="size-6 text-white" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
