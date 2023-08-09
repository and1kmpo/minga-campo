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
    <div className="hidden lg:flex px-14 py-7 xl:py-10">
      <div className="h-[165px] xl:h-[245px] w-full rounded-md flex items-center"
           style={{ backgroundColor: categories[counter]?.color }}>

        <div className="pl-6" onClick={prev}>
          <Arrow d={d_left} />
        </div>

        <div className="w-[50%] h-full flex justify-evenly">
          <img
            className="w-[175px] xl:w-[270px] h-[190px] xl:h-[286px] mr-8 self-end"
            src={categories[counter]?.character_photo}
            alt="character"></img>
          <img
            className="w-[132px] xl:w-[180px] h-[170px] xl:h-[260px] -mt-[20px] xl:-mt-[30px] rounded-sm"
            src={categories[counter]?.cover_photo}
            alt="cover"></img>
        </div>

        <div className=" w-[50%] flex flex-col justify-center font-Roboto pl-10 pr-20"
             style={{ color: categories[counter]?.hover }}>
          <h3 className="text-[24px] font-medium">
            {categories[counter]?.name.toUpperCase()}
          </h3>
          <p className="text-[14px] xl:text-xl font-normal leading-[14.33px]">
            {categories[counter]?.description}
          </p>
        </div>

        <div className="pr-6" onClick={next}>
          <Arrow d={d_right} />
        </div>

      </div>
    </div>
  );
}
