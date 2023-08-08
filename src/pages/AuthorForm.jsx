import React from 'react'
import imgForm from "../assets/form_Ch.png"
// import { useNavigate } from "react-router-dom"
import { useRef } from "react"

export default function authorForm() {
    
    const authorForm = () => {
        let dataAuthor = {
            name: name.current.value,
            lastname: lastname.current.value,
            address: address.current.value,
            date: date.current.value,
            enlace: enlace.current.value

        }
    }

    const name = useRef()
    const last_name = useRef()
    const address = useRef()
    const date = useRef()
    const enlace = useRef()

    return (
        <>
            <main className=' flex w-full min-h-screen items-center justify-between overflow-x-hidden mb-6 font-roboto '>
                <div className='  flex flex-col  mt-[10%] md:mt-[14%] lg:mt-[10%] justify-center items-center  w-screen '>
                    <h1 className=' text-4xl text-center '> New Author</h1>
                    <div className='flex flex-col mt-8 gap-6'>
                        <input ref={name} className=" px-4 h-[50px] w-[300px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple  " type="text" name="name" id="name" placeholder="Name" required />
                        <input ref={last_name} className=" px-4  h-[50px] w-[300px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple " type="text" name="lastname" id="lastname" placeholder="Last Name" required />
                        <input ref={address} className=" px-4  h-[50px] w-[300px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple" type="text" name="address" id="address" placeholder="City, Country" required />
                        <input ref={date} className=" px-4  h-[50px] w-[300px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple" type="text" name="date" id="date" placeholder="Date" required />
                        <input ref={enlace} className=" px-4  h-[50px] w-[300px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple" type="text" name="enlace" id="enlace" placeholder="URL Profile Image" required />

                    </div>
                    <input className="mt-10 w-[200px] lg:w-[250px]   h-[55px] lg:h-[68px]    font-bolder text-2xl text-gray-100 rounded-full bg-purple" type="button" value="Send" onClick={authorForm} />

                </div>
            </main>
        </>
    )
}