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
        console.log(dataAuthor)


        console.log(name.current.value)
        console.log(lastname.current.value)
        console.log(address.current.value)
        console.log(date.current.value)
        console.log(enlace.current.value)

    }

    const name = useRef()
    const lastname = useRef()
    const address = useRef()
    const date = useRef()
    const enlace = useRef()

    return (
        <>
            <main className=' flex w-full min-h-screen items-center justify-between overflow-x-hidden mb-6 font-roboto '>
                <div className='  flex flex-col  mt-[10%] md:mt-[20%] lg:mt-[15%] justify-center items-center  w-screen lg:w-[50%] lg:left-[50%] '>
                    <h1 className=' text-4xl text-center '> New Author</h1>
                    <div className='flex flex-col mt-8 gap-6'>

                        <input ref={name} className=" px-4 h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple  " type="text" name="name" id="name" placeholder="Name" required />
                        <input ref={lastname} className=" px-4  h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple " type="text" name="lastname" id="lastname" placeholder="Last Name" required />
                        <input ref={address} className=" px-4  h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple" type="text" name="address" id="address" placeholder="City" required />
                        <input ref={date} className=" px-4  h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple" type="text" name="date" id="date" placeholder="Date" required />
                        <input ref={enlace} className=" px-4  h-[50px] border-b hover:rounded-lg hover:border-rounded  hover:border-purple" type="text" name="enlace" id="enlace" placeholder="URL Profile Image" required />

                    </div>
                    <input className="mt-10 w-[250px] lg:w-[280px]   h-[55px] lg:h-[68px]    font-bolder text-2xl text-gray-100 rounded-full bg-purple" type="button" value="Send" onClick={authorForm} />

                </div>
            </main>
        </>
    )
}