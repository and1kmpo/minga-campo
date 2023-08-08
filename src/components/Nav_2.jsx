import { useSelector } from "react-redux"
import React, { memo } from "react";
import Loading_animation from "./Loading_animation";

function Nav_2() {
  const store = useSelector((store) => store)
  const { title, order } = store.chapter;

  if (!title || order === null) {
    return <div><Loading_animation /> </div>;
  }
  return (

    <div className=" flex  justify-center items-center w-full bg-purple  mb-10  h-[14%]  lg:h-[12%] text-gray-200 font-bold items-center   text-sm  md:text-xl px-14 md:pt-10 ">
      <h4 className=" flex  mr-6 ">
        CAP # {store.chapter.order}
      </h4>
      <h3 className=" flex "> {store.chapter.title.toUpperCase()}</h3>
    </div>
  )
}
export default memo(Nav_2)

