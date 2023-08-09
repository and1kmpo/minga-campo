//Footer
import { Link as Anchor } from "react-router-dom";
import FacebookIcon from "../assets/Facebook.png";
import TwitterIcon from "../assets/Twitter.png";
import VimeoIcon from "../assets/Vimeo.png";
import YoutubeIcon from "../assets/Youtube.png";
import backgroundFooter from "../assets/footerBackground.png";
import logoFooter from "../assets/logoFooter.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full justify-between items-center pb-5 bg-white">
      <img
        src={backgroundFooter}
        alt="fondo anime footer"
        className="object-fit hidden w-full h-60 rounded-[0px_0px_50%_50%] md:flex"
      />
      <div className=" mt-auto  flex flex-col items-center w-full md:w-11/12 md:flex-row md:justify-between">
        <div className="flex justify-between items-center mt-4 mb-4 text-black">
          <Anchor className="text-xl mr-5 hover:scale-105 " to={"/"}>
            Home
          </Anchor>
          <Anchor className="text-xl mr-5 hover:scale-105 " to={"/mangas/1"}>
            Mangas
          </Anchor>
        </div>

        <img src={logoFooter} alt="logo minga footer" className="w-40" />

        <div className="flex flex-col items-center mt-6">
          <div className="flex w-full justify-evenly mb-2">
            <img src={FacebookIcon} alt="Facebook" className="w-6 h-6 mx-2" />
            <img src={TwitterIcon} alt="Twitter" className="w-6 h-6 mx-2" />
            <img src={VimeoIcon} alt="Vimeo" className="w-6 h-6 mx-2" />
            <img src={YoutubeIcon} alt="Youtube" className="w-6 h-6 mx-2" />
          </div>

          <button className="bg-gradient-to-r from-[#4338CA] to-[#5E52F3] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
            Donate{" "}
            <span role="img" aria-label="heart">
              🤍
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
