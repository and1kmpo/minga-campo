import { createReducer } from "@reduxjs/toolkit";
import {
  getAuthors,
  saveProfile,
  update_authors,
} from "../actions/authorsAdmin";

const initialState = {
  loading: false,
  data: [],
  error: null,
  authors: {
    all_active: [],
    all_inactive: [],
  },
};

const authorsAdminReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAuthors.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAuthors.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.authors.all_active = action.payload.filter(
        (author) => author.active
      );
      state.authors.all_inactive = action.payload.filter(
        (author) => !author.active
      );
    })
    .addCase(getAuthors.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(saveProfile, (state, action) => {
      state.profile = action.payload.profile;
    })
    .addCase(update_authors.fulfilled, (state, action) => {
      let newState = {
        ...state,
      };
      if (action.payload.change === true) {
        console.log(true);
        (newState.authors.all_active = state.authors.all_active.filter(
          (each) => each._id != action.payload.id
        )),
          (newState.authors.all_inactive = state.authors.all_inactive.push(
            action.payload.data
          ));
      } else {
        console.log(false);
        (newState.authors.all_inactive = state.authors.all_inactive.filter(
          (each) => each._id != action.payload.id
        )),
          (newState.authors.all_active = state.authors.all_active.push(
            action.payload.data
          ));
      }
      console.log(newState);
      return newState;
    });
});

export default authorsAdminReducer;
