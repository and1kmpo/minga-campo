// import imgChapter from "../assets/Chapters_3.png";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ArrowChapter from "../components/ArrowChapters";
// import Comments_ch from "../components/Comments_ch";
import Nav_2 from "../components/Nav_2"
import axios from "axios";
import apiUrl from "../apiUrl";
import rol from "../utils/rol"
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import chapter_actions from "../store/actions/chapters";
import icon_comment from "../assets/icon_comment.png"




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
    let [prevPage, setPrevPage] = useState("");
    let dispatch = useDispatch()
    const { save_data } = chapter_actions
    const store = useSelector(store => store)
    const userRole = rol();
    let [manga, setManga] = useState("");
        // console.log(store.chapter)

    if (rol() === 0 || rol() === null) {
        window.location.replace('/NotAllowed')
    }


    useEffect(() => {
        if (userRole === 0 || userRole === null) {
            navigate('/NotAllowed')
        } else {
            axios(apiUrl + `/chapters/${id}`, headers)
                .then(res => {
                    // console.log(res)
                    setPages(res.data.response.pages)
                    setNextPage(res.data.next)
                    setPrevPage(res.data.prev);
                    setManga(res.data.response.manga_id)
                    dispatch(save_data(
                        {
                            title: res.data.response.title,
                            order: res.data.response.order,
                            id: res.data.response._id
                        })
                    )
                })
                .catch(err => console.log(err))
        }
    }, [nextPage, prevPage, id]

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

    const prev = () => {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1);
        } else {
            navigate("/manga/" + manga + "/1")
        }
        console.log(currentPage)
    };

    useEffect(() => {

    }, [nextPage, prevPage, currentPage]);
    return (
        <>
            {/* < Comments_ch /> */}



            <div className="flex flex-col justify-between items-center h-screen bg-gray-100">
                <Nav_2 />
                < div className="relative flex justify-center items-center  w-full   h-screen   mb-10    bg-contain bg-center bg-no-repeat " style={{ backgroundImage: `url(${pages[currentPage]})` }}>
                    <div className="flex  justify-between w-full  md:w-[90%] lg:w-[70%] xl:w-[52%] md:px-20 h-[90%] absolute ">
                        <div className=' justify-start items-center  flex  xl:hover:bg-[#0000000a] w-[48%]  h-auto lg:mr-12 mr-8  md:mt-0   ' onClick={prev}>
                            <ArrowChapter d={d_left} />
                        </div>
                        <div className=' flex justify-end items-center xl:hover:bg-[#0000000a]  w-[48%]   h-auto  md:mt-0   ' onClick={next}>
                            <ArrowChapter d={d_right} />
                        </div>
                    </div>
                    <div className="  flex self-end  w-[80%] justify-center items-center -mb-9 md:-mb-10  ">
                        <img className="md:h-9 md:w-10 mt-12 md:mt-8 " src={icon_comment} alt="comments" />
                        <div className="flex justify-center items-center  h-8 w-8 border-2 font-semibold border-slate-400 mr-4 ml-4 mt-12 md:mt-7 rounded"><h3>2</h3></div>

                    </div>
                </div>
            </div>

        </>
    )
}
