import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">02/05/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}
export default App;
