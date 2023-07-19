import { configureStore } from "@reduxjs/toolkit";
import manga_reducer from "./reducers/mangas";

const store = configureStore({
    reducer: {
        //Acá vamos a traer los reductores de los diferentes recursos (usuarios, mangas, caps, etc)
        mangas: manga_reducer,
    }

})

export default store;