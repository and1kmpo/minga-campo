
// import Welcome from "../components/Welcome"
import { Link as Anchor } from 'react-router-dom'
import React from "react";


export default function NotAllowed() {


    return (
         
        <div className='flex flex-col md:pt-[30%] w-full min-h-screen items-center justify-between'> 
        <h1 className="text-2xl">'BAD AUTH'</h1>
        <div>
      <h1>Access denied</h1>
      <p>We're sorry, but you don't have permission to access this page.</p>
    </div>
                     <Anchor to='/' className="flex justify-center items-center bg-primary w-[70%] md:w-[30%] lg:w-50 h-12 rounded-full text-xl text-gray-200 font-bold col-span-2 "> Go back home!</Anchor>
         </div>
    )

}