import { configureStore } from "@reduxjs/toolkit";
import manga_reducer from "./reducers/mangas";
import chapter_reducer from "./reducers/chapters";
import authorReducer from "./reducers/authors";


const store = configureStore({
  reducer: {
    //Acá vamos a traer los reductores de los diferentes recursos (usuarios, mangas, caps, etc)
    mangas: manga_reducer,
    chapters: chapter_reducer,
    author: authorReducer,
  },
});

export default store;
