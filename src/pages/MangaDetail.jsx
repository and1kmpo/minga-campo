import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios"
import apiUrl from "../apiUrl"
import headers from "../utils/headers"

export default function MangaDetail() {
    let { manga_id, page } = useParams() || 1
    let [ manga, setManga ] = useState("")

    useEffect(
        () => {
            // 
            axios(apiUrl+'/mangas/'+manga_id, headers())
                .then( res => {
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
        <div className='h-screen pt-[77px] flex flex-col font-poppins'>
            <div id="div-title" className="flex flex-col p-4">
                <img className="rounded-xl"
                     src={manga.cover_photo}
                     alt="cover_photo"/>
                <h1 className='text-[40px]'>{manga.title}</h1>
                <div className="flex justify-between">
                    <span
                        style={{color: manga.category_id?.color}}
                        className="text-[12px] rounded-xl py-2 px-4">
                        {manga.category_id?.name}
                    </span>
                    <span className="font-poppins text-[20px] text-[#9D9D9D]">
                        {manga.author_id?.name}
                    </span>
                </div>
            </div>
            <div id="div-emojis"></div>
            <div id="div-score"></div>
            <div id="tabs"></div>
        </div>
    )
}
