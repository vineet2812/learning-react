import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Title1 from "./components/Title";
import "./App.css";
function App() {
  //let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Salad", "Milk", "Roti", "Oats"];
  return (
    <React.Fragment>
      <Title1></Title1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
