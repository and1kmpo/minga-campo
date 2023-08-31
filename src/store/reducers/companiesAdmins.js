import { createReducer } from "@reduxjs/toolkit";
import {
  getCompanies,
  saveProfile,
  update_companies,
} from "../actions/companiesAdmin";

const initialState = {
  loading: false,
  data: [],
  error: null,
  companies: {
    all_active: [],
    all_inactive: [],
  },
};

const companiesAdminReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCompanies.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.companies.all_active = action.payload.filter(
        (company) => company.active
      );
      state.companies.all_inactive = action.payload.filter(
        (company) => !company.active
      );
    })
    .addCase(getCompanies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(saveProfile, (state, action) => {
      state.profile = action.payload.profile;
    })
    .addCase(update_companies.fulfilled, (state, action) => {
      let newState = {
        ...state,
      };
      if (action.payload.change === true) {
        console.log(true);
        (newState.companies.all_active = state.companies.all_active.filter(
          (each) => each._id != action.payload.id
        )),
          (newState.companies.all_inactive = state.companies.all_inactive.push(
            action.payload.data
          ));
      } else {
        console.log(false);
        (newState.companies.all_inactive = state.companies.all_inactive.filter(
          (each) => each._id != action.payload.id
        )),
          (newState.companies.all_active = state.companies.all_active.push(
            action.payload.data
          ));
      }
      console.log(newState);
      return newState;
    });
});

export default companiesAdminReducer;
