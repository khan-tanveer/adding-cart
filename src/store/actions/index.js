export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

export const addexpense = (data) => {
  return {
    type: "ADD_EXPENSE",
    payload: data,
  };
};

export const removeExpense = (id) => {
  return {
    type: "REMOVE_EXPENSE",
    payload: id,
  };
};
