import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import CardManga from "../components/CardManga";
import Category from "../components/CategoryMangas";
import { useSelector, useDispatch } from "react-redux";
import manga_action from "../store/actions/mangas";
const { save_title, save_category } = manga_action;
import backgroundMangas from "../assets/backgroundMangas.png";

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

    useEffect(() => {
        async function fetchAllMangas() {
            const allMangas = [];
            let nextPage = 1;

            while (nextPage) {
                try {
                    const response = await axios(apiUrl + "/mangas?title=" + store.mangas.text + "&page=" + nextPage, headers());
                    const data = response.data;
                    allMangas.push(...data.response);
                    nextPage = data.next_page;
                } catch (err) {
                    console.error(err);
                    break;
                }
            }

            setMangas(allMangas);
            setTotalResults(allMangas.length);
            setTotalPages(Math.ceil(allMangas.length / itemsPerPage));
            setCurrentPage(1);
        }

        fetchAllMangas();
    }, [store.mangas.text, selectedCategories]);

    useEffect(() => {
        axios(apiUrl + "/categories", headers())
            .then((res) => {
                setCategory(res.data.response);
                console.log(res.data.response);
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
                const mangaCategories = manga.category_id._id; // Cambiar el nombre si es diferente en la respuesta de la API
                return selectedCategories.includes(mangaCategories);
            });
            setFilteredMangas(filtered);
        }
        setCurrentPage(1); // Reiniciamos la página actual cuando cambian los filtros
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

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen" >
                <input
                    type="text"
                    placeholder="Find your manga here"
                    className="mt-10 px-4 py-2 border border-gray-300 rounded-full bg-white shadow-md focus:outline-none mb-6"
                    onChange={(event) => dispatch(save_title({ title: event.target.value }))}
                    defaultValue={store.mangas.text}
                />
                <div className="w-full text-center">
                    {category.map((cat) => (
                        <label
                            key={cat._id}
                            className="m-4 p-2 rounded-full"
                            style={{ backgroundColor: cat.color, color: cat.hover }}
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

                <div className="h-full flex flex-col items-center justify-around">
                    {totalResults === 0 ? (
                        <p className="w-full text-center">No results found matching your search.</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2 md:gap-10">
                            {visibleMangas.map((each) => (
                                <CardManga
                                    key={each._id}
                                    title={each.title}
                                    category={each.category_id.name}
                                    imageSrc={each.cover_photo}
                                    color={each.category_id.color}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full text-center">
                    {currentPage > 1 && (
                        <input
                            type="button"
                            value={"previous page"}
                            onClick={handleLoadPrevious}
                            className="py-2 px-4 bg-primary text-white rounded-md shadow-md cursor-pointer mr-2"
                        />
                    )}
                    {currentPage < totalPages && (
                        <input
                            type="button"
                            value={"next page"}
                            onClick={handleLoadNext}
                            className="py-2 px-4 bg-primary text-white rounded-md shadow-md cursor-pointer mr-2"
                        />
                    )}
                </div>
            </div>
        </>
    );
}
