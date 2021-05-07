import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/actions";

const ShowExpense = ({ id, name, amount }) => {
  const [edit, setEdit] = useState(false);

  const [newInput, setNewInput] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const submitUpdate = () => {};

  return (
    <div>
      <div>
        {!edit ? (
          <div>
            <label>
              {name} : {amount}
            </label>
          </div>
        ) : (
          <div>
            <input
              placeholder="expense name"
              type="text"
              value={newInput}
              onChange={(e) => setNewInput(e.target.value)}
            />
            <input
              placeholder="number"
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />
          </div>
        )}
        &nbsp;
        <button onClick={() => dispatch(removeExpense(id))}>delete</button>
        {!edit ? (
          <button onClick={handleEdit}>edit</button>
        ) : (
          <button onClick={submitUpdate}>update</button>
        )}
      </div>
      <br />
    </div>
  );
};

export default ShowExpense;
