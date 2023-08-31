import bgNewRole from "../assets/bgNewRole.png";
import logo from "../assets/logoFooter.svg";
import check from "../assets/check.svg";
import profile_1 from "../assets/profile_1_NewRole.png";
import profile_2 from "../assets/profile_2_NewRole.png";
import profile_3 from "../assets/profile_3_NewRole.png";
import { Link as Anchor } from 'react-router-dom'

function NewRole() {
    return (
        <main className="w-full min-h-screen flex justify-center bg-white font-roboto">
            <div className="w-full flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-primary text-[20px]">Change role to</p>
                    <img src={logo} alt="" className="mt-2" />
                </div>
                <form action="" className="mt-5 flex flex-col w-full items-center justify-center">
                    <Anchor to="/author-form" className="w-full flex justify-center">
                        <label
                            htmlFor=""
                            className="group flex justify-center items-center w-[80%] rounded-2xl hover:cursor-pointer hover:border-primary p-1 border-2 mb-5"
                        >
                            <input type="radio" name="author" id="" className="hidden" />
                            <div className="bg-white flex p-2 w-full items-center">
                                <div className="w-[160px] md:min-w-[160px] h-[90px] flex items-center justify-center">
                                    <div className="flex w-full justify-between">
                                        <div className="w-1/3 flex items-center justify-center">
                                            <img src={profile_1} alt="" className="w-full h-full -mr-3" />
                                        </div>
                                        <div className="w-1/3 z-10 flex items-center justify-center">
                                            <img src={profile_2} alt="" className="w-full h-full -mx-4 transform scale-125" />
                                        </div>
                                        <div className="w-1/3 flex items-center justify-center">
                                            <img src={profile_3} alt="" className="w-full h-full -ml-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col max-w-[150px] md:max-w-[300px]">
                                    <p className="font-bold text-[20px] text-primary">Join as an Author!</p>
                                    <p className="text-primary text">I&#39;m a reader writing a manga</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center border-2 rounded-full h-[25px] w-[25px] self-start group-hover:bg-primary">
                                <img src={check} className="w-[15px] h-[11px]" alt={check} />
                            </div>
                        </label>
                    </Anchor>
                    <Anchor to="/cia-form" className="w-full flex justify-center">
                        <label
                            htmlFor=""
                            className="group flex justify-center items-center w-[80%] rounded-2xl hover:cursor-pointer hover:border-primary p-1 border-2 mb-5"
                        >
                            <input type="radio" name="author" id="" className="hidden" />
                            <div className="bg-white flex p-2 w-full items-center">
                                <div className="w-[160px] md:min-w-[160px] h-[90px] flex items-center justify-center">
                                    <div className="flex w-full justify-between">
                                        <div className="w-1/3 flex items-center justify-center">
                                            <img src={profile_1} alt="" className="w-full h-full -mr-3" />
                                        </div>
                                        <div className="w-1/3 z-10 flex items-center justify-center">
                                            <img src={profile_2} alt="" className="w-full h-full -mx-4 transform scale-125" />
                                        </div>
                                        <div className="w-1/3 flex items-center justify-center">
                                            <img src={profile_3} alt="" className="w-full h-full -ml-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col max-w-[150px] md:max-w-[300px]">
                                    <p className="font-bold text-[20px] text-primary">Join as an Company!</p>
                                    <p className="text-primary text">I&#39;m a company and I want to publish my comics</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center border-2 rounded-full h-[25px] w-[25px] self-start group-hover:bg-primary">
                                <img src={check} className="w-[15px] h-[11px]" alt={check} />
                            </div>
                        </label>
                    </Anchor>
                </form>
            </div>

            <img
                className="hidden md:block min-h-[640px] max-h-screen w-1/2 object-cover "
                src={bgNewRole}
                alt={bgNewRole}
            />
        </main>
    )
}

export default NewRole