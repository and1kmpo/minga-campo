export default function Carousel() {
  const d_left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  const d_right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  return (
    <div className="hidden md:flex items-center justify-center mt-5 px-10 md:justify-evenly md:h-96 md:w-full bg-white">  
        <div className="bg-primary w-[90%] h-[60%] rounded-lg flex justify-evenly items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d_left} />
            </svg>
            <img className="ml-20 h-64 self-end" src="src/assets/imgCarousel.png" alt="imagen manga" />
            <img className="h-56 mb-12 self-end rounded-lg" src="src/assets/coverCarousel.png" alt="cover manga" />
            <div className="text-lg px-32 text-black sm:w-10/12 xl:w-6/12">
                <h3 className="text-2xl text-white pb-4">Título</h3>
                <p className="text-xs text-white xl:text-sm">Descripción</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d_right} />
            </svg>
        </div>
</div>
  )
}
