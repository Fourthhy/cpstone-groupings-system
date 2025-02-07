import { Modal, Dropdown, Tooltip, Button, Label, ToggleSwitch } from "flowbite-react"
import { useState } from "react"
import { LogIn, Info } from "lucide-react"
import { Link } from "react-router-dom"
import Chart from "./RadarChart"

export default function Room() {
    const [showModal, setShowModal] = useState(true)
    const [showGraph, setShowGraph] = useState(false)
    const [isVouch, setIsVouch] = useState(false)
    const [isChecking, setIsChecking] = useState(false)


    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <div className="h-[95%] w-[95%] font-raleway flex justify-center items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[98%] h-[98%] flex flex-col justify-center items-center">
                        <Modal show={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Header>Wow this has a lot of content!</Modal.Header>
                            <Modal.Body>
                                <p className="text-gray-600">
                                    In order to give you a one-look insight, we made this a desktop size so you can see all of the information you needed, enjoy vouching!
                                </p>
                            </Modal.Body>
                        </Modal>

                        <div className="grid grid-rows-9 grid-cols-6 h-full w-full">

                            <div className="flex flex-col items-start justify-center row-span-1 col-span-full"> {/*TOP LAYER*/}

                                <div className="w-full h-full grid grid-cols-5">

                                    <div className="col-span-3 flex items-center justify-evenly gap-1">
                                        {/* <div className="flex items-center gap-1">
                                            <img src="/system_developer.png" alt="" className="w-[40px] h-[40px]" />
                                            <span>1</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src="/project_manager.png" alt="" className="w-[40px] h-[40px]" />
                                            <span>1</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src="/uiux_designer.png" alt="" className="w-[40px] h-[40px]" />
                                            <span>1</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src="/system_quality.png" alt="" className="w-[40px] h-[40px]" />
                                            <span>1</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src="/undefined.png" alt="" className="w-[40px] h-[40px]" />
                                            <span>1</span>
                                        </div> */}
                                    </div>

                                    <div className="col-span-2 flex items-center justify-evenly">
                                        <div>
                                            <Dropdown label="Sort by" >

                                                <Dropdown.Header>
                                                    Self Vouch Roles
                                                </Dropdown.Header>

                                                <Tooltip content="Show System Developers only" style="light" placement="left" animation="duration-400">
                                                    <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                        System Developer
                                                    </Dropdown.Item>
                                                </Tooltip>

                                                <Tooltip content="Show Project Managers only" style="light" placement="left" animation="duration-400">
                                                    <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                        Projet Manager
                                                    </Dropdown.Item>
                                                </Tooltip>

                                                <Tooltip content="Show UI/UX Designers only" style="light" placement="left" animation="duration-400">
                                                    <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                        UI/UX Designer
                                                    </Dropdown.Item>
                                                </Tooltip>

                                                <Tooltip content="Show System QAs only" style="light" placement="left" animation="duration-400">
                                                    <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                        System QA
                                                    </Dropdown.Item>
                                                </Tooltip>

                                                <Dropdown.Divider />

                                                <Tooltip content="Shows who are not vouched by others" style="light" placement="left" animation="duration-400">
                                                    <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                        Not Vouched
                                                    </Dropdown.Item>
                                                </Tooltip>
                                            </Dropdown>
                                        </div>
                                        <Link to="/">
                                            <div className="flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer rounded-sm">
                                                <Label htmlFor="input-gray" color="gray" value="Exit Room" />
                                                <Tooltip content="Exit the room" style="light" placement="bottom" animation="duration-400">
                                                    <LogIn className="cursor-pointer" />
                                                </Tooltip>
                                            </div>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                            <div className="ml-[7px] row-span-5 col-span-1">

                                <div className="flex flex-col justify-evenly items-start w-full h-full">
                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Room code: </h2>
                                        <span className="text-xs">&nbsp; 123456</span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Room passcode: </h2>
                                        <span className="text-xs">&nbsp; 654321</span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Room Created at: </h2>
                                        <span className="text-xs">&nbsp; 01-01-2025 </span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Total items</h2>
                                        <span className="text-xs">&nbsp; 27 </span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Total vouched</h2>
                                        <span className="text-xs">&nbsp; 15 / 27 </span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Vouching</h2>
                                        <span className="text-xs">&nbsp; enabled </span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Response Check</h2>
                                        <span className="text-xs">&nbsp; disabled </span>
                                    </div>

                                </div>

                            </div>

                            <div className="border row-span-8 col-span-5">
                                Paginated Table
                            </div>

                            <div className="row-span-1 col-span-1 w-full h-full flex flex-col justify-center items-center">
                                <Button outline onClick={() => { setShowGraph(true) }}>View Statistics</Button>
                                <Modal dismissible show={showGraph} onClose={() => setShowGraph(false)} >
                                    <Modal.Header>Vouching Statistics</Modal.Header>
                                    <Modal.Body>
                                        <div className="h-[250px]">
                                            <Chart />
                                        </div>
                                    </Modal.Body>
                                </Modal>

                            </div>

                            <div className="row-span-2 col-span-1">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-full flex justify-center ">
                                        Settings
                                    </div>

                                    <div className="w-full border flex items-center justify-between">
                                        <div className="grid grid-cols-3 w-full">
                                            <div className="border col-span-1 flex items-center">
                                                <ToggleSwitch checked={isVouch} onChange={() => setIsVouch(!isVouch)} />
                                            </div>
                                            <div className="col-span-2 border flex items-center">
                                                <Label value="Enable Vouching" className="text-xs" />
                                            </div>
                                        </div>
                                            <Tooltip content="Enable vouch entry for items" style="light" placement="top" animation="duration-600">
                                                <Info color="#000000" className="w-[15px] h-[15px]" />
                                            </Tooltip>
                                    </div>

                                    <div className="w-full border flex items-center justify-between">
                                        <div className="grid grid-cols-3 w-full">
                                            <div className="border col-span-1 flex items-center">
                                                <ToggleSwitch checked={isChecking} onChange={() => setIsChecking(!isChecking)} />
                                            </div>
                                            <div className="col-span-2 border flex items-center">
                                                <Label value="Enable Checking" className="text-xs" />
                                            </div>
                                        </div>
                                        <Tooltip content="Enable vouch checking for items" style="light" placement="top" animation="duration-600">
                                            <Info color="#000000" className="w-[15px] h-[15px]" />
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}