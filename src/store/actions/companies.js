import { createAction } from "@reduxjs/toolkit";

let saveCompanyProfile = createAction("saveCompanyProfile", (obj) => {
  return {
    payload: {
      companyProfile: obj.companyProfile,
    },
  };
});

const companiesActions = {
  saveCompanyProfile,
};

export default companiesActions;
