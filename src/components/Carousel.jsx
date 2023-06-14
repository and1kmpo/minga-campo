import { useEffect,useState } from 'react';
import axios from 'axios';
import Arrow from './Arrow';
import apiUrl from '../apiUrl';

export default function Carousel() {
  const d_left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  const d_right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  //let counter = 0;
  const [categories,setCategories]  = useState([]);
  
  useEffect(
    () => {
      axios(apiUrl+'/categories')
        .then(res=>{

          setCategories(res.data.response);
        }).catch(err =>console.log(err))
      },[]
);


  const [counter, setCounter] = useState(0);
  const next = ()=>{
    //counter = counter + 1;
    setCounter(counter+1);
    console.log(counter);
  }
  const prev = ()=>{
    //counter = counter - 1;
    setCounter(counter -1);
    console.log(counter);
}

  return (
    <div className="hidden md:flex items-center justify-center mt-5 px-10 md:justify-evenly md:h-96 md:w-full bg-white">  
        <div className="bg-primary w-[90%] h-[60%] rounded-lg flex justify-evenly items-center">
            <Arrow d={d_left } onClick={prev}/>

            <img className="ml-20 h-64 self-end" src={categories[counter]?.character_photo} alt="imagen manga" />
            <img className="h-56 mb-12 self-end rounded-lg" src={categories[counter]?.cover_photo} alt="cover manga" />
            <div className="text- px-32 text-black sm:w-10/12 xl:w-6/12">
                <h3 className="text-3xl text-white pb-2 capitalize">{categories[counter]?.name}</h3>
                <p className="text-xs text-white xl:text-sm">{categories[counter]?.description}</p>           

            </div>
            <Arrow d={d_right} onClick={next}/>
        </div>
</div>
  )
}