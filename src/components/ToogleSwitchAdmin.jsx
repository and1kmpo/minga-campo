export default function ToggleSwitchAdmin({ showCompanies, setShowCompanies }) {
    return (
        <div className="flex justify-center items-center w-[90%]">
            <button
                className={`border-b-2 border-primary flex-grow px-4 py-2 rounded-tl-md text-[20px] text-center ${showCompanies ? 'bg-primary text-white' : 'dark:bg-gray-100 dark:text-[#FF5722]'} peer-checked:dark:bg-gray-100 peer-checked:dark:text-white`}
                onClick={() => setShowCompanies(true)}
            >
                Companies
            </button>
            <button
                className={`border-b-2 border-primary flex-grow px-4 py-2 rounded-tr-md text-[20px] text-center ${!showCompanies ? 'bg-primary text-white' : 'dark:bg-gray-100 dark:text-[#FF5722]'} peer-checked:dark:bg-gray-100 peer-checked:dark:text-white`}
                onClick={() => setShowCompanies(false)}
            >
                Authors
            </button>
        </div>
    );
}
