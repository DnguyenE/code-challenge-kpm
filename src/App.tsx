import { ToDo } from "./components/ToDo";
import type { ToDoData } from "./types";

function App() {
  return (
    <div className="bg-stone-900 grid p-4 min-h-screen">
      {/* Render the ToDo Component */}
      <ToDo />
    </div>
  );
}

export default App;
