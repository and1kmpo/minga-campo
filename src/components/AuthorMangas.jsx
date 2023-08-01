import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";

export default function AuthorMangas() {
  const [newsMangasData, cardsMangasData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl + "/mangas/news", headers())
      .then((res) => {
        console.log('mangas news:',res.data.response);
       cardsMangasData(res);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {newsMangasData.map((card) => (
          <div key={card} className="bg-white shadow rounded-lg p-4">
            <img
              src={card.imageUrl}
              alt={`Imagen ${card}`}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <p className="text-lg font-semibold">{card}</p>
          </div>
        ))}
      </div>
    </>
  );
}
