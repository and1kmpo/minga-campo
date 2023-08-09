import backgroundImg from "../assets/background.png";
import star from "../assets/favorite.png";
import { Link as Anchor } from "react-router-dom";
export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-6 xl:gap-8 mx-auto w-full h-screen bg-center bg-cover text-white pt-10 xl:pt-20 pb-6 xl:pb-10  " style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className='flex flex-grid grid-cols-2 gap-4'>
        <h1 className="text-4xl lg:text-5xl font-bold text-center md:mt-2 px-4 ">Your favorite comic book store</h1>
        <img src={star} alt="favorite" className='h-14 hidden lg:block' />
      </div>
      <p className="text-sm  md:text-base text-center block lg:hidden w-[100%] md:w-[80%] px-6">From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
      <p className="text-xl text-center lg:w-[60%] hidden lg:block  "> Explore our catalog and live the adventure of your life.</p>
      <Anchor to='/signin' className="flex justify-center items-center bg-primary w-[50%] md:w-[25%] xl:w-[18%] h-14 rounded-2xl text-xl font-bold col-span-2">Get Started</Anchor>
    </div>
  );
}
