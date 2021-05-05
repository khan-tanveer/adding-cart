import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <p>using React and Redux</p>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(incNumber(5))}> + </button>
      <button onClick={() => dispatch(decNumber(5))}> - </button>
    </div>
  );
}

export default App;
