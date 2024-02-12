import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import ToDoItem from "./Components/ToDoItem";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <div class="items-container">
        <AddToDo></AddToDo>
        <ToDoItem></ToDoItem>
      </div>
    </center>
  );
}
export default App;
