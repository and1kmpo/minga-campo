import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios"
import apiUrl from "../apiUrl"
import headers from "../utils/headers"

export default function MangaDetail() {
    let { manga_id, page } = useParams()
    let [ manga, setManga ] = useState("")
    let [ openTab, setOpenTab ] = useState(1)
    console.log("manga_id", manga_id)
    console.log("page", page)

    useEffect(
        () => {
            // axios necesita la ruta del backend
            axios(apiUrl+'/mangas/'+manga_id, headers())
                .then( res => {
                    // datos dinamicos a renderizar
                    console.log(res.data.response)
                    setManga(res.data.response)
                })
                .catch(
                    err => console.log(err)
                )
        },
        []
    )

    return (
        <div className='flex flex-col gap-6 font-poppins pt-[77px] pb-[30px] bg-[#EBEBEB]'>

            <div id="div-title" className="flex flex-col px-4">
                <img className="rounded-xl h-[40vh] object-cover object-top"
                     src={manga.cover_photo}
                     alt="cover_photo"/>
                <h1 className='text-[40px]'>{manga.title}</h1>
                <div className="flex justify-between">
                    <span style={{color: manga.category_id?.color}} className="capitalize text-[12px] rounded-xl py-2 px-4">
                        {manga.category_id?.name}
                    </span>
                    <span className="font-poppins capitalize text-[20px] text-[#9D9D9D]">
                        {manga.author_id?.name}
                    </span>
                </div>
            </div>

            <div id="div-emojis" className="flex justify-center mt-2 gap-2">
                <img src="/assets/like.png" alt="emoji like"/>
                <img src="/assets/unlike.png" alt="emoji unlike"/>
                <img src="/assets/surprise.png" alt="emoji surprise"/>
                <img src="/assets/eyes_love.png" alt="emoji love"/>
            </div>

            <div id="div-score" className="flex justify-center">
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
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse molestie est nec gravida dictum. Nunc dictum
                                lectus quam, non maximus urna ornare sit amet. Aliquam id
                                sapien in massa commodo volutpat vel vitae quam.Nunc dictum
                                lectus quam, non maximus urna ornare sit amet. Aliquam id
                                sapien in massa commodo volutpatc tum lectus quam, non ma.
                            </p>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <p> C Chapters
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
