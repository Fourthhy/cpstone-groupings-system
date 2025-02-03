import { Button, Select } from "flowbite-react";
import { Pencil, Save, Check, X } from "lucide-react";
import { useState } from "react";

export default function MemberVouch() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isHidden, setIsHidden] = useState('');
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false)

    const [selectedMember1, setSelectedMember1] = useState({
        name: "No name 1",
        role: "No role",
        profile: "undefined.png",
        previewProfile: "undefined.png"
    })
    const [selectedMember2, setSelectedMember2] = useState({
        name: "No name 2",
        role: "No role",
        profile: "undefined.png",
        previewProfile: "undefined.png"
    })
    const [selectedMember3, setSelectedMember3] = useState({
        name: "No name 3",
        role: "No role",
        profile: "undefined.png",
        previewProfile: "undefined.png"
    })
    const [selectedMember4, setSelectedMember4] = useState({
        name: "No name 4",
        role: "No role",
        profile: "undefined.png",
        previewProfile: "undefined.png"
    })

    const [selectedOption, setSelectedOption] = useState(null);


    const listofnames = [
        "Asaldo, Rizalyne",
        "Bactol, Allen",
        "Bagaporo, Lianor",
        "Borja, Astrid",
        "Catibog, Trisha Mae",
        "Cuanan, Sherelyn",
        "Degula, Elloisa",
        "Dicdican, Roylyn Joy",
        "Ebajan, Rodolfo",
        "Imperial, Jerome",
        "Isip, Christian Eliseo",
        "Latina, Daniel",
        "Luzon, Kylie",
        "Magpayo, Kristel",
        "Malapit, Ma. Hermosa",
        "Mañabo, John Miguel",
        "Manansala, Jasmine",
        "Marco, Justine Jynne Patrice",
        "Medina, Alicia Jane",
        "Miclat, Shiela Mae",
        "Olingay, Princess",
        "Olorvida, Trisha May",
        "Pagarigan, Shaina Karillyn",
        "Pregunta, Ma. Ellaine",
        "Ramos, Rafael",
        "Reyez, Lorenz Genesis",
        "Santos, Aerrol Kyle",
        "Santos, Mark Joseph",
        "Sarcia, Sidney John",
        "Talen, Jean Rose",
        "Tinagsa, Lenie Jane"
    ];

    const customButtonDesign = "bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full mt-4";

    const SelectName = () => {
        return (
            <div className="w-auto mt-4">
                <span className="text-s">Select Member</span>
                <Select required className="bg-white">
                    <option value="">...</option>
                    {listofnames.map((name, index) => (
                        <option key={index} value={index} className="text-xs ">{name}</option>
                    ))}
                </Select>
            </div>
        );
    };

    const SelectRole = () => {

        const roles = [
            { id: 1, title: "System Developer", description: "Description for option 1.", logo: "/system_developer.png" },
            { id: 2, title: "Project Manager", description: "Description for option 2.", logo: "/project_manager.png" },
            { id: 3, title: "System QA", description: "Description for option 3.", logo: "/system_quality.png" },
            { id: 4, title: "UI/UX Designer", description: "Description for option 4.", logo: "/uiux_designer.png" },
        ];

        const handleOptionChange = (event) => {
            setSelectedOption(event.target.value);
        };

        return (
            <>
                <div className="grid grid-cols-2 gap-1">
                    {roles.map((role) => (
                        <label
                            key={role.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 transform 
                    ${selectedOption === role.id.toString() ? "border-white-500 bg-gradient-to-l from-purple-100 to-cyan-100 scale-105" : "border-gray-300 bg-white scale-100"}`}>
                            <input
                                type="radio"
                                value={role.id}
                                checked={selectedOption === role.id.toString()}
                                onChange={handleOptionChange}
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
        console.log("selected index: " + index);
    };

    const handleUnselect = () => {
        setIsEdit(false)
        setIsView(false);
        setIsHidden('visible');
        setSelectedIndex(0);
    };

    const SelectedMemberView = ({ index }) => {
        let studentName = '';
        let roleName = '';
        let profile = '';
        let previewProfile = '';

        switch (index) {
            case 1:
                studentName = selectedMember1.name
                roleName = selectedMember1.role
                profile = selectedMember1.profile
                previewProfile = selectedMember1.previewProfile
                break;
            case 2:
                studentName = selectedMember2.name
                roleName = selectedMember2.role
                profile = selectedMember2.profile
                previewProfile = selectedMember2.previewProfile
                break;
            case 3:
                studentName = selectedMember3.name
                roleName = selectedMember3.role
                profile = selectedMember3.profile
                previewProfile = selectedMember3.previewProfile
                break;
            case 4:
                studentName = selectedMember4.name
                roleName = selectedMember4.role
                profile = selectedMember4.profile
                previewProfile = selectedMember4.previewProfile
                break;
        }

        return (
            <div className=" w-full h-full flex flex-col justify-center items-center border-[1px]">
                {isView ? (
                    <>
                        {isEdit ? ( //EDIT THE VOUCHED MEMBER
                            <div className="text-center flex flex-col items-center">
                                <SelectRole />
                                <SelectName />
                            </div>
                        ) : ( //NOT EDIT THE VOUCH MEMBER
                            <>
                                <img src={`/${previewProfile}`} className="z-0 w-[50px] h-[50px] ml-[5px] mb-[10px]" alt="" />
                                <p className="text-xl">{studentName}</p>
                                <hr className="w-[40%]" />
                                <p className="text-s">{roleName}</p>
                                <div className="border absolute z-2 bottom-[25%]" onClick={() => {setIsEdit(true)}}>
                                    <Pencil className="mt-[10px]" color="#6dc4d0" />
                                </div>
                            </>
                        )}
                    </>
                ) : ( // BASUC GRID PREVIEW
                    <img src={`/${previewProfile}`} className="z-0 w-[50px] h-[50px] ml-[5px] mb-[10px]" alt="" />
                )}
            </div>
        )
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
            <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                <div className="w-[380px] h-full flex flex-col justify-center items-center">
                    <h2 className="font-bold text-center text-lg mb-4">Vouch for members</h2>
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
                                        <X color="#6dc4d0" onClick={handleUnselect} className="transition-all duration-300 ease-in-out" />
                                    </div>
                                </div>
                                <SelectedMemberView index={item} />
                            </div>
                        ))}
                    </div>
                    <Button
                        outline
                        gradientDuoTone="purpleToBlue"
                        className={customButtonDesign}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
