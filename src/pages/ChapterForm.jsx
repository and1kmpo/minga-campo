import React from 'react'
import imgForm from "../assets/form_Ch.png"
// import { useNavigate } from "react-router-dom"
import { useRef } from "react"

export default function chapterForm() {

    const chapterForm = () => {
        let dataForm = {
            titleForm: titleForm.current.value,
            order: order.current.value,
            pages: pages.current.value

        }
        console.log(dataForm)


        console.log(titleForm.current.value)
        console.log(order.current.value)
        console.log(pages.current.value)

    }

    const titleForm = useRef()
    const order = useRef()
    const pages = useRef()

    return (
        <>
            <main className=' flex w-full min-h-screen items-center justify-between overflow-x-hidden mb-6 font-roboto '>
                <img className=" h-screen w-[50%] object-cover hidden md:block " src={imgForm} alt="chapterForm" />
                <div className='  flex flex-col  mt-[10%] md:mt-[20%] lg:mt-[15%] justify-center items-center  w-screen lg:w-[50%] lg:left-[50%] '>
                    <h1 className=' text-4xl text-center '> New Chapter</h1>
                    <div className='flex flex-col w-72 mt-8 gap-6'>
                        <input ref={titleForm} className=" px-4 h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple  " type="text" name="titleForm" id="titleForm" placeholder="Insert title" required />
                        <input ref={order} className=" px-4  h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple " type="text" name="order" id="order" placeholder="Insert order" required />
                        <input ref={pages} className=" px-4  h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple" type="text" name="pages" id="pages" placeholder="Insert pages" required />
                    </div>
                    <input className="mt-10 w-[250px] lg:w-[280px]   h-[55px] lg:h-[68px]    font-bolder text-2xl text-gray-100 rounded-full bg-purple" type="button" value="Send" onClick={chapterForm} />
                </div>
            </main>
        </>
    )
}
