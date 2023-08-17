import { useState } from "react";
import PropTypes from 'prop-types';

const AdminPanelTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);


    return (
        <div className="w-full mt-6">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${index === activeTab ? "bg-blue-500 text-white" : "bg-gray-200"
                            } flex-1 py-2 px-4 text-center`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default AdminPanelTabs;
