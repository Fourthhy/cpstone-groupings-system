import { Modal } from "flowbite-react"
import { useState } from "react"

export default function Room() {
    const [showModal, setShowModal] = useState(true)
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <div className="h-[95%] w-[95%] font-raleway flex justify-center items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[98%] h-[98%] flex flex-col justify-center items-center border">
                        <Modal show={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Header>Wow this has a lot of content!</Modal.Header>
                            <Modal.Body>
                                <p className="text-gray-600">
                                    In order to give you a one-look insight, we made this a desktop size so you can see all of the information you needed, enjoy vouching!
                                </p>
                            </Modal.Body>
                        </Modal>

                        <div className="grid grid-rows-9 h-full w-full">

                            <div className="flex flex-col items-start justify-center row-span-1">
                                <div>
                                    <div className="flex items-center">
                                        <h2 className="font-bold text-left text-m">Room code: </h2>
                                        <span className="text-xs">&nbsp; 123456</span>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className="font-bold text-left text-m">Room passcode: </h2>
                                        <span className="text-xs">&nbsp; 654321</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border row-span-8">
                                content 2
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}