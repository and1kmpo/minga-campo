import bgAdminPanel from "../assets/bgAdminPanel.png";
import AdminPanelTabs from "../components/AdminPanelTabs";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import moment from 'moment';
import heroIconAdminPanel from "../assets/heroIconAdminPanel.svg";

export default function AdminPanel() {
    const [isChecked, setIsChecked] = useState(false);
    const [authorsData, setAuthorsData] = useState([]);

    useEffect(() => {
        fetch(apiUrl + "/authors/admin", headers())
            .then(response => response.json())
            .then(data => {
                const inactiveAuthors = data.response.all_inactive;
                const activeAuthors = data.response.all_active;
                const sortedAuthors = [...inactiveAuthors, ...activeAuthors];
                setAuthorsData(sortedAuthors);
                console.log("Data from fetch:", data); // Agregar este console.log
            })
            .catch(error => console.error("Error fetching authors data", error));
    }, []);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const tabs = [
        {
            title: "Companies",
            content: (
                <div>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border">Name</th>
                                <th className="border">Website</th>
                                <th className="border">Img Profile</th>
                                <th className="border">On/Off</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mostrar aquí los datos fetcheados */}
                        </tbody>
                    </table>
                </div>
            ),
        },
        {
            title: "Authors ",
            content: <div>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border">Name</th>
                            <th className="border">Date</th>
                            <th className="border">City</th>
                            <th className="border">img Profile</th>
                            <th className="border">On/Off</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authorsData.map((author, index) =>
                            <tr className="text-center" key={index}>
                                <td className="flex"><img src={heroIconAdminPanel} alt="Hero Icon" className="h-6 w-6 mr-2" />{`${author.name} ${author.last_name || ""}`}</td>
                                <td className="">{moment(author.createdAt).format("DD/MM/YYYY")}</td>
                                <td className="">{author.city}</td>
                                <td className=""><img src={author.photo} alt="" className="rounded-full h-6 w-6" /></td>
                                <td className="">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <span className={`relative inline-block w-10 h-6 bg-${isChecked ? 'primary' : 'bg-gray-700'} rounded-full transition duration-300 ease-in-out`}>
                                            <span
                                                className={`absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow transition-transform ${isChecked ? 'transform translate-x-full' : ''
                                                    }`}
                                            ></span>
                                        </span>
                                    </label>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mb-4 font-poppins">
            <div className="absolute inset-0 bg-black opacity-50 md:hidden -z-50"></div>
            <div className="flex flex-col items-center justify-center w-full h-[369px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${bgAdminPanel})` }}>
                <p className="relative w-[162px] text-center text-white font-bold text-[40px] leading-[38.07px] font-roboto m-10">Panel</p>
            </div>

            <div className="flex flex-col items-center bg-[#EBEBEB] -top-[70px] relative rounded-t-[80px] w-full lg:w-[90%] lg:rounded-2xl">
                <div className="flex justify-evenly md:justify-evenly lg:justify-start w-[85%] text-center mt-14">
                    <p className="border-b-8 border-primary text-primary font-bold">Entities<heroIconAdminPanel /></p>
                </div>

                <div className="">
                    <AdminPanelTabs tabs={tabs} />
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:grid-rows-2 md:gap-5">
                    {/* Contenido adicional aquí */}
                </div>
            </div>
        </div>
    );
}
