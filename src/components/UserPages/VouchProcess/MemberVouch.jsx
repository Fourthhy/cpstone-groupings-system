import { Button, Select } from "flowbite-react";
import { Pencil, Save, Check, X } from "lucide-react";
import { useState } from "react";
import Loading from "../../ReusableComponents/Loading";
import studentList from "../../../json/studentList.json"

export default function MemberVouch() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isHidden, setIsHidden] = useState('');
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [selectedMembers, setSelectedMembers] = useState([
        { studentName: "bm9uZQ==", roleName: "N/A", profile: "undefined.png", previewProfile: "/undefined.png", filled: false, roleIndex: 0 },
        { studentName: "bm9uZQ==", roleName: "N/A", profile: "undefined.png", previewProfile: "/undefined.png", filled: false, roleIndex: 0 },
        { studentName: "bm9uZQ==", roleName: "N/A", profile: "undefined.png", previewProfile: "/undefined.png", filled: false, roleIndex: 0 },
        { studentName: "bm9uZQ==", roleName: "N/A", profile: "undefined.png", previewProfile: "/undefined.png", filled: false, roleIndex: 0 },
    ]);

    const countTrueFilled = () => {
        return selectedMembers.filter(member => member.filled === true).length;
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedMember, setSelectedMember] = useState('')
    const [selectedProfile, setSelectedProfile] = useState('')
    const [roleIndex, setRoleIndex] = useState(0)

    const handleSubmitMember = (index) => {
        
        // 1. Create a *single* copy of the selectedMembers array:
        const updatedMembers = [...selectedMembers];
        alert(roleIndex)

        // 2. Input validation:
        if (Array.isArray(selectedMember) || selectedOption === '' || selectedMember === '') {
            alert('Requirement fill incomplete'); // More informative message
            return; // Stop execution if selectedMember is an array (which it shouldn't be)
        }

        // 3. Update the correct member's data in the *single* copy:
        updatedMembers[index - 1] = {
            ...updatedMembers[index - 1], // Spread existing properties to keep them
            studentName: selectedMember,
            roleName: selectedOption,
            previewProfile: selectedProfile, // Make sure selectedProfile is defined
            filled: true, // Set filled to true
            roleIndx: roleIndex
        };

        // 4. Update the state *once* with the updated array:
        setSelectedMembers(updatedMembers);

        // 5. Reset input fields (after state update):
        setSelectedMember('');
        setSelectedOption('');
        setSelectedProfile(''); // Make sure setSelectedProfile exists and is used correctly
    };

    const SelectName = ({ index }) => {

        return (
            <div className="w-auto m-4">
                <span className="text-s">Select Member</span>
                <Select
                    required
                    className="bg-white"
                    value={selectedMember}
                    onChange={(item) => { setSelectedMember(item.target.value) }}
                >
                    <option>...</option>
                    {studentList.map((name, index) => (
                        <option key={index} value={name.studentName} className="text-xs ">{atob(name.studentName)}</option>
                    ))}
                </Select>
            </div>
        );
    };

    const SelectRole = ({ index }) => {

        const roles = [
            { id: 1, title: "System Developer", description: "Description for option 1.", logo: "/system_developer.png" },
            { id: 2, title: "Project Manager", description: "Description for option 2.", logo: "/project_manager.png" },
            { id: 3, title: "System QA", description: "Description for option 3.", logo: "/system_quality.png" },
            { id: 4, title: "UI/UX Designer", description: "Description for option 4.", logo: "/uiux_designer.png" },
        ];

        return (
            <>
                <div className="grid grid-cols-2 gap-1">
                    {roles.map((role) => (
                        <label
                            key={role.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 transform 
                    ${selectedOption === role.title ? "border-white-500 bg-gradient-to-l from-purple-100 to-cyan-100 scale-105" : "border-gray-300 bg-white scale-100"}`}
                        >
                            <input
                                type="radio"
                                value={role.id} // Use role.id as the value
                                checked={selectedOption === role.title} // Check against role.id
                                onChange={() => {
                                    setSelectedOption(role.title)
                                    setSelectedProfile(roles[role.id - 1].logo)
                                    setRoleIndex(role.id)
                                }} // Update with role.id
                                className="hidden"
                            />
                            <div className="flex items-center gap-1">
                                <img src={role.logo} className="w-[35px] h-[35px]" alt="" />
                                <h3 className="text-xs">{role.title}</h3>
                            </div>
                        </label>
                    ))}
                </div>
            </>
        )
    }

    const handleSelect = (index) => {
        setSelectedIndex(Number(index)); // Make sure to parse index to a number
        setIsHidden('hidden');
        setIsView(true);
    };

    const handleUnselect = () => {
        setIsEdit(false)
        setIsView(false);
        setIsHidden('visible');
        setSelectedIndex(0);
    };

    const handleSave = () => {
        setIsEdit(false)
        setIsView(true)
    }

    const SelectedMemberView = ({ index }) => {

        return (
            <div className=" w-full h-full flex flex-col justify-center items-center border-[1px]">
                {isView ? (
                    <>
                        {isEdit ? ( //EDIT THE VOUCHED MEMBER
                            <div className="text-center flex flex-col items-center">
                                <SelectName index={index} />
                                <SelectRole index={index} />
                            </div>
                        ) : ( //VIEW THE VOUCH MEMBER
                            <>
                                <img src={`${selectedMembers[index - 1].previewProfile}`} className="z-0 w-[50px] h-[50px] ml-[5px] mb-[10px]" alt="" />
                                <p className="text-xl text-gray-500">{atob(selectedMembers[index - 1].studentName)}</p>
                                <hr className="w-[40%]" />
                                <p className="text-s text-gray-500">{selectedMembers[index - 1].roleName}</p>
                                <div className="absolute z-2 bottom-[25%]" onClick={() => { setIsEdit(true) }}>
                                    <Pencil className="mt-[10px]" color="#6dc4d0" />
                                </div>
                            </>
                        )}
                    </>
                ) : ( // BASUC GRID PREVIEW
                    <div className="flex flex-col items-center">
                        <img src={`${selectedMembers[index - 1].previewProfile}`} className="z-0 w-[50px] h-[50px] ml-[5px] mb-[10px]" alt="" />
                        <p className="text-xs text-gray-500">{selectedMembers[index - 1].roleName}</p>
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            {isLoading ? (
                <Loading origin={'membervouch'} path={'responsepage'} purpose={'submitting vouch'} />
            ) : (
                <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                    <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                        <div className="w-[380px] h-full flex flex-col justify-center items-center">
                            <h2 className="font-bold text-center text-lg">Vouch for members</h2>
                            <h2 className="text-center text-gray-500 text-s">Requirement: {countTrueFilled()} / 3</h2>
                            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-[70%] rounded-s">
                                {/* Show all content initially */}
                                {[1, 2, 3, 4].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative border-[1px] w-full h-full transition-all duration-500 ease-in-out transform rounded-s ${selectedIndex === item ? 'col-span-full row-span-full' : isHidden}`}>
                                        {/* Transition the icons between Pencil and Save */}

                                        <div className="w-full h-full absolute z-1 flex justify-end mt-[5px] ml-[-5px]">
                                            <div
                                                className={`absolute transition-all duration-300 transform ${isView ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                                                <Pencil color="#6dc4d0" onClick={() => handleSelect(item)} className="transition-all duration-300 ease-in-out" />

                                            </div>
                                            <div
                                                className={`transition-all duration-300 transform ${isView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                                {isEdit ? (
                                                    <>
                                                        <Save color="#6dc4d0" onClick={() => {
                                                            handleSave()
                                                            handleSubmitMember(item)
                                                        }}
                                                            className="transition-all duration-300 ease-in-out" />
                                                    </>
                                                ) : (
                                                    <X color="#6dc4d0" onClick={handleUnselect} className="transition-all duration-300 ease-in-out" />
                                                )}

                                            </div>
                                        </div>
                                        <SelectedMemberView index={item} />
                                    </div>
                                ))}
                            </div>
                            {
                               isView ? '' :
                               countTrueFilled() >= 3 ? (<Button
                                onClick={() => { setIsLoading(true) }}
                                outline
                                gradientDuoTone="purpleToBlue"
                                className="bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full mt-4">
                                Submit
                            </Button>) : '' 
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
