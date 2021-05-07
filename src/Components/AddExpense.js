import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addexpense } from "../store/actions";
import ShowExpense from "./ShowExpense";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const data = useSelector((state) => state.expense.expense);

  // console.log(
  //   "reduce",
  //   data.reduce((acc, currVal) => {
  //     return (acc += parseInt(currVal.amount));
  //   }, 0)
  // );

  const totalValue = data.reduce((prev, currVal) => {
    return (prev += parseInt(currVal.amount));
  }, 0);

  const dispatch = useDispatch();

  const createExpense = (e) => {
    e.preventDefault();

    const addDetails = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      amount: amount,
    };

    dispatch(addexpense(addDetails));
    setName("");
    setAmount("");
  };

  return (
    <div>
      <p>Total expense $ {totalValue}</p>
      <h1>Add Expense</h1>
      <form>
        <label>Name of the expense</label>&nbsp;
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Expense Amount</label>&nbsp;
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <button onClick={createExpense}>Add</button>
      </form>

      <h1>SHOW EXPENSE</h1>

      {data.map((dat) => (
        <ShowExpense
          id={dat.id}
          key={dat.id}
          name={dat.name}
          amount={dat.amount}
        />
      ))}
    </div>
  );
};

export default AddExpense;
