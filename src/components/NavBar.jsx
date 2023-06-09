import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center p-5">
      <button onClick={() => setShowMenu(!showMenu)}>
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 16H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
          <path d="M11 27H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
          <path d="M11 39H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
      <div>
        <svg width="54" height="33" viewBox="0 0 54 33"fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect y="0.5" width="54" height="32" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_12940_634" transform="scale(0.0123457 0.0208333)" />
            </pattern>
            <image id="image0_12940_634" width="81" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAwCAYAAABpJ5bJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgB7dsxCsIwGEDhXxEFL2CdxUnwMM6ewNXTuIqzVxGdRNztLgi6qKu0FUtf1eF9YwKBPpKpSeP+FKqkGarMiAAjAowIaOUNzmf72G7OoVeL5SgGw25mPHcnpuktlHU8XHLHPc4AIwKMCDAiwIgAIwKMCDAiwIiAVtRotR5H0u8Uzqena0wnu/i3tcuqdSe++8hP5n+1dlkeZ4ARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBGQewMiSdrxLb0af7LTaxddCGj4LK06jzPAiAAjAowIeABa3yGPMJiO2wAAAABJRU5ErkJggg=="/>
          </defs>
        </svg>
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
    </nav>
  );
}
