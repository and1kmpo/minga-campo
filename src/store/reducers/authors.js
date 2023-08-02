import { createReducer } from "@reduxjs/toolkit";
import authorsActions from "../actions/authors";

const { saveProfile } = authorsActions;

const initialState = {
  profile: {},
};

const authorReducer = createReducer(initialState, (builder) =>
  builder.addCase(saveProfile, (state, action) => {
    let newState = {
      ...state,
      profile: action.payload.profile,
    };

    return newState;
  })
);

export default authorReducer;
