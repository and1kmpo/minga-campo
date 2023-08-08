import { createReducer } from "@reduxjs/toolkit";
import manga_actions from "../actions/mangas";
const { save_title, saveMangasNews } = manga_actions;

const initialState = {
  text: "",
  mangas_news: [],
  //checks:[]
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
    .addCase(saveMangasNews, (state, action) => {
      const newState = {
        ...state,
        mangas_news: action.payload.mangas_news,
      };
      return newState;
    })
);

export default manga_reducer;
