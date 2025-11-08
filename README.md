# To Do Application in React using TypeScript - Ethan Dinh

This is a simple yet functional To Do List application build with React and TypeScript.  This app demonstrates key concepts in React development including: state management with hooks, component composition, event handling, and conditional rendering.

**Live Demo**: [here](https://code-challenge-kpm.vercel.app)

## Core Concepts and Features

**Component Based Architecture**

The main component, `ToDo.tsx` is the parent component maintaining all of the apps states and logic.
`ToDoList.tsx` is stateless and receives props from the parent allowed for good data flow

**State Management**

`useState` hooks are used to store and update different states in the application.  

`useEffect` is implemented to persist data to localStorage everytime that todos is updated (the dependency array)

**Conditional Rendering**

This app uses conditional rendering to toggle between what components render based off the values stored in the state.
`isEditing ? <edit> : <list>`

**Data Persistance**

Since updating the `localStorage` is a side effect, I decided to use a `useEffect` to synchronize the data between `localStorage` and the state only when the state is 
changed / updated

## Core Functions

**Add Item**

This function is defined as `addTask()`.  This function creates a 'newTask' which will then be added to todos using setTodos.  This demonstrates
immutability by never directly changing the value of the todos array.

**Toggle Function / Complete Function**

This function is defined as `toggle(id:number)`.  It is designed to control the styling for a completed/non-completed task.  When this function is called, the element
isCompleted will be changed to !isCompleted allowing the user to go back and forth between the options.

**Edit Item**

This function is defined as `openEditMode(id: number)` and `closeEditMode()`.  The reason why there are two functions is to create a wait until the submit button has been 
pressed by the user.  When openEditMode is called, there is a conditional render that will show the input fields for the edit.  Once submitted, the closeEditMode 
function will be called and this is where the new value will be saved into todos.  Together, they demonstrate conditional UI rendering and controlled component logic.

**Remove Item**

This function is defined as `deleteToDo(id: number)`.  This function is simple as it filters the todos and removes all elements that have input param: id.

## Project Structure

**Parent -- ToDo**

The parent manages the state and all states are located in ToDo.tsx. 

**Child -- ToDoList**

The child renders the UI and calls back into the parent when actions occur.  

## Unit Tests

Extensive unit tests were written for the application using Jest and React Testing Library to ensure good component behaviour and consistent UI rendering.
All tests are located in ToDo.test.tsx mainly working with the ToDo component (parent)

## UI Requirements

This application was designed with an emphasis on simplicity, clarity, and responsive visual feedback for users.

- Styled with tailwindcss

**BONUS**

Succcessfully implemented localStorage to persist the to-do appliaction between page reloads



