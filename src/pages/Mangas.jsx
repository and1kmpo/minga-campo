import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import CardManga from "../components/CardManga";
import { useSelector, useDispatch } from "react-redux";
import imageBackgroundManga from "../assets/backgroundMangas.png";

export default function Mangas() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [filteredMangas, setFilteredMangas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAllMangas() {
      setLoading(true);
      try {
        const allMangas = [];
        let nextPage = 1;
        while (nextPage) {
          const response = await axios(
            apiUrl + "/mangas?title=" + store.mangas.text + "&page=" + nextPage,
            headers()
          );
          const data = response.data;
          allMangas.push(...data.response);
          nextPage = data.next_page;
        }
        setMangas(allMangas);
        setTotalResults(allMangas.length);
        setTotalPages(Math.ceil(allMangas.length / itemsPerPage));
        setCurrentPage(1);
      } catch (err) {
        console.error(err);
        setMangas([]);
        setNotFound(true);
      }
      setLoading(false);
    }

    fetchAllMangas();
  }, [store.mangas.text, selectedCategories]);

  useEffect(() => {
    axios(apiUrl + "/categories", headers())
      .then((res) => {
        setCategory(res.data.response);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setMangas([]);
          setNotFound(true);
        } else {
          console.error(err);
        }
      });
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredMangas(mangas);
    } else {
      const filtered = mangas.filter((manga) => {
        const mangaCategories = manga.category_id._id;
        return selectedCategories.includes(mangaCategories);
      });
      setFilteredMangas(filtered);
    }
    setCurrentPage(1);
  }, [selectedCategories, mangas]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(categoryId)) {
        return prevCategories.filter((id) => id !== categoryId);
      } else {
        return [...prevCategories, categoryId];
      }
    });
  };

  const handleLoadPrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleLoadNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleMangas = filteredMangas.slice(startIndex, endIndex);

  function getColorForCategory(categoryName) {
    const categoryMatch = category.find((cat) => cat.name === categoryName);
    return categoryMatch ? categoryMatch.color : "#000000"; // Valor predeterminado si no se encuentra el color
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen mb-4 font-poppins">
        <div
          className="flex flex-col items-center justify-center w-full h-[369px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${imageBackgroundManga})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 md:hidden"></div>
          <p className="relative w-[162px] text-center text-white font-bold text-[40px] leading-[38.07px] font-roboto m-10">
            Mangas
          </p>
          <div className="relative w-[90%] lg:w-[60%]">
            <label
              htmlFor="search-input"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="Find your manga here"
              className="mx-auto block font-poppins font-normal text-[24px] leading-[22.84px] p-[10px] text-center w-full rounded-[80px] lg:rounded-[10px] border-2 hover:border-primary shadow-md focus:outline-none"
              onChange={(event) =>
                dispatch(save_title({ title: event.target.value }))
              }
              defaultValue={store.mangas.text}
            />
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#EBEBEB] -top-[70px] relative rounded-t-[80px] w-full lg:w-[90%] lg:rounded-2xl">
          <div className="flex justify-evenly md:justify-evenly lg:justify-start w-[85%] text-center mt-14">
            {category.map((cat) => (
              <label
                key={cat._id}
                className="p-3 rounded-full cursor-pointer lg:mr-2 lg:ml-2 capitalize"
                style={{
                  backgroundColor: selectedCategories.includes(cat._id)
                    ? cat.color
                    : cat.hover,
                  color: selectedCategories.includes(cat._id)
                    ? cat.hover
                    : cat.color,
                }}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  name={cat._id}
                  checked={selectedCategories.includes(cat._id)}
                  onChange={() => handleCategoryChange(cat._id)}
                  style={{ backgroundColor: cat.color }}
                />{" "}
                {cat.name}
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:grid-rows-2 md:gap-5">
            {visibleMangas.map((each) => {
              return (
                <CardManga
                  key={each._id}
                  title={each.title}
                  category={each.category_id.name}
                  imageSrc={each.cover_photo}
                  color={getColorForCategory(each.category_id.name)}
                />
              );
            })}
          </div>

          <div className="w-full text-center mt-6  mb-6">
            {currentPage > 1 && (
              <input
                type="button"
                value={"prev"}
                onClick={handleLoadPrevious}
                className="py-2 px-4 bg-gradient-to-r from-[#4338CA] to-[#5E52F3] hover:bg-blue-600 text-white font-bold rounded-full shadow-md cursor-pointer mr-2"
              />
            )}
            {currentPage < totalPages &&
              visibleMangas.length === itemsPerPage && (
                <input
                  type="button"
                  value={"next"}
                  onClick={handleLoadNext}
                  className="py-2 px-4 bg-gradient-to-r from-[#4338CA] to-[#5E52F3] hover:bg-blue-600 text-white font-bold rounded-full shadow-md cursor-pointer mr-2"
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
}
