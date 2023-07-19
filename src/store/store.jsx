import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        //Acá vamos a traer los reductores de los diferentes recursos (usuarios, mangas, caps, etc)
    }

})

export default store;