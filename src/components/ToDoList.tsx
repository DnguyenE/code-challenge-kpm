import React, { type FC } from "react";
import type { ToDoData } from "../types";
import tick_icon from "../assets/tick.png";
import notTick_icon from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

export interface ToDoListProps {
  data: ToDoData[];
  toggle: (id: number) => void;
  edit: (id: number) => void;
  deleteToDo: (id: number) => void;
}

const ToDoList: FC<ToDoListProps> = ({ data, toggle, edit, deleteToDo }) => {
  return (
    <div>
      {/* display check and title, can click either img or p for check*/}

      {data.map((item) => (
        <div className="flex items-center my-3 gap-2">
          {/* displaying just the check and the title */}
          <div
            onClick={() => toggle(item.id)}
            className="flex flex-1 items-center cursor-pointer"
          >
            <img className="w-7" src={tick_icon} alt="" />
            <p
              className={`ml-4 text-slate-700 text-[17px] ${
                item.isCompleted ? "line-through" : ""
              }`}
            >
              {item.title}
            </p>
          </div>
          <img
            className="w-4 cursor-pointer"
            onClick={() => deleteToDo(item.id)}
            src={delete_icon}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
