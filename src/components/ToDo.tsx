import { useEffect, useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";
import type { ToDoData } from "../types";
import ToDoList from "./ToDoList";

export const ToDo = () => {
  //storing [] of types ToDo
  const [todos, setTodos] = useState<ToDoData[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [editValue, setEditValue] = useState<string>("");
  const [editId, setEditId] = useState<number>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Log todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
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

  const openEditMode = (id: number) => {
    //go to edit mode
    setIsEditing(true);
    setEditId(id);
  };

  const closeEditMode = () => {
    //changing the title value of Todo item
    if (editValue === "" || editValue === null) return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editId ? { ...todo, title: editValue } : todo
      )
    );

    setEditValue("");

    setIsEditing(false);
  };

  const deleteToDo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    // create the container to hold the table
    <div className="bg-[#1D1825] place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <Toaster position="top-center" toastOptions={{
        style: {
          background: '#3E1671',
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#3E1671',
        },
      }} />
      {/* header */}
      <div className="flex items-center mt-7 gap-3">
        <CalendarIcon className="size-10 text-white" />
        <h1 className="text-white text-3xl font-semibold">ToDo App</h1>
      </div>
      {/* create the input field */}
      <div className="mb-2 flex flex-col gap-1">
        <div className="flex items-center bg-transparent rounded-full mt-4">
          <input
            type="text"
            placeholder="Enter your task"
            className="bg-transparent text-white border-0 outline-none flex-1 h-8 pl-6 pr-7 placeholder:text-[#777777]"
            value={inputValue}
            maxLength={27}
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
              if (value.length >= 27) {
                toast('Maximum 27 characters reached!', {
                  icon: '⚠️',
                  duration: 1000,
                });
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />
          <button
            onClick={addTask}
            className="border-none rounded-full bg-[#9E78CF] w-8 h-8 text-white text-lg font-medium cursor-pointer"
          >
            +
          </button>
        </div>
        <hr className="border-t border-gray-200 mb-4" />
        {/* //render the list / editing component now */}
        <div>
          {isEditing ? (
            <div className="mb-4 flex items-center bg-[#1D1825] border border-[#3E1671] rounded-full mt-4">
              <input
                type="text"
                placeholder="Edit Task"
                className="bg-transparent text-white border-0 outline-none flex-1 h-14 pl-6 pr-4 placeholder:text-[#777777]"
                value={editValue}
                maxLength={27}
                onChange={(e) => {
                  const value = e.target.value;
                  setEditValue(value);
                  if (value.length >= 27) {
                    toast('Maximum 27 characters reached!', {
                      icon: '⚠️',
                      duration: 1000,
                    });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    closeEditMode();
                  } else if (e.key === "Escape") {
                    setIsEditing(false);
                    setEditValue("");
                  }
                }}
                autoFocus
              />
              <button
                onClick={() => closeEditMode()}
                className="border-none rounded-full bg-[#9E78CF] w-20 h-10 text-white text-sm font-medium cursor-pointer mr-2"
              >
                Save
              </button>
            </div>
          ) : (
            <ToDoList
              data={todos}
              edit={openEditMode}
              toggle={toggle}
              deleteToDo={deleteToDo}
            />
          )}
        </div>
      </div>
    </div>
  );
};
