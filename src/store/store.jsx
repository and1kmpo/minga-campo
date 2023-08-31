import { configureStore } from "@reduxjs/toolkit";
import manga_reducer from "./reducers/mangas";
import chapter_reducer from "./reducers/chapters";
import authorReducer from "./reducers/authors";
import authorsAdminReducer from "./reducers/authorsAdmin";
import companyReducer from "./reducers/companies";
import companiesAdminReducer from "./reducers/companiesAdmins";



const store = configureStore({
  reducer: {
    //Acá vamos a traer los reductores de los diferentes recursos (usuarios, mangas, caps, etc)
    mangas: manga_reducer,
    chapter: chapter_reducer,
    author: authorReducer,
    company: companyReducer,
    authorAdmin: authorsAdminReducer,
    companyAdmin: companiesAdminReducer
  },
});

export default store;
