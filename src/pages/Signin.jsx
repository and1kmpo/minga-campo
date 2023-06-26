import { Link as Anchor, useNavigate } from "react-router-dom"
import { useRef } from "react"
import signin_img from "../assets/signin.png"
import icon_google from "../assets/Google.png"
import logo_minga from '../assets/logoFooter.svg'
import axios from "axios"
import apiUrl from "../apiUrl"
import Swal from "sweetalert2"

export default function SignIn() {

    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()

    const signin = () => {
        let data = {
            email: email.current.value,
            password: password.current.value
        }
        //console.log(data)
        axios.post(apiUrl+'/auth/signin',data)
            .then(()=>Swal.fire({
                icon: 'success'
              }))
            .then(()=>navigate('/'))
            .catch(err=>Swal.fire({
                icon: 'error',
                text: 'sign in please!',
                html: err.response.data.messages.map(each=>`<p>${each}</p>`).join('')
              }))
    }

    return (
        <main className="flex w-full min-h-screen flex items-center justify-between">
            <img className="hidden md:block  md:top-0 md:left-0 h-screen w-[50%] object-cover" src={signin_img} alt="signin" />
            <div className="flex flex-col justify-center items-center h-screen w-full md:w-[50%]">
                <div className="flex items-center justify-center  ">
                    <img src={logo_minga} alt="logo minga footer" className="w-40 mb-6" />
                </div>
                <p className="font-semibold text-[32px] text-center">Welcome <span className="text-orange">back</span>!</p>
                <p className="font-roboto font-semibold text-[15px]  text-center w-[80%]  p-2">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                <form className="flex flex-col my-[2px] font-roboto">
                    <input ref={email} className="w-[255px] md:w-[300px] lg:w-[350px] xl:w-[440px] h-[55px] p-2 my-[8px] xl:my-[12px] text-[14px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="email" id="email" placeholder="Email" />
                    <input ref={password} className="w-[255px] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[55px] p-2 my-[8px] xl:my-[12px] text-[14px] rounded-lg border-2 border-[#1F1F1F]" type="password" name="password" id="password" placeholder="Password" />
                    <input className="w-[255px] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[55px] p-2 my-[8px] xl:my-[12px] text-xl text-white rounded-lg bg-purple" type="button" value="Sign in" onClick={signin} />
                    <div className="flex">
                        <input className=" text-center relative  w-[255px] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[48px] p-2 pl-10 my-[10px] text-[14px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="cuenta" id="google" placeholder=" sign in whit google" />
                        <img className="absolute  mt-4 ml-[40px] md:ml-[60px] lg:ml-[120px]" src={icon_google} alt="google" />
                    </div>
                </form>
                <p className="font-semibold text-[14px] mt-[10px] text-center p-2" >You dont have an account yet?    <Anchor to='/register' className="text-purple font-bold">Sign Up</Anchor>  </p>
                <p className="font-semibold text-[14px] text-center ">Go back to <Anchor to='/' className="text-purple hover:text-black font-bold">Home Page</Anchor></p>
            </div>
        </main>


    )

}