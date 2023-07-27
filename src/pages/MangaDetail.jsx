import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios"
import apiUrl from "../apiUrl"
import headers from "../utils/headers"
import CardMangaChapter from "../components/CardMangaChapter"

export default function MangaDetail() {
    let { manga_id, page } = useParams()
    let [ manga, setManga ] = useState("")
    let [ chapters, setChapters ] = useState([])
    let [ prev, setPrev ] = useState(null)
    let [ next, setNext ] = useState(null)
    let [ openTab, setOpenTab ] = useState(1)
    // console.log("manga_id", manga_id)

    useEffect(
        () => {
            // axios necesita la ruta del backend
            axios(apiUrl+'/mangas/'+manga_id, headers())
                .then( res => {
                    // datos dinamicos a renderizar
                    // console.log(res.data.response)
                    setManga(res.data.response)
                })
                .catch(
                    err => console.log(err)
                )
        },
        []
    )

    useEffect(
        () => {
            // axios necesita la ruta del backend
            axios(apiUrl+`/chapters?manga_id=${manga_id}`, headers())
                .then( res => {
                        console.log(res.data)
                        setChapters(res.data.response)
                        setPrev(res.data.prev_page)
                        setNext(res.data.next_page)
                })
                .catch(
                    err => console.log(err)
                )
        },
        []
    )

    return (
        <div className='flex flex-col gap-6 font-poppins pt-[77px] pb-[30px] bg-[#EBEBEB]'>

            <div id="div-title" className="flex flex-col items-center px-4 pt-2">
                <img className="rounded-xl h-[40vh] lg:h-[60vh] object-cover object-top"
                     src={manga.cover_photo}
                     alt="cover_photo"/>
                <h1 className={'text-[40px] font-normal ' + (openTab === 1 ? "block" : "hidden")}>{manga.title}</h1>
                <div className={"flex justify-between " + (openTab === 1 ? "block" : "hidden")}>
                    <span style={{color: manga.category_id?.color}} className="capitalize text-[12px] font-medium rounded-xl py-2 px-4">
                        {manga.category_id?.name}
                    </span>
                    <span className="font-poppins capitalize text-[20px] font-medium text-[#9D9D9D]">
                        {manga.author_id?.name}
                    </span>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                    <h1 className="text-[20px] font-normal pt-4">Chapters</h1>
                </div>
            </div>

            <div id="div-emojis" className={"flex justify-center gap-2 " + (openTab === 1 ? "block" : "hidden")}>
                <img src="/assets/like.png" alt="emoji like"/>
                <img src="/assets/unlike.png" alt="emoji unlike"/>
                <img src="/assets/surprise.png" alt="emoji surprise"/>
                <img src="/assets/eyes_love.png" alt="emoji love"/>
            </div>

            <div id="div-score" className={"flex justify-center " + (openTab === 1 ? "block" : "hidden")}>
                <div className="w-min flex justify-center divide-x divide-[#9D9D9D] rounded-xl bg-white shadow-[0px_0px_7px_2px_rgba(0,0,0,0.15)]">
                    <div className="text-center py-2 px-8">
                        <h1 className="text-[24px]">4.5</h1>
                        <h3 className="text-[12px] text-[#9D9D9D]">Rating</h3>
                    </div>
                    <div className="text-center py-2 px-8">
                        <h1 className="text-[24px]">265</h1>
                        <h3 className="text-[12px] text-[#9D9D9D]">Chapters</h3>
                    </div>
                    <div className="text-center py-2 px-8">
                        <h1 className="text-[24px]">Eng</h1>
                        <h3 className="text-[12px] text-[#9D9D9D]">Languaje</h3>
                    </div>
                </div>
            </div>

            <div id="tabs" className="px-4">
                <div id="t_names" className="flex flex-wrap mb-6 list-none border rounded-full shadow-[0px_0px_7px_2px_rgba(0,0,0,0.15)]">
                    <a  className={'w-1/2 rounded-full py-2 flex justify-center items-center '+
                                    (openTab === 1
                                        ? "text-white bg-indigo-700"
                                        : "text-[#9D9D9D] bg-transparent")}
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                        }} href="#link1">
                        Manga
                    </a>
                    <a  className={"w-1/2 rounded-full py-2 flex justify-center items-center "+
                                    (openTab === 2
                                        ? "text-white bg-indigo-700"
                                        : "text-[#9D9D9D] bg-transparent")}
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                        }} href="#link2">
                        Chapters
                    </a>
                </div>

                <div id="t_containers" className="relative flex flex-col break-words w-full">
                    <div className="">

                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <p> {manga.description} </p>
                        </div>

                        <div className={"flex flex-col gap-10 pt-4 " + (openTab === 2 ? "block" : "hidden")} id="link2">
                            {chapters.map(each =>
                                <CardMangaChapter key={each.title} title={each.title} cover_photo={each.cover_photo} pages={each.pages.length} />
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
