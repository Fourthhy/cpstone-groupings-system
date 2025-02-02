import { Button, Select, Label, Carousel } from "flowbite-react"

export default function MemberVouch() {

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

    const SelectName = () => {
        return (
            <>
                <div className="w-[95%] mb-2">
                    <Select required>
                        <option>...</option>
                        {listofnames.map((name) => (
                            <option className="text-xs">{name}</option>
                        ))}
                    </Select>
                </div>
            </>
        )
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
            <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                <div className="w-[380px] h-full flex flex-col justify-center items-center">
                    <h2 className="font-bold text-center text-lg mb-4">Vouch for members</h2>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-[70%]">
                        <div className="border-[1px] flex flex-col items-center justify-end">
                            <div className="w-full h-full">
                                <Carousel slide={false}>
                                    <p>option 1</p>
                                    <p>option 2</p>
                                    <p>option 3</p>
                                    <p>option 4</p>
                                </Carousel>
                            </div>
                            <SelectName />
                        </div>
                        <div className="border-[1px]">Content</div>
                        <div className="border-[1px]">Content</div>
                        <div className="border-[1px]">Content</div>
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
    )
}