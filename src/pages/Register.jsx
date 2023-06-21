import { Link as Anchor, useNavigate } from "react-router-dom"
import { useRef } from "react"
import register_img from "../assets/register.png"
import icon_google from "../assets/Google.png"


export default function Register() {

    const navigate = useNavigate()
    const register = () => {
        let data = {
            email: email.current.value,
            photo: photo.current.value,
            password: password.current.value
        }
        console.log(data)
        //data se envía en la petición POST al backend
        //redirigir en caso de éxito
        //mostrar alertas en caso de fracaso
        setTimeout(() => navigate('/'), 5000)
    }
    const email = useRef()
    const photo = useRef()
    const password = useRef()

    return (
        <main className='flex w-full min-h-screen items-center justify-between font-roboto mb-10'>
            <div className="flex flex-col  md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
                <p className="font-semibold text-3xl text-center mt-6">Welcome!</p>
                <p className="font-semibold text-sm mt-2 text-center p-2  w-[300px] md:w-[350px] lg:w-[400px] xl:w-[470px]">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                <form className="flex flex-col my-2">
                    <input ref={email} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="email" id="email" placeholder="Email" />
                    <input ref={photo} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]" type="url" name="photo" id="photo" placeholder="Url photo" />
                    <input ref={password} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F] mb-4" type="password" name="password" id="password" placeholder="Password" />
                    <div>
                        <label htmlFor="notificationCheckbox" className="flex items-center">
                            <input type="checkbox" id="notificationCheckbox" className=" h- w-4 text-indigo-600" />
                            <span className="ml-2 text-gray-700  text-xs">Send notification to my email</span>
                        </label>
                    </div>
                    <input onClick={register} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-xl text-white rounded-lg bg-purple" type="button" value="Sign Up" />

                </form>
                <div className="flex">
                        <input className=" text-center relative  w-[255px] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[48px] p-2 pl-10 my-[10px] text-[14px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="cuenta" id="google" placeholder=" sign in whit google" />
                        <img className="absolute  mt-4 ml-[40px] md:ml-[60px] lg:ml-[120px]" src={icon_google} alt="google" />
                    </div>
                
                <p className="font-semibold text-xs  text-center ">Already have an account? <Anchor to='/signin' className="text-purple font-bold">Log in</Anchor>!</p>
                <p className="font-semibold text-xs text-center p-2">Go back to <Anchor to='/' className="text-purple font-bold">Home</Anchor>!</p>
            </div>
            <img className="hidden md:block  md:top-0 md:right-0 h-screen w-[50%] object-cover" src={register_img} alt="register" />
        </main>
    )

}