import { Link as Anchor } from "react-router-dom";
import { useRef } from "react";
import signin_img from "../assets/signin.png";
import icon_google from "../assets/Google.png";
import logo_minga from "../assets/logoFooter.svg";
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";

export default function SignIn() {
  const email = useRef();
  const password = useRef();

  const signin = () => {
    let data = {
      email: email.current.value, //accedo al valor de una referencia
      password: password.current.value,
    };

    axios
      .post(apiUrl + "/auth/signin", data)
      .then((res) => {
        localStorage.setItem("token", res.data.response.token);
        localStorage.setItem("user", JSON.stringify(res.data.response.user));
      })
      .then(() =>
        Swal.fire({
          icon: "success",
        })
      )
      .then(() => window.location.replace("/"))
      .catch((err) =>
        Swal.fire({
          icon: "error",
          text: "sign in please!",
          html: err.response.data.messages
            .map((each) => `<p>${each}</p>`)
            .join(""),
        })
      );
  };

  return (
    <main className="flex w-full  flex items-center justify-between mb-10">
      <img
        className="hidden md:block  md:top-0 md:left-0 h-screen w-[50%] object-cover"
        src={signin_img}
        alt="signin"
      />
      <div className="flex flex-col justify-center items-center h-screen w-full md:w-[50%] ">
        <div className="flex items-center justify-center  ">
          <img src={logo_minga} alt="logominga" className="w-40 h-6  mb-2" />
        </div>
        <p className="font-semibold text-xl text-center mb-2">Welcome back!</p>
        <p className=" font-semibold text-[14px]  text-center  w-[70%] md:w-[350px] lg:w-[400px] xl:w-[480px] pb-2">
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
        <form className="flex flex-col font-roboto mt-2 gap-4">
          <input
            ref={email}
            className="w-[95%] md:w-[300px] lg:w-[350px] xl:w-[440px] h-[50px] p-2 text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="w-[95%] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[50px] p-2  text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="w-[95%] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[50px]   text-[20px] text-white rounded-lg bg-purple"
            type="button"
            value="Sign in"
            onClick={signin}
          />
          <div className="flex">
            <input
              className=" text-center relative  w-[95%] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[45px] p-2 pl-10 text-[14px] rounded-lg border-2 border-[#1F1F1F]"
              type="email"
              name="cuenta"
              id="google"
              placeholder=" sign in whit google"
            />
            <img
              className="absolute  mt-2 ml-[40px] md:ml-[60px] lg:ml-[120px]"
              src={icon_google}
              alt="google"
            />
          </div>
        </form>
        <p className="font-semibold text-[12px]  text-center mt-2 ">
          You dont have an account yet?{" "}
          <Anchor to="/register" className="text-purple font-bold">
            {" "}
            Register{" "}
          </Anchor>{" "}
        </p>
        <p className="font-semibold text-[12px] text-center ">
          Go back to{" "}
          <Anchor to="/" className="text-purple hover:text-black font-bold">
            Home Page
          </Anchor>
        </p>
      </div>
    </main>
  );
}
