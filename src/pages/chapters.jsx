// import imgChapter from "../assets/Chapters_3.png";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ArrowChapter from "../components/ArrowChapters";
// import Comments_ch from "../components/Comments_ch";
import axios from "axios";
import apiUrl from "../apiUrl";
import rol from "../utils/rol"
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../store/actions/chapters";


export default function chapters() {
    const d_left = "M9 9l-6 6m0 0l6 6m-6-6h18";
    const d_right = "M15 15l6-6m0 0l-6-6m6 6h-18";
    let { id, page } = useParams()
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let [pages, setPages] = useState([]);
    let [currentPage, setCurrentPage] = useState(0)
    let [nextPage, setNextPage] = useState("")
    let dispatch = useDispatch()
    const { save_data } = chapterActions
    const store= useSelector(store => store)
// console.log(store.chapter)

    if (rol() === 0 || null) {
        window.location.replace('/')
    }

    useEffect(
        () => {
            axios(apiUrl + `/chapters/${id}`, headers)
                .then(res => {
                    // console.log(res)
                    setPages(res.data.response.pages)
                    setNextPage(res.data.next)
                    dispatch(save_data(
                        {
                            title: res.data.response.title,
                            order: res.data.response.order
                        }
                    ))


                })
                .catch(err => console.log(err))
        },
        [nextPage]
    )
    const next = () => {
        if (currentPage !== pages.length - 1) {
            setCurrentPage(currentPage + 1)
        } else {
            console.log(nextPage)
            setCurrentPage(0)
            navigate("/chapter/" + nextPage + "/1")
        }
        console.log(currentPage)
    }

    const prev = () => (currentPage !== 0) ? setCurrentPage(currentPage - 1) : setCurrentPage(pages.length - 1)



    return (
        <>
            {/* < Comments_ch /> */}

            <div className=" h-screen flex flex-col mb-10 w-100% ">
                <div className=" flex w-full justify-center h-[10%] md:h-[12%] bg-purple    ">                    
                    <div className=" flex  w-[65%] justify-center    text-xs sm:text-lg md:text-xl pt-6">
                            <h4 className=" flex mr-2 md:mr-6 ">
                            {store.chapter.order}
                            </h4>
                            <h3 className=" flex">  {store.chapter.title}</h3>
                        </div>
                </div>
                < div className="flex  w-full md:w-[100%] h-screen bg-center bg-cover mb-4 md:mb-10 md:mt-10  " style={{ backgroundImage: `url(${pages[currentPage]})` }}>
                    <div className=' flex  hover:bg-[#0000001a] w-[48%] h-[84%] md:h-[100%] mt-12 md:mt-0 justify-start items-center ' onClick={prev}>
                        <ArrowChapter d={d_left} />
                    </div>
                    <div className="flex  items-end w-[80%] justify-center -mb-4 md:-mb-8  ">
                        <p className="text-black md:text-xl"> <span className="text-5xl md:text-6xl ">...</span> comments</p>
                        <div className="flex justify-center items-center  h-8 w-8 border-2 font-semibold border-slate-400 mr-4 ml-4  rounded"><h3>2</h3></div>

                    </div>
                    <div className=' flex  hover:bg-[#0000001a] w-[48%] h-[84%] md:h-[100%] mt-12 md:mt-0 justify-end items-center  ' onClick={next}>
                        <ArrowChapter d={d_right} />
                    </div>
                </div>

            </div>

        </>
    )
}
