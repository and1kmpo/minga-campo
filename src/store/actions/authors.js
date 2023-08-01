import { createAction } from "@reduxjs/toolkit";

let saveProfile = createAction("saveData", (obj) => {
  return {
    payload: {
      profile: obj.profile,
    },
  };
});

const authorsActions = {
  saveProfile,
};

export default authorsActions;
