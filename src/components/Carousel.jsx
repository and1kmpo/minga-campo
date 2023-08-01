import { useEffect, useState } from "react";
import axios from "axios";
import Arrow from "./Arrow";
import apiUrl from "../apiUrl";

export default function Carousel() {
  const d_left =
    "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  const d_right =
    "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  //let counter = 0;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios(apiUrl + "/categories")
      .then((res) => {
        setCategories(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  const [counter, modify] = useState(0);
  const next = () =>
    counter !== categories.length - 1 ? modify(counter + 1) : modify(0);
  const prev = () =>
    counter !== 0 ? modify(counter - 1) : modify(categories.length - 1);

  return (
    <div className="flex justify-between  hidden md:block mb-10  ">
      <div
        className="h-[265px]  rounded-md flex items-center relative ml-10 mr-10 mt-10"
        style={{ backgroundColor: categories[counter]?.color }}
      >
        <div className="ml-0 md_ml-4 ">
          <Arrow d={d_left} onClick={prev} />
        </div>
        <img
          className=" ml-[8%] h-[100%] w-[15%] absolute"
          src={categories[counter]?.character_photo}
          alt="imagen1"
        ></img>
        <img
          className=" ml-[28%] lg:ml-[30%] -mt-[40px] h-[284px] w-[189px] absolute"
          src={categories[counter]?.cover_photo}
          alt="imagen2"
        ></img>

        <div className="flex flex-col item-start justify-center w-[40%] lg:w-[45%] h-auto  text-gray-100 absolute ml-[49%]">
          <h3 className="font-Roboto font-bold text-2xl xl:text-3xl ">
            {categories[counter]?.name.toUpperCase()}
          </h3>
          <p
            className="text-[20px] font-Roboto text-sm xl:text-xl font-normal "
            style={{ color: categories[counter]?.hover }}
          >
            {categories[counter]?.description}
          </p>
        </div>
        <div className="flex justify-between ml-[89%]">
          <Arrow d={d_right} onClick={next} />
        </div>
      </div>
    </div>
  );
}
