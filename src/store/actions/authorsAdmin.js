import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
import headers from "../../utils/headers";

export const getAuthors = createAsyncThunk("getAuthors", async () => {
  try {
    const res = await axios(apiUrl + "/authors/admin", headers());

    /*     console.log("API response:", res.data);
     */
    if (res.data && res.data.response) {
      const allAuthors = [
        ...res.data.response.all_inactive,
        ...res.data.response.all_active,
      ];
      return allAuthors;
    } else {
      /* console.error("API response does not contain expected data:", res.data); */
      return [];
    }
  } catch (error) {
    console.error("Error fetching authors:", error);
    return [];
  }
});

export const update_authors = createAsyncThunk(
  "update_authors",
  async (obj) => {
    try {
      console.log("ID recibido en update_authors:", obj.id);
      let res = await axios.put(
        apiUrl + `/auth/role/author/${obj.id}`,
        null,
        headers()
      );
      console.log(res.data.response);
      console.log(obj);
      return {
        id: obj.id,
        data: res,
        change: obj.change, //change va a ser desde donde esta para saber hacia donde lo tengo que mover en el reductor
        //ej: change= active_true entonces lo tengo que pasar a active_false
      };
    } catch (error) {
      console.error("Error en update_authors:", error);
      return {
        id: "",
        data: {},
        change: false,
      };
    }
  }
);

export const saveProfile = createAction("saveProfile", (profile) => {
  return {
    payload: {
      profile: profile,
    },
  };
});
