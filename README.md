# To Do Application in React using TypeScript - Ethan Dinh

Task: Create a simple To-Do List Application.

## Core Features

All functions were created in ToDo.tsx as that is where the todos state is being held.  This makes it easier for child components to change any element in the todos list.

**Add Item**

This function is defined as addTask().  This function creates a 'newTask' which will then be added to todos using setTodos

**Toggle Function / Complete Function **

This function is defined as toggle(id:number).  It is designed to control the styling for a completed/non-completed task.  When this function is called, the element
isCompleted will be changed to !isCompleted allowing the user to go back and forth between the options.

**Edit Item**

This function is defined as openEditMode(id: number) and closeEditMode().  The reason why there are two functions is to create a wait until the submit button has been 
pressed by the user.  When openEditMode is called, there is a conditional render that will show the input fields for the edit.  Once submitted, the closeEditMode 
function will be called and this is where the new value will be saved into todos

**Remove Item**

This function is defined as deleteToDo(id: number).  This function is simple as it filters the todos and removes all elements that have input param: id.

