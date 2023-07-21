import { useEffect, useState } from "react"
import axios from "axios"
import apiUrl from "../apiUrl"
import headers from "../utils/headers"
import CardManga from "../components/CardManga"
import { useSelector, useDispatch } from "react-redux"
import manga_action from "../store/actions/mangas"
const { save_title } = manga_action

export default function Mangas() {
    const store = useSelector(store => store)
    const dispatch = useDispatch()
    console.log(store)
    const [title, setTitle] = useState("")//Title debe ser una variable globlal para que cuando el componente se desmonte no se pierda el filtro por title
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

    return (
        <>
            {/* <input type="text" placeholder="Search..." className="mt-[100px] ml-[100px]" onChange={(event) => setTitle(event.target.value)} /> Así se hace con estados locales*/}
            <input
                type="text"
                placeholder="Search..."
                className="mt-[100px] ml-[100px]"
                onChange={(event) => dispatch(save_title({ title: event.target.value }))}
                defaultValue={(store.mangas.text)} />

            <div className="flex items-center justify-center min-h-[400px]">
                {notFound ? (<p className="w-100 text-center">No hay resultados que coincidan con la búsqueda</p>) : (mangas.map(each => <CardManga key={each._id} title={each.title} />))}

            </div>
            <div>
                {prev && <input type="button" value={"previus page"} />}
                {next && <input type="button" value={"next page"} />}
            </div>
        </>
    )
}
