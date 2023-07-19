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

const manga_actions = { save_title };

export default manga_actions;
