import background2 from '../assets/background2.png';
import favorite from '../assets/favorite.png';

export default function Welcome() {
  return (
      <div>
      <img className='   h-screen  object-cover object-center ' src={background2} alt='background'></img>
      <div className=" flex flex-col  justify-center items-center   inset-y-1/2  absolute  font-roboto text-white  text-center mt-10  lg:ml-[15%] md:[10%] ">
      <div className='flex items-center flex-wrap '>
        <h1 className=' font-bold  text-3xl lg:text-[48px] mb-3    '>Your favorite comic  book store</h1>
        <img className='h-[50px] w-[50px] hidden lg:block  lg:ml-1  ' src={favorite} alt='star'></img>
        </div>
        <h5 className='pb-6 ml-4 mr-4 lg:pb-5 text-md  lg:text-[24px] block lg:hidden    '>From classics to novelties, we have everything you need to immerse yourself in your favorite universes.  Explore our catalog and live the adventures of your life.</h5>
        <h5 className='pb-6 ml-4 mr-4 lg:pb-5 text-md  lg:text-[24px] lg:block hidden   w-[75%] '>Explore our catalog and live the adventures of your life.</h5>

        <button className=' w-[400px] h-auto text-[34px] font-bold font-roboto   bg-purple hidden lg:block rounded-lg gap-[10px]'>Let´s go!</button>
        <button className=' h-[68px] w-[60%] items-center justify-center pt-2 rounded-lg  bg-purple  font-roboto text-2xl font-bold block lg:hidden r pb-3  '>Started</button>
  
      </div>
      </div>
 
  )
}
