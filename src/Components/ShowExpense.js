import React from "react";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/actions";

const ShowExpense = ({ id, name, amount }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <label>
          {name} : {amount}
        </label>
        &nbsp;
        <button onClick={() => dispatch(removeExpense(id))}>delete</button>
      </div>
      <br />
    </div>
  );
};

export default ShowExpense;
