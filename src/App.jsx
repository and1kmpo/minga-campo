import React, { useState } from "react";
import backgroundImg from './assets/background.png';
import { RiCloseFill } from "react-icons/ri";

//Footer
import FacebookIcon from './assets/Facebook.png';
import TwitterIcon from './assets/Twitter.png';
import VimeoIcon from './assets/Vimeo.png';
import YoutubeIcon from './assets/Youtube.png';
import backgroundFooter from './assets/footerBackground.png';
import logoFooter from './assets/logoFooter.svg';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
<div className="bg-cover bg-no-repeat bg-center flex flex-col justify-between min-h-screen overflow-hidden text-white" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="p-5">
        <nav className="flex justify-between items-center">
          <button onClick={() => setShowMenu(!showMenu)}>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 16H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round"/>
              <path d="M11 27H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round"/>
              <path d="M11 39H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>
          <div>
            <svg width="54" height="33" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect y="0.5" width="54" height="32" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_12940_634" transform="scale(0.0123457 0.0208333)"/>
                </pattern>
                <image id="image0_12940_634" width="81" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAwCAYAAABpJ5bJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgB7dsxCsIwGEDhXxEFL2CdxUnwMM6ewNXTuIqzVxGdRNztLgi6qKu0FUtf1eF9YwKBPpKpSeP+FKqkGarMiAAjAowIaOUNzmf72G7OoVeL5SgGw25mPHcnpuktlHU8XHLHPc4AIwKMCDAiwIgAIwKMCDAiwIiAVtRotR5H0u8Uzqena0wnu/i3tcuqdSe++8hP5n+1dlkeZ4ARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBGQewMiSdrxLb0af7LTaxddCGj4LK06jzPAiAAjAowIeABa3yGPMJiO2wAAAABJRU5ErkJggg=="/>
              </defs>
            </svg>
          </div>
        </nav>
      </div>

      {showMenu && (
        <div className="fixed top-0 right-0 bg-red-400 flex flex-col justify-between w-full h-full p-4 z-50 transition-all duration-500">
          <div className="flex items-start justify-between">
            <div className="flex ml-2">
              <img className="rounded-full mr-2" src="http://placeholder.com/50/50" alt="" />
              <div className="flex flex-col">
                <p>nombre</p>
                <p>correo</p>
              </div>
            </div>
            <button onClick={() => setShowMenu(false)}>
              <RiCloseFill className="text-3xl" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center gap-6 m-5">
        <h1 className="text-4xl font-bold text-center">Your favorite comic book store</h1>
        <p className="text-base text-center">From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
        <button className="bg-primary w-80 h-16 rounded-full">Get Started</button>
      </div>


<footer className="flex flex-col w-full justify-between items-center pb-5 bg-white">
    <img src={backgroundFooter} alt="fondo anime footer" className="object-cover hidden w-full h-60 rounded-[0px_0px_50%_50%] md:flex"/>

  <div className="flex flex-col items-center w-full md:w-11/12 md:flex-row md:justify-between">
    
    <div className="flex justify-between items-center mt-4 mb-4 text-black"> 
        <a className="text-xl mr-5">Home</a>
        <a className="text-xl">Mangas</a>
    </div>

        <img src={logoFooter} alt="logo minga footer" className="w-40"/>
        
    <div className="flex flex-col items-center mt-6">
      <div className="flex w-full justify-evenly mb-2">
        <img src={FacebookIcon} alt="Facebook" className="w-6 h-6 mx-2" />
        <img src={TwitterIcon} alt="Twitter" className="w-6 h-6 mx-2" />
        <img src={VimeoIcon} alt="Vimeo" className="w-6 h-6 mx-2" />
        <img src={YoutubeIcon} alt="Youtube" className="w-6 h-6 mx-2" />
      </div>
    
      <button className="bg-gradient-to-r from-[#4338CA] to-[#5E52F3] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
        Donate <span role="img" aria-label="heart">🤍</span>
      </button>
  
    </div>

  </div>

</footer>


    </div>
  );
}

export default App;
