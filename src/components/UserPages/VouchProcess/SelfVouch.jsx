import { Label, Select, Button } from "flowbite-react";
import { useState } from "react";
import AnimatedContent from "../../ComponentAnimations/AnimatedContent";
import Loading from "../../ReusableComponents/Loading";

export default function SelfVouch() {
    const [isLoading, setIsLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null); // Ensure you have state for selected option
    const [selectedName, setSelectedName] = useState('');

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
        "Tinagsa, Lenie Jane"]

    const customButtonDesign = "bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full mt-4";

    const roles = [
        { id: 1, title: "System Developer", description: "Description for option 1.", logo: "/system_developer.png" },
        { id: 2, title: "Project Manager", description: "Description for option 2.", logo: "/project_manager.png" },
        { id: 3, title: "System QA", description: "Description for option 3.", logo: "/system_quality.png" },
        { id: 4, title: "UI/UX Designer", description: "Description for option 4.", logo: "/uiux_designer.png" },
    ];

    const SelectRole = () => {

        const handleOptionChange = (event) => {
            setSelectedOption(event.target.value);
        };

        return (
            <>
                <h2 className="font-bold text-center text-lg mb-4">What is your role?</h2>
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
        );
    };

    const SelectName = () => {
        const handleSelectChange = (event) => {
            setSelectedName(event.target.value);
        };
        return (
            <>
                <h2 className="font-bold text-center text-2xl mb-4">Who are you?</h2>
                <div className="flex w-[75%] flex-col gap-2">
                    <Label htmlFor="names" value="Select your name" />
                    <Select id="names" required onChange={handleSelectChange} value={selectedName}>
                        <option value="">Select a name...</option>
                        {listofnames.map((name, index) => (
                            <option key={index} value={name}>{name}</option>
                        ))}
                    </Select>
                </div>
            </>
        )
    }


    return (
        <>
            {isLoading ? <Loading origin={'selfvouch'} path={'membervouch'} purpose={"submitting self vouch"} /> : (
                <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                    <AnimatedContent distance={50} direction="vertical" reverse={true} config={{ tension: 90, friction: 30 }} initialOpacity={0.2} animateOpacity scale={1} threshold={0.2}
                    >
                        <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                            <div className="w-[380px] h-full flex flex-col justify-center items-center">

                                <div className="w-[380px] h-full flex flex-col justify-center items-center">
                                    <SelectName />
                                    <div className="mt-[20px]">
                                        <SelectRole />
                                    </div>
                                </div>
                                <div className="h-[25%] w-[100%]">
                                    {
                                        selectedOption && selectedName ? (
                                        <Button
                                            outline
                                            gradientDuoTone="purpleToBlue"
                                            className={customButtonDesign}
                                            onClick={() => { setIsLoading(true) }}>
                                            Submit
                                        </Button>) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            )}

        </>
    )
}