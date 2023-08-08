import React, { useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import { useDispatch, useSelector } from "react-redux"; // hook para selecionar un estado global
import mangasActions from "../store/actions/mangas";
import ButtonManage from "./ButtonManage";

const { saveMangasNews } = mangasActions;

export default function AuthorMangas() {
  // store
  const store = useSelector((store) => store);

  // dispatch
  const dispatch = useDispatch();

  // variables globales del store
  const logoMangas = store.mangas.logo;
  const allMangasData = store.mangas.all;
  const newMangas = store.mangas.new;
  const oldMangas = store.mangas.old;

  useEffect(() => {
    axios
      .get(apiUrl + "/mangas/news", headers())
      .then((res) => {
        if (res.data.response.logo) {
          dispatch(
            saveMangasNews({
              mangas_news: {
                logo: res.data.response.logo,
              },
            })
          );
        } else if (res.data.response.all) {
          dispatch(
            saveMangasNews({
              mangas_news: {
                all: res.data.response.all,
              },
            })
          );
        } else {
          dispatch(
            saveMangasNews({
              mangas_news: {
                new: res.data.response.news,
                old: res.data.response.old,
              },
            })
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);

  return (
    <>
      {allMangasData?.length !== 0 ? (
        <div className="flex flex-col p-8 items-center justify-center">
          <div className="grid max-[300px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-7 w-full md:grid-cols-4 justify-center">
            {allMangasData?.map((card) => (
              <div key={card} className="rounded-lg p-4">
                <img
                  src={card.cover_photo}
                  alt={`Imagen ${card.cover_photo}`}
                  className="w-full h-40 object-fit cursor-pointer hover:shadow-2xl mb-4 rounded-2xl transition hover:scale-105"
                />
                <p className="text-[16px] mt-3 font-normal font-roboto">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {newMangas?.length !== 0 && oldMangas?.length !== 0 ? (
        <div className="flex flex-col p-8 items-center justify-center">
          <div className="grid max-[300px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-7 w-full md:grid-cols-4 justify-center">
            {newMangas?.map((card) => (
              <div key={card} className="rounded-lg p-4">
                <img
                  src={card.cover_photo}
                  alt={`Imagen ${card.cover_photo}`}
                  className="w-full h-40 object-fit cursor-pointer hover:shadow-2xl mb-4 rounded-2xl transition hover:scale-105"
                />
                <p className="text-[16px] mt-3 font-normal font-roboto">
                  {card.title}
                </p>
              </div>
            ))}
            {oldMangas?.map((card) => (
              <div key={card} className="rounded-lg p-4">
                <img
                  src={card.cover_photo}
                  alt={`Imagen ${card.cover_photo}`}
                  className="w-full h-40 object-fit cursor-pointer hover:shadow-2xl mb-4 rounded-2xl transition hover:scale-105"
                />
                <p className="text-[16px] mt-3 font-normal font-roboto">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {logoMangas ? (
        <div className="flex justify-center">
          <div className="w-20 mb-10 ">
            <img
              src={logoMangas}
              alt="logo minga"
              className="flex justify-center rounded-full object-fit items-center"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <ButtonManage></ButtonManage>
    </>
  );
}
