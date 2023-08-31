import { createReducer } from "@reduxjs/toolkit";
import companiesActions from "../actions/companies";

const { saveCompanyProfile } = companiesActions;

const initialState = {
  companyProfile: {},
};

const companiesReducer = createReducer(initialState, (builder) =>
  builder.addCase(saveCompanyProfile, (state, action) => {
    let newState = {
      ...state,
      companyProfile: action.payload.companyProfile,
    };

    return newState;
  })
);

export default companiesReducer;
