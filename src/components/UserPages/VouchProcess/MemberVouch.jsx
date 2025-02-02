import { Button, Select } from "flowbite-react";
import { Pencil, Save } from "lucide-react";
import { useState } from "react";

export default function MemberVouch() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isHidden, setIsHidden] = useState('');
    const [isView, setIsView] = useState(false);

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
            <div className="w-[95%] mb-2">
                <Select required onChange={(e) => handleSelect(e.target.value)}>
                    <option value="">...</option>
                    {listofnames.map((name, index) => (
                        <option key={index} value={index} className="text-xs">{name}</option>
                    ))}
                </Select>
            </div>
        );
    };

    const handleSelect = (index) => {
        setSelectedIndex(Number(index)); // Make sure to parse index to a number
        setIsHidden('hidden');
        setIsView(true);
        console.log("selected index: " + index);
    };

    const handleUnselect = () => {
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
                <img src={`/${previewProfile}`} className="z-0 w-[50px] h-[50px] ml-[5px] mb-[10px]" alt="" />
                {isView ? (
                    <div className="text-center">
                        <p className="text-xl">{studentName}</p>
                        <hr className="w-[100px]" />
                        <p className="text-s">{roleName}</p>
                    </div>
                ) : ""}
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
                                        <Save color="#6dc4d0" onClick={handleUnselect} className="transition-all duration-300 ease-in-out" />
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
