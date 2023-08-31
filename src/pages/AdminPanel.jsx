import { useState } from "react";
import { AdminRoleAuthors } from "../components/AdminRoleAuthors";
import { AdminRoleCompanies } from "../components/AdminRoleCompanies";
import ToggleSwitchAdmin from "../components/ToogleSwitchAdmin";
import bgAdminPanel from "../assets/bgAdminPanel.png";

const AdminPanel = () => {
    const [showCompanies, setShowCompanies] = useState(true); // Estado separado para mostrar Companies y Authors

    return (
        <div className="flex flex-col items-center bg-slate-100">
            <div
                className='w-full h-[369px] lg:h-[650px] bg-cover bg-center flex flex-col items-center justify-center'
                style={{ backgroundImage: `url(${bgAdminPanel})` }}
            >
                <p className="-mt-[9%] text-[48px] md:text-[64px] text-white font-roboto font-medium md:-mt-[6%]">Panel</p>
            </div>
            <div className="relative -top-[174px] bg-white p-[20px] lg:p-[50px] w-[90%] md:w-[80%] sm:w-full flex flex-col justify-center items-center rounded-2xl">
                <p className="text-primary text-[24px] md:text-[32px] font-bold border-b-2 border-primary mb-6">Entities</p>
                <ToggleSwitchAdmin showCompanies={showCompanies} setShowCompanies={setShowCompanies} />
                {showCompanies ? (<AdminRoleCompanies />) : (<AdminRoleAuthors />)}
            </div>
        </div>
    );
};

export default AdminPanel;
