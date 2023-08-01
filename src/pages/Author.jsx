// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import AuthorMangas from "../components/AuthorMangas";
import { RiEditBoxLine } from "react-icons/ri";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import SwitchMangas from "../components/SwitchMangas";

export default function Author() {
  const [profileData, setprofileData] = useState([]);
  const [viewMangaData, viewMangasData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl + "/authors/me", headers())
      .then((res) => {
        console.log(res.data.response.profile);
        setprofileData(res.data.response.profile);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(apiUrl + "/mangas/news", headers())
      .then((res) => {
        viewMangasData(res);
        console.log("default:", res.data.response.logo);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);

  return (
    <>
      <div className="w-full flex justify-start align-center flex-col pt-20 pb-40 h-screen bg-[#EBEBEB]">
        <div className="flex justify-center me-auto mx-auto">
          <img
            src={profileData.photo}
            alt={profileData.name}
            className="rounded-[50%] w-16 h-16 me-5"
          />
          <div className="mx-auto d-flex mb-4">
            <h4 className="text-lg font-medium capitalize">
              {profileData.name} {profileData.last_name}
            </h4>
            <h5 className="text-xs text-gray-600 capitalize">
              {profileData.city}, {profileData.country}
            </h5>
            <h5 className="text-xs text-gray-600 capitalize">16/02/2000</h5>
          </div>
          <RiEditBoxLine className="mt-7 mx-2" />
        </div>
        <hr className="m-1 w-3/5 border mx-auto border-black bg-black" />
        <SwitchMangas></SwitchMangas>
        <AuthorMangas />
      </div>
    </>
  );
}
