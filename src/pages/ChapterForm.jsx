import imgForm from "../assets/form_Ch.png"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";
import headers from "../utils/headers"
import rol from "../utils/rol"

export default function ChapterForm() {
    const { manga_id } = useParams()
    const titleForm = useRef()
    const order = useRef()
    const pages = useRef()
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    if (rol() === 0 || null) {
        window.location.replace('/NotAllowed')
    }
    const captureData = () => {
        let dataForm = {
            title: titleForm.current.value,
            order: order.current.value?.trim(),
            pages: pages.current.value.split(','),
            manga_id
        }
      
        axios.post(apiUrl + '/chapters', dataForm, headers)
            .then((res) => Swal.fire({
                icon: 'success',
                text: 'chapter added!',
                confirmButtonColor: "purple"
    
            }))
            .then(() => navigate('/'))
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    html: err.response.data?.messages?.map(each => `<p>${each}</p>`).join('')
                })
            })
    }
    return (
        <>
            <main className=' flex w-full h-screen items-center justify-between overflow-x-hidden mb-6  '>
                <img className=" h-screen w-[50%] object-cover hidden md:block " src={imgForm} alt="chapterForm" />
                <div className='  flex flex-col   mt-[10%]  lg:mt-[5%] justify-center items-center  w-screen lg:w-[50%] lg:left-[50%] '>
                    <h1 className=' text-3xl text-center font-semibold'> New Chapter</h1>
                    <div className='flex flex-col mt-8 gap-4'>
                        <input ref={titleForm} className=" px-4 h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple  " type="text" name="titleForm" id="titleForm" placeholder="Title" required />
                        <input ref={order} className=" px-4  h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple " type="number" name="order" id="order" placeholder="Order" required />
                        <input ref={pages} className=" px-4  h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple" type="text" name="pages" id="pages" placeholder="Pages" required />
                    </div>
                    <input className="mt-10 w-[250px] lg:w-[280px]   h-[55px] lg:h-[68px]    font-bolder text-2xl text-gray-100 rounded-full bg-purple" type="button" value="Send" onClick={captureData} />
                </div>
            </main>
        </>
    )
}
