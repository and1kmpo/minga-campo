import backgroundImg from '../assets/background.png';
import star from '../assets/favorite.png';
import { Link as Anchor } from 'react-router-dom'
export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mx-auto w-full h-screen bg-center bg-cover text-white  " style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className='flex flex-grid grid-cols-2 gap-4'>
        <h1 className="text-4xl lg:text-5xl font-bold text-center mt-10 md:mt-0 px-4 ">Your favorite comic book store</h1>
        <img src={star} alt="favorite" className='h-14 hidden lg:block' />
      </div>
      <p className="text-sm  md:text-base text-center block lg:hidden w-[100%] md:w-[80%] px-6">From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
      <p className="text-xl text-center lg:w-[60%] hidden lg:block  "> Explore our catalog and live the adventure of your life.</p>
      <Anchor to='/signin' className="flex justify-center items-center bg-primary w-[70%] md:w-[50%] lg:w-80 h-16 rounded-full text-xl font-bold col-span-2">Get Started</Anchor>
    </div>

  )
}