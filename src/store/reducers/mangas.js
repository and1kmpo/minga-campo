import { createReducer } from "@reduxjs/toolkit";
import manga_actions from "../actions/mangas";

const { save_title, saveMangasNews, save_manga, save_checks } = manga_actions;

const initialState = {
  text: "",
  all: [],
  new: [],
  old: [],
  logo: "",
  selectedCategoryIds: [], // Se mantiene el array de IDs
  checks: [], // Se almacenan los IDs seleccionados en los filtros de checks
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
    .addCase(saveMangasNews, (state, action) => {
      const newState = {
        ...state,
        all: action.payload.mangas_news?.all,
        new: action.payload.mangas_news?.new,
        old: action.payload.mangas_news?.old,
        logo: action.payload.mangas_news?.logo,
      };
      return newState;
    })
    .addCase(save_manga, (state, action) => {
      const new_state = {
        ...state,
        manga: action.payload.manga,
      };
      return new_state;
    })
    .addCase(save_checks, (state, action) => {
      const newState = { ...state, checks: action.payload?.checks };
      return newState;
    })
);

export default manga_reducer;
