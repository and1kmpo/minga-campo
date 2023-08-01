import { useSelector } from "react-redux"
import React, { memo } from "react";
import Loading_animation from "./Loading_animation";

function Nav_2() {
  const store = useSelector((store) => store)
  console.log(store.chapter)
  const { title, order } = store.chapter;


  if (!title || order === null) {
    return <div><Loading_animation /> </div>;
  }
  return (
    <>
      <div className=" flex w-full justify-between items-center bg-purple mb-2  ">
        <svg className=" flex mt-[3%] self-start  " width="60" height="60" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 16H37" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M11 27H37" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M11 39H37" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className=" flex  w-[75%] md:w-[55%] self-center text-gray-200 font-bold items-center   sm:text-lg md:text-xl ">
          <h4 className=" flex  mr-4 md:mr-8 ">
            CAP # {store.chapter.order}
          </h4>
          <h3 className=" flex "> {store.chapter.title.toUpperCase()}</h3>
        </div>
      </div>

      {/* <div className=" flex w-full justify-between h-[10%] md:h-[12%] bg-purple    ">                    
         <div className=" flex  w-[65%] justify-start  mr-[16%]  md:mr-[6%]   text-xs sm:text-lg md:text-xl pt-6">
                 <h4 className=" flex mr-2 md:mr-6 ">
                 {store.chapter.order}
                 </h4>
                 <h3 className=" flex">  {store.chapter.title}</h3>
             </div> */}
      {/* </div> */}

    </>

  )

}

export default memo(Nav_2)

