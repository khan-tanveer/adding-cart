export const editExpense = (id, name) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    name,
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
