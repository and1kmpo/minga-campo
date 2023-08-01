import { createReducer } from "@reduxjs/toolkit";
import manga_actions from "../actions/mangas";

const { save_title, save_manga } = manga_actions;

const initialState = {
  text: "",
  //checks:[]
  manga: null,
};

const manga_reducer = createReducer(initialState, (builder) =>
  builder //Cada una de las acciones requiere que configuremos un caso de reducción
    .addCase(
      save_title, //Primera acción a reducir
      (state, action) => {
        const new_state = {
          ...state,
          text: action.payload.text,
        };
        return new_state;
      }
    )
    .addCase(
      save_manga,
      (state, action) => {
        const new_state = {
          ...state,
          manga: action.payload.manga,
        }
        return new_state
      }
    )
);

export default manga_reducer;
