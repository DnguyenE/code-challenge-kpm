import React, { type FC } from "react";
import type { ToDoData } from "../types";
import tick_icon from "../assets/tick.png";
import notTick_icon from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import { EditToDo } from "./EditToDo";

export interface ToDoListProps {
  data: ToDoData[];
  toggle: (id: number) => void;
  edit: (id: number) => void;
  deleteToDo: (id: number) => void;
}

const ToDoList: FC<ToDoListProps> = ({ data, toggle, edit, deleteToDo }) => {
  return (
    <div>
      {data.map((item) =>
        item.isEditing ? (
          <EditToDo/>
        ) : (
          <div key={item.id} className="flex items-center my-3 gap-2">
            <div
              onClick={() => toggle(item.id)}
              className="flex items-center cursor-pointer flex-1"
            >
              <img
                className="w-7 h-7"
                src={item.isCompleted ? tick_icon : notTick_icon}
                alt=""
              />
              <p
                className={`ml-4 text-slate-700 text-[17px] ${
                  item.isCompleted ? "line-through text-gray-400" : ""
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
              <img className="w-4 h-4" src={delete_icon} alt="Delete" />
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default ToDoList;
