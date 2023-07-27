import { useEffect, useState } from "react"
import axios from "axios"
import apiUrl from "../apiUrl"
import headers from "../utils/headers"
import CardManga from "../components/CardManga"
import { useSelector, useDispatch } from "react-redux"
import manga_action from "../store/actions/mangas"
const { save_title, save_category } = manga_action

export default function Mangas() {
    const store = useSelector(store => store)
    const dispatch = useDispatch()
    console.log(store)
    const [title, setTitle] = useState("")//Title debe ser una variable globlal para que cuando el componente se desmonte no se pierda el filtro por title
    const [category, setCategory] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [mangas, setMangas] = useState([])
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)
    const [notFound, setNotFound] = useState(false)
    useEffect(
        () => {
            axios(apiUrl + "/mangas?title=" + store.mangas.text, headers()).then(res => {
                setMangas(res.data.response)
                setPrev(res.data.prev_page)
                setNext(res.data.next_page)
                setNotFound(false)
            }).catch((err) => {
                if (err.response.status === 404) {
                    setMangas([])
                    setNotFound(true)
                } else {
                    console.error(err)
                }
            });
        }, [store.mangas.text]);

    useEffect(
        () => {
            axios(apiUrl + "/categories", headers()).then(res => {
                setCategory(res.data.response)
            }).catch((err) => {
                if (err.response.status === 404) {
                    setMangas([])
                    setNotFound(true)
                } else {
                    console.error(err)
                }
            });
        }, []);

    const handleCategoryChange = (event) => {
        const categoryId = event.target.name;
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(categoryId)) {
                return prevSelected.filter((id) => id !== categoryId);
            } else {
                return [...prevSelected, categoryId];
            }
        });
    };
    return (
        <>

            <input
                type="text"
                placeholder="Search..."
                className="mt-[100px] ml-[100px]"
                onChange={(event) => dispatch(save_title({ title: event.target.value }))}
                defaultValue={(store.mangas.text)} />

            <div className="w-100 text-center">
                {category.map((cat) => (
                    <label key={cat._id} className="m-4">
                        <input type="checkbox" name={cat._id} id="" /> {cat.name}
                    </label>
                ))}
            </div>

            <div className="flex items-center justify-center min-h-[400px]">
                {notFound ? (<p className="w-100 text-center">No results found matching your search.</p>) : (mangas.map(each => <CardManga key={each._id} title={each.title} />))}

            </div>
            <div className="w-100 text-center">
                {prev && <input type="button" value={"previus page"} />}
                {next && <input type="button" value={"next page"} />}
            </div>
        </>
    )
}
