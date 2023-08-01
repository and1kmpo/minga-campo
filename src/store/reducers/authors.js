import { createReducer } from "@reduxjs/toolkit";
import authorsActions from "../actions/authors";

const { saveData } = authorsActions;

const initialState = {
  profile: {},
};

const authorReducer = createReducer(initialStatem, (builder) =>
  builder.addCase(saveData, (state, action) => {
    let newState = {
      ...state,
      profile: action.payload.profile,
    };

    return newState;
  })
);

export default authorReducer;
