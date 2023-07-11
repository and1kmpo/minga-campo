import { Link as Anchor, useNavigate } from "react-router-dom"
import { useRef } from "react"
import register_img from "../assets/register.png"
import icon_google from "../assets/Google.png"
import axios from "axios"
import apiUrl from '../apiUrl'
import Swal from "sweetalert2"

export default function Register() {

    const navigate = useNavigate()
    const email = useRef()
    const photo = useRef()
    const password = useRef()

    const register = () => {
        let data = {
            email: email.current.value,
            photo: photo.current.value,
            password: password.current.value
        }
        //console.log(data)
        axios.post(apiUrl + '/auth/register', data)
            .then(() => Swal.fire({
                icon: 'success',
                text: 'sign in please!'
            }))
            .then(() => navigate('/signin'))
            .catch(err => Swal.fire({
                icon: 'error',
                text: 'sign in please!',
                html: err.response.data.messages.map(each => `<p>${each}</p>`).join('')
            }))
    }

    return (
        <main className='flex w-full h-screen items-center justify-between font-roboto mb-10'>
            <div className="flex flex-col  md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%] ">
                <p className="font-semibold text-[24px] text-center mt-6 mb-2">Welcome!</p>
                <p className="font-semibold text-[11px] text-center mb-2 w-[60%] md:w-[350px] lg:w-[400px] xl:w-[470px]">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                <form className="flex flex-col gap-2">
                    <input ref={email} className="w-[95%] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2  text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="email" id="email" placeholder="Email" />
                    <input ref={photo} className="w-[95%] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2  text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="url" name="photo" id="photo" placeholder="Url photo" />
                    <input ref={password} className="w-[95%] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2  text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="password" name="password" id="password" placeholder="Password" />
                    <div>
                        <label htmlFor="notificationCheckbox" className="flex items-center h-[10px]">
                            <input type="checkbox" id="notificationCheckbox" className="  text-indigo-600" />
                            <span className="ml-2 font-semibold text-gray-700  text-[12px]">Send notification to my email</span>
                        </label>
                    </div>
                    <input onClick={register} className="w-[95%] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[42px] text-[20px] text-gray-100 rounded-lg bg-purple" type="button" value=" Register" />

                </form>
                <div className="flex">
                    <input className=" text-center relative  w-[95%] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[38px] p-2 pl-6 my-[10px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="cuenta" id="google" placeholder=" sign in whit google" />
                    <img className="absolute  mt-4 ml-[40px] md:ml-[60px] lg:ml-[120px]" src={icon_google} alt="google" />
                </div>

                <p className="font-semibold text-[12px]  text-center ">Already have an account? <Anchor to='/signin' className="text-purple font-bold">Sign In</Anchor>!</p>
                <p className="font-semibold text-[12px]  text-center ">Go back to <Anchor to='/' className="text-purple font-bold">Home</Anchor>!</p>
            </div>
            <img className="hidden md:block  md:top-0 md:right-0 h-screen w-[50%] object-cover" src={register_img} alt="register" />
        </main>
    )

}