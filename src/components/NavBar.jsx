import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import apiURL from "../apiUrl"
import headers from "../utils/headers"

async function signout(event) {
  event.preventDefault();
  try {
    await axios.post(apiURL + 'auth/signout',
      null,
      headers()
    )
  } catch (error) {
    console.log(error);
  }
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.replace('/')
}

function catch_token(setOptions) {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  setOptions([
    { to: "/", title: "Home" },
    { to: "/register", title: "Register" },
    { to: "/signin", title: "Signin" },
  ])
}

export default function NavBar() {

  const [options, setOptions] = useState([
    { to: "/", title: "Home" }
  ])
  const [photo, setPhoto] = useState()
  const [email, setEmail] = useState()
  useEffect(() => {
    let token = localStorage.getItem('token')
    //console.log(token);
    if (token) {
      axios.post(apiURL + '/auth/token', null, headers())
        .then(res => {
          if (res.data.response.user.role === 0) {
            setOptions([
              { to: "/", title: "Home" },
              { to: '/author-form', title: "Create Author" },
              { to: '/cia-form', title: "Create Company" },
              { to: "/", title: "Sign Out" }
            ])
          } else if (res.data.response.user.role === 1 || res.data.response.user.role === 2) {
            setOptions([
              { to: "/", title: "Home" },
              { to: "/manga-form", title: "Create Manga" },
              { to: '/manga/:manga_id/chapter-form', title: "New Chapter" },
              { to: "/", title: "Sign Out" }
            ])
          } else if (res.data.response.user.role === 3) {
            setOptions([
              { to: "/", title: "Home" },
              { to: "/", title: "Sign Out" }
            ])
          }
          setPhoto(res.data.response.user.photo)
          setEmail(res.data.response.user.email)
        })
        .catch(() => catch_token(setOptions))
    } else {
      catch_token(setOptions)
    }
  }, [])
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="flex justify-between items-center p-5 absolute w-full">
      <div className="flex items-center">
        <button onClick={() => setShowMenu(!showMenu)}>
          <div>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 16H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
              <path d="M11 27H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
              <path d="M11 39H37" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </button>
      </div>
      <div className="flex items-center ml-auto">
        <svg width="54" height="33" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect y="0.5" width="54" height="32" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_12940_634" transform="scale(0.0123457 0.0208333)" />
            </pattern>
            <image id="image0_12940_634" width="81" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAwCAYAAABpJ5bJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgB7dsxCsIwGEDhXxEFL2CdxUnwMM6ewNXTuIqzVxGdRNztLgi6qKu0FUtf1eF9YwKBPpKpSeP+FKqkGarMiAAjAowIaOUNzmf72G7OoVeL5SgGw25mPHcnpuktlHU8XHLHPc4AIwKMCDAiwIgAIwKMCDAiwIiAVtRotR5H0u8Uzqena0wnu/i3tcuqdSe++8hP5n+1dlkeZ4ARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBFgRIARAUYEGBGQewMiSdrxLb0af7LTaxddCGj4LK06jzPAiAAjAowIeABa3yGPMJiO2wAAAABJRU5ErkJggg==" />
          </defs>
        </svg>
      </div>

      {showMenu && (
        <div className="fixed top-0 left-0 p-10 bg-primary flex flex-col  w-full lg:w-1/3 h-full z-50 transition-all duration-500">
          <div className="flex items-center justify-between">
            <div className="flex ml-2">
              <img className="rounded-full mr-4 w-[40px] h-[40px]" src={photo || "https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp"} alt="" />
              <div className="flex flex-col justify-center">
                <p className="text-[#D1D3D4]">{email}</p>
              </div>
            </div>
            <button onClick={() => setShowMenu(false)}>
              <RiCloseFill className="text-3xl" />
            </button>
          </div>
          <div className="pt-5">
            {options?.map((option, index) => option.title === 'Sign Out' ? (
              <a key={index} onClick={signout} href='/'>
                <p className="text-white mb-4 hover:bg-white hover:text-primary rounded-md font-semibold p-3">
                  {option.title}
                </p>
              </a>
            ) : (
              <Link key={index} to={option.to}>
                <p className="text-white mb-4 hover:bg-white hover:text-primary rounded-md font-semibold p-3">
                  {option.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
