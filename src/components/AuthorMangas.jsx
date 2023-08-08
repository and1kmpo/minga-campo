import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import { useSelector } from "react-redux"; // hook para selecionar un estado global

export default function AuthorMangas() {
  const [newsMangasData, newMangasData] = useState([]);
  const [oldsMangasData, oldMangasData] = useState([]);

  const store = useSelector((store) => store);
  console.log("====================================");
  console.log("store:", store);
  console.log("====================================");
  useEffect(() => {
    axios
      .get(apiUrl + "/mangas/news", headers())
      .then((res) => {
        console.log("mangas news:", res.data.response);
        newMangasData(res.data.response.news);
        oldMangasData(res.data.response.old);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
        {newsMangasData.map((card) => (
          <div key={card} className="rounded-lg p-4">
            <img
              src={card.cover_photo}
              alt={`Imagen ${card.cover_photo}`}
              className="w-full h-40 object-fit mb-4 rounded-lg"
            />
            <p className="text-lg font-semibold">{card.title}</p>
          </div>
        ))}

        {oldsMangasData.map((card) => (
          <div key={card} className="rounded-lg p-4">
            <img
              src={card.cover_photo}
              alt={`Imagen ${card.cover_photo}`}
              className="w-full h-40 object-fit mb-4 rounded-lg"
            />
            <p className="text-lg font-semibold">{card.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
