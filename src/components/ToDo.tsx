import React, { useEffect, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import type { ToDoData } from "../types";
import ToDoList from "./ToDoList";

export const ToDo = () => {
  //storing [] of types ToDo
  const [todos, setTodos] = useState<ToDoData[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Log todos whenever they change
  useEffect(() => {
    console.log("Current todos:", todos);
  }, [todos]);

  const addTask = () => {
    //check if input is empty
    if (inputValue.trim() === "") return;

    //create new task
    const newTask = {
      id: Date.now(),
      title: inputValue.trim(),
      isCompleted: false,
      isEditing: false,
    };

    //add
    setTodos((prev) => [...prev, newTask]);
    setInputValue("");
  };

  const toggle = (id: number) => {
    // Update the todo item's isCompleted status
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editToDo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteToDo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    // create the container to hold the table
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* header */}
      <div className="flex items-center mt-7 gap-3">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">ToDo App</h1>
      </div>
      {/* create the input field */}
      <div className="mb-4 flex item-center bg-gray-200 rounded-full mt-4">
        <input
          type="text"
          placeholder="Enter your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-7 placeholder:text-slate-600"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <button
          onClick={addTask}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointe"
        >
          Add Task!
        </button>
      </div>
      <hr className="border-t border-gray-200 mb-4" />
      {/* //render the list component now */}
      <div>
        <ToDoList
          data={todos}
          toggle={toggle}
          edit={editToDo}
          deleteToDo={deleteToDo}
        />
      </div>
    </div>
  );
};
