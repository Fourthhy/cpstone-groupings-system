import { Modal, Dropdown } from "flowbite-react"
import { useState } from "react"
import { LogIn } from "lucide-react"

export default function Room() {
    const [showModal, setShowModal] = useState(true)
    return (
        <>
            <div className="h-screen w-screen flex items-ce nter justify-center bg-gray-100 text-gray-700">
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

                                    <div className="col-span-1 flex flex-col justify-center items-start">
                                        <div className="flex items-center">
                                            <h2 className="font-bold text-left text-m">Room code: </h2>
                                            <span className="text-xs">&nbsp; 123456</span>
                                        </div>
                                        <div className="flex items-center">
                                            <h2 className="font-bold text-left text-m">Room passcode: </h2>
                                            <span className="text-xs">&nbsp; 654321</span>
                                        </div>
                                    </div>

                                    <div className="col-span-3 flex items-center justify-evenly gap-1">
                                        <div className="flex items-center gap-1">
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
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-evenly">
                                        <div>
                                            <Dropdown label="Sort by" >
                                                <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                    Self Vouch
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                    Not Vouched
                                                </Dropdown.Item>
                                            </Dropdown>
                                        </div>
                                        <LogIn className="cursor-pointer" />
                                    </div>

                                </div>

                            </div>

                            <div className="border row-span-5 col-span-1">
                                Carousel Statistics
                            </div>

                            <div className="border row-span-8 col-span-5">
                                Paginated Table
                            </div>

                            <div className="border row-span-4 col-span-1">
                                Settings
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}