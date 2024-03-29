import { createAction } from "@reduxjs/toolkit";

//La acción recibe un obj con el title a guardar en un estado global
//La acción lo único que va a hacer es ser intermediario entre la vista y la lógica de guardado/modificación de estados
//Por eso lo único que hace esta acción es recibir el obj y despacharlo hacia el reducer (para reducirse/modificarse)
const save_title = createAction("save_title", (obj) => {
  return {
    payload: {
      text: obj.title,
    },
  };
});

const saveMangasNews = createAction("saveMangasNews", (obj) => {
  return {
    payload: {
      mangas_news: obj.mangas_news,
    },
  };
});

//en esta accion obj es el manga a guardar en el store
const save_manga = createAction("save_manga", (obj) => {
  return {
    payload: {
      manga: obj.manga,
    },
  };
});

const save_checks = createAction("save_checks", (checks) => {
  return {
    payload: {
      checks,
    },
  };
});

const manga_actions = { save_title, save_manga, saveMangasNews, save_checks };

export default manga_actions;
