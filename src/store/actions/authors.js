import { createAction } from "@reduxjs/toolkit";

let saveProfile = createAction("saveProfile", (obj) => {
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
