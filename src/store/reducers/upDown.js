const initialState = {
  expense: [],
};

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expense: [...state.expense, action.payload],
      };

    case "REMOVE_EXPENSE":
      return {
        ...state,
        expense: state.expense.filter((exp) => exp.id !== action.payload),
      };

    case "EDIT_EXPENSE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default changeTheNumber;
