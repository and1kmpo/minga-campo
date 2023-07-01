import { useEffect, useState } from 'react';
import axios from 'axios';
import Arrow from './Arrow';
import apiUrl from '../apiUrl';

export default function Carousel() {
  const d_left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  const d_right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  //let counter = 0;
  const [categories, setCategories] = useState([]);

  useEffect(
    () => {
      axios(apiUrl + '/categories')
        .then(res => {

          setCategories(res.data.response);
        }).catch(err => console.log(err))
    }, []
  );



  const [counter, modify] = useState(0)
  const next = () => (counter !== categories.length - 1) ? modify(counter + 1) : modify(0)
  const prev = () => (counter !== 0) ? modify(counter - 1) : modify(categories.length - 1)


  return (
    
    // <div className="hidden md:flex items-center justify-center mt-5 px-10 md:justify-evenly md:h-96 md:w-full bg-white">
    //   <div className="bg-primary w-[90%] h-[60%] rounded-lg flex justify-evenly items-center"  style={{ backgroundColor: categories[counter]?.color, }}>
    //     <Arrow d={d_left} onClick={prev} />
    //     <img className="ml-20 h-64 self-end" src={categories[counter]?.character_photo} alt="imagen manga" />
    //     <img className="h-56 mb-12 self-end rounded-lg" src={categories[counter]?.cover_photo} alt="cover manga" />
    //     <div className="text- px-32 text-black sm:w-10/12 xl:w-6/12">
    //       <h3 className="text-3xl text-white pb-2 capitalize">{categories[counter]?.name.toUppercase}</h3>
    //       <p className="text-xs text-white xl:text-sm" style={{ color: categories[counter]?.hover }}>{categories[counter]?.description}</p>
    //     </div>
    //     <Arrow d={d_right} onClick={next} />
    //   </div>
    // </div>
    <div className='flex justify-between  hidden md:block mb-10 '>
      <div className='h-[265px]  rounded-md flex items-center relative ml-10 mr-10 mt-10' style={{ backgroundColor: categories[counter]?.color, }} >
       <div className="ml-4 ">
       <Arrow d={d_left} onClick={prev} />
       </div>
        <img className=' ml-[6%] h-[100%] w-[15%] absolute' src={categories[counter]?.character_photo} alt='imagen1'></img>
        <img className=' ml-[24%] lg:ml-[28%] -mt-[60px] h-[284px] w-[189px] absolute' src={categories[counter]?.cover_photo} alt='imagen2'></img>
        {/* <svg onClick={prev} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-[100px] h-[100px] text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> */}
         {/* <svg onClick={next} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ml-[90%] mr-2 w-[100px]  h-[100px] text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> */}

         
        <div className='flex flex-col item-start justify-center w-[40%] lg:w-[45%] h-auto  text-gray-100 absolute  ml-[52%] lg:ml-[48%]'>
          <h3 className='  font-Roboto font-bold text-2xl '>{categories[counter]?.name.toUpperCase()}</h3>
          <p className=' text-[20px] font-Roboto text-sm font-normal mt-3 mr-15' style={{ color: categories[counter]?.hover }} >{categories[counter]?.description}</p>

        </div>
<div  className=" ml-[80%] lg:ml-[90%] ">
<Arrow d={d_right} onClick={next} />

</div>
      </div>
    </div>

  )
}
