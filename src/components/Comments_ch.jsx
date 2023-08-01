import chat from "../assets/chat.png"
import comment from "../assets/comment.png"
import edit from "../assets/editar.png"
import borrar from "../assets/papelera.png"
import user from "../assets/perfil.png"



export default function Comments_ch() {
    return (
        <>
            <div className="  flex flex-col justify-around items-center gap-4 w-full min-h-screen bg-gray-200 pb-10 pt-10">

                <div className=" flex flex-col bg-white w-[90%] md:w-[70%]  mt-10 rounded-lg ">
                    <div className="flex ml-4 mt-4 ">
                        <img className="rounded-full  mr-4 w-[60px] h-[60px]" src="https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp" alt="" />
                        <p className="flex "> nombre de usuario </p>
                    </div>
                    <div>
                        <p className="px-6 text-gray-500 flex justify-center mt-4 mb-4 ml-4">
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="flex justify-start w-[90%] items-center mt-2 ml-8  ">
                            <img src={chat} className=" h-8 w-8" alt="" />
                            <div className="flex justify-center items-center h-8 w-8 border-2 font-semibold border-slate-400 mr-4 ml-4 rounded"><h3>2</h3></div>
                            <button className="flex justify-center px-3 py-2  rounded ">
                                <img src={comment} className=" h-10 w-18" alt="" />
                            </button>
                            <p className=" ml-auto text-xs text-gray-600 px-2 py-2 "> 8 minutos ago </p>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col bg-white w-[90%] md:w-[70%]  mt-2 rounded-lg ">
                    <div className="flex  ml-4 mt-4 ">
                        <button className=" px-3 py-2  rounded "><img src={edit} className=" h-10 w-18" alt="" />  </button>
                        <button className=" px-3 py-2  rounded "><img src={borrar} className=" h-10 w-10" alt="" /> </button>
                        <img className=" ml-auto mr-20   rounded-full  w-[60px] h-[60px]" src={user} alt="user" />
                    </div>
                    <p className="flex px-10 py-2 "> nombre de usuario </p>
                    <p className="flex   py-2 mb-4 px-6 text-gray-500 ml-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum.
                    </p>
                    <div className="flex justify-start w-[90%] items-center mt-2 ml-8  ">
                        <img src={chat} className=" h-8 w-8" alt="" />
                        <div className="flex justify-center items-center h-8 w-8 border-2 font-semibold border-slate-400 mr-4 ml-4 rounded"><h3>2</h3></div>
                        <button className="flex justify-center px-3 py-2  rounded ">
                            <img src={comment} className=" h-10 w-18" alt="" />
                        </button>
                        <p className=" ml-auto text-xs text-gray-600 px-2 py-2 "> 8 minutos ago </p>
                    </div>
                </div>

                <div className=" flex flex-col bg-white w-[90%] md:w-[70%]  mt-2 rounded-lg ">
                    <div className="flex ml-4 mt-4 ">
                        <img className="rounded-full  mr-4 w-[60px] h-[60px]" src="https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp" alt="" />
                        <p className="flex "> nombre de usuario </p>
                    </div>
                    <p className="px-6 flex justify-center text-gray-500  mt-4 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum.
                    </p>
                    <div className="flex justify-start w-[90%] items-center mt-2 ml-8  ">
                        <img src={chat} className=" h-8 w-8" alt="" />
                        <div className="flex justify-center items-center h-8 w-8 border-2 font-semibold border-slate-400 mr-4 ml-4 rounded"><h3>2</h3></div>
                        <button className="flex justify-center px-3 py-2  rounded ">
                            <img src={comment} className=" h-10 w-18" alt="" />
                        </button>
                        <p className=" ml-auto text-xs text-gray-600 px-2 py-2 "> 8 minutos ago </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center bg-gray-200 w-[100%] rounded-lg py-4 px-4 mb-10 pb-10 ">
                <div className=" w-full md:w-[84%] mx-auto border-2 rounded-lg hover:border-gray-400">
                    <form>
                        <label for="chat" className=""></label>
                        <div className="flex items-center py-2 bg-gray-50   rounded-lg dark:bg-gray-100">
                            <textarea id="comments" rows="1" className="flex   md:mx-4 md:p-2.5 ml-2 w-full text-sm text-gray-800 font-roboto  rounded-lg   dark:bg-gray-100 focus:outline-none  " placeholder="Say something here..."></textarea>
                            <button type="submit" className="inline-flex justify-center md:p-2 md:mr-4  text-blue-400 rounded-full cursor-pointer  dark:text-gray-500 dark:hover:bg-gray-400">
                                <svg className=" w-6 md:w-10 h-6 md:h-10  transform rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}