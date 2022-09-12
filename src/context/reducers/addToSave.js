/* eslint-disable default-case */
import { ADD_TO_SAVE } from "../actions/actionTypes";

const addToSave = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_SAVE:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default addToSave;
