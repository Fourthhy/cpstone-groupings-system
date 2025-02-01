import React, { useState } from "react";

const options = [
    { id: 1, title: "Developer", description: "Description for option 1.", logo: "/system_developer.png" },
    { id: 2, title: "Project Manager", description: "Description for option 2.", logo: "/project_manager.png" },
    { id: 3, title: "System QA", description: "Description for option 3.", logo: "/system_quality.png" },
    { id: 4, title: "UI/UX Designer", description: "Description for option 4.", logo: "/uiux_designer.png" },
];

export default function CardSelection() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Select an Option</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option) => (
                    <label key={option.id} className={`border rounded-lg p-4 cursor-pointer transition duration-200 ${selectedOption === option.id.toString() ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-white"}`}>
                        <input
                            type="radio"
                            value={option.id}
                            checked={selectedOption === option.id.toString()}
                            onChange={handleOptionChange}
                            className="hidden"
                        />
                        <div className="flex flex-col items-center">
                            <h3 className="text-lg font-semibold">{option.title}</h3>
                            <p className="text-sm text-gray-600">{option.description}</p>
                            <img src={option.logo} className="w-[50px] h-[50px]" alt="" />
                        </div>
                    </label>
                ))}
            </div>
            <div className="mt-4">
                <button
                    onClick={() => alert(`Selected Option: ${selectedOption}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    disabled={!selectedOption}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}