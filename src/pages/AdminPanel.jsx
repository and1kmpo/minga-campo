import bgAdminPanel from "../assets/bgAdminPanel.png";
import AdminPanelTabs from "../components/AdminPanelTabs";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import headers from "../utils/headers";
import moment from 'moment';
import heroIconAuthor from "../assets/heroIconAdminPanel.svg";
import heroIconCompany from "../assets/heroIconCompanies.svg";


export default function AdminPanel() {
    const [isChecked, setIsChecked] = useState(false);
    const [authorsData, setAuthorsData] = useState([]);
    const [authorsCompanies, setauthorsCompanies] = useState([]);

    useEffect(() => {
        fetch(apiUrl + "/authors/admin", headers())
            .then(response => response.json())
            .then(data => {
                const inactiveAuthors = data.response.all_inactive;
                const activeAuthors = data.response.all_active;
                const sortedAuthors = [...inactiveAuthors, ...activeAuthors];
                setAuthorsData(sortedAuthors);
                console.log("Data from fetch:", data);
            })
            .catch(error => console.error("Error fetching authors data", error));
    }, []);

    useEffect(() => {
        fetch(apiUrl + "/companies/admin", headers())
            .then(response => response.json())
            .then(data => {
                const inactiveCompanies = data.response.all_inactive;
                const activeCompaneis = data.response.all_active;
                const sortedCompanies = [...inactiveCompanies, ...activeCompaneis];
                setauthorsCompanies(sortedCompanies);
                console.log("Data from fetch:", data);
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
                    <table className="w-full border-collapse mb-4 text-xs md:text-sm">
                        <tbody>
                            {authorsCompanies.map((company, index) => (
                                <tr className="text-center border-b border-gray-400" key={index}>
                                    <td className="flex px-3 md:px-5 py-2 md:py-3 items-center">
                                        <img src={heroIconCompany} alt="Hero Icon" className="h-6 w-6 mr-2" />
                                        {company.name}
                                    </td>
                                    <td className="px-2 md:px-5 py-2 md:py-3 hidden sm:table-cell">
                                        <div className="max-w-[150px] overflow-hidden">
                                            <div className="truncate">
                                                {company.website}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-3 md:px-5 py-2 md:py-3">
                                        <img src={company.photo} alt="" className="rounded-full h-6 w-6" />
                                    </td>
                                    <td className="px-3 md:px-5 py-2 md:py-3">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={isChecked}
                                                onChange={handleToggle}
                                            />
                                            <span className={`relative inline-block w-10 h-6 bg-${isChecked ? 'primary' : 'bg-gray-700'} rounded-full transition duration-300 ease-in-out`}>
                                                <span
                                                    className={`absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow transition-transform ${isChecked ? 'transform translate-x-full' : ''}`}
                                                ></span>
                                            </span>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ),
        },
        {
            title: "Authors ",
            content: <div>
                <table className="w-full border-collapse mb-4 text-sm md:text-base">
                    <tbody>
                        {authorsData.map((author, index) =>
                            <tr className="text-center border-b border-gray-400" key={index}>
                                <td className="flex px-3 md:px-5 items-center justify-start"><img src={heroIconAuthor} alt="Hero Icon" className="h-6 w-6 mr-2" />{`${author.name} ${author.last_name || ""}`}</td>
                                <td className=" px-3 md:px-5">{moment(author.createdAt).format("DD/MM/YYYY")}</td>
                                <td className=" px-3 md:px-5">{author.city}</td>
                                <td className=" px-3 md:px-5 hidden sm:table-cell"><img src={author.photo} alt="" className="rounded-full h-6 w-6" /></td>
                                <td className=" px-3 md:px-5">
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
