import { useState, useEffect } from "react"
import { LogIn, X, EyeOff, Eye } from "lucide-react"
import { Button, TextInput, Label, Textarea } from "flowbite-react"
import { Link } from "react-router-dom"
import AnimatedContent from "../ComponentAnimations/AnimatedContent"
import Loading from "../ReusableComponents/Loading"



export default function RoomList() {
    const [isEnterPassword, setIsEnterPassowrd] = useState(false);
    const [isNewRoom, setIsNewRoom] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleShowPasword = () => {
        setShowPassword(!showPassword)
    }

    const namesCount = 0;

    const CreateRoom = () => {
        const [roomCodeCount, setRoomCodeCount] = useState(0);
        const [roonPasswordCount, setRoomPasswordCount] = useState(0);

        const handleRoomCodeChange = (event) => {
            setRoomCodeCount(event.target.value);
        }

        const handlePasswordCountChange = (event) => {
            setRoomPasswordCount(event.target.value);
        }

        useEffect(() => {
            roomCodeCount.length == 6 ? alert('6 length reached') : ''
        }, [roomCodeCount])

        useEffect(() => {
            roonPasswordCount.length == 6 ? alert('6 length reached') : ''
        }, [roonPasswordCount])


        return (
            <>
                <div className="w-[380px] h-full flex flex-col gap-3">
                    <div className="w-full grid grid-cols-2">
                        <h2 className="font-bold mt-[20px] text-left text-2xl mb-[10px]">New Room</h2>
                        <div className="flex justify-end items-center">
                            <X className="cursor-pointer" onClick={() => { setIsNewRoom(!isNewRoom) }} />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="input-gray" color="gray" value="Room Code" />
                        <div className="flex gap-5">
                            <TextInput type="text" placeholder="6-digit room code" required color="gray" />
                            <Button outline >Auto Generate</Button>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="input-gray" color="gray" value="Room Password" />
                        <div className="flex gap-5">
                            <TextInput type={showPassword ? `text` : `password`} placeholder="6-digit room passcode" required color="gray" />
                            <div className="flex items-center justify-center">
                                {showPassword ? (
                                    <Eye onClick={() => { handleShowPasword() }} className="cursor-pointer" />
                                ) : (
                                    <EyeOff onClick={() => { handleShowPasword() }} className="cursor-pointer" />
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="comment" value="Enter Names" />
                        <Textarea id="comment" placeholder="Enter names or paste here" required rows={4} />
                        <Label htmlFor="comment" value={`Total names: ${namesCount}`} />
                    </div>

                    <div className="w-full flex justify-end">
                        <Button
                            onClick={() => { setIsLoading(true) }}
                            outline
                            className="bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-[50%] mt-[5px]">Create Room</Button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={true}
                    config={{ tension: 90, friction: 30 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                >
                    <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                        {isLoading ? (<Loading origin={'roomlist'} path={'room'} purpose={'going to the room'} />) : (
                            <>
                                {isNewRoom ? (
                                    <CreateRoom />
                                ) : (
                                    <>
                                        {isEnterPassword ? (
                                            <>
                                                <div className="w-[380px] h-full flex flex-col justify-center items-center ">
                                                    <h2 className="font-bold mt-[20px] text-left text-2xl mb-[10px]">Enter Room Password</h2>
                                                    <TextInput type="text" placeholder="123456" required color="gray" className="w-[50%]" />

                                                    <Button
                                                        outline
                                                        onClick={() => { setIsLoading(true) }}
                                                        className="bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-[50%] mt-[10px]">Enter Room</Button>

                                                    <div className="flex justify-center items-center gap-[10px]">
                                                        <hr className="w-[65px] border-gray-300" />
                                                        <p className="text-gray-500">or</p>
                                                        <hr className="w-[65px] border-gray-300" />
                                                    </div>
                                                    <Button onClick={() => { setIsEnterPassowrd(!isEnterPassword) }} color="gray" className="w-[50%]">Go Back</Button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-[380px] h-full grid grid-rows-10">
                                                    <div className="row-span-1 w-full flex justify-evenly items-center">
                                                        <h2 className="font-bold mt-[20px] text-left text-2xl">Room List</h2>
                                                        <div className="mt-[10px] flex items-center gap-[2px]">
                                                            <div>
                                                                <Button
                                                                    onClick={() => { setIsNewRoom(!isNewRoom) }}
                                                                    outline
                                                                    className="bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full">Create Room
                                                                </Button>
                                                            </div>
                                                            <div>
                                                                <Link to="/"><Button color="gray">Sign Out</Button></Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col items-center gap-2 mt-[8px] row-span-9">

                                                        <div className="border rounded-[7px] w-[95%] grid grid-cols-9 gap-1">
                                                            <div className="col-span-8 flex justify-evenly">
                                                                <div className="flex flex-col items-start justify-center my-[5px]">
                                                                    <span className="text-sm font-bold w-full">Code</span>
                                                                    <span className="text-sm w-full">123---</span>
                                                                </div>
                                                                <div className="flex flex-col items-start justify-center my-[5px]">
                                                                    <span className="text-sm font-bold w-full">Names</span>
                                                                    <span className="text-sm w-full">27</span>
                                                                </div>
                                                                <div className="flex flex-col items-start justify-center my-[5px]">
                                                                    <span className="text-sm font-bold w-full">Vouching</span>
                                                                    <span className="text-sm w-full text-green-500">enabled</span>
                                                                </div>
                                                                <div className="flex flex-col items-start justify-center my-[5px]">
                                                                    <span className="text-sm font-bold w-full">Date Created</span>
                                                                    <span className="text-sm w-full">01-01-2025</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-span-1 flex items-center justify-center mr-[5px]">
                                                                <LogIn color="#0e2a26" className="cursor-pointer" onClick={() => { setIsEnterPassowrd(!isEnterPassword) }} />
                                                            </div>
                                                        </div>

                                                        <div className="border rounded-[7px] w-[95%] grid grid-cols-9 gap-1">
                                                            <div className="col-span-8 flex justify-evenly">
                                                                <div className="flex flex-col items-start justify-center my-[5px]">
                                                                    <span className="text-sm font-bold w-full">Code</span>
                                                                    <span className="text-sm w-full">123---</span>
                                                                </div>
                                                                <div className="flex flex-col items-start justify-center my-[5px]">
                                                                    <span className="text-sm font-bold w-full">Names</span>
                                                                    <span className="text-sm w-full">27</span>
                                                                </div>
                                                                <div className="flex flex-col items-start justify-center my-[5px]">
                                                                    <span className="text-sm font-bold w-full">Vouching</span>
                                                                    <span className="text-sm w-full text-red-500">disabled</span>
                                                                </div>
                                                                <div className="flex flex-col items-start justify-center my-[5px]">
                                                                    <span className="text-sm font-bold w-full">Date Created</span>
                                                                    <span className="text-sm w-full">01-01-2025</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-span-1 flex items-center justify-center mr-[5px]">
                                                                <LogIn color="#0e2a26" className="cursor-pointer" onClick={() => { setIsEnterPassowrd(!isEnterPassword) }} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </AnimatedContent>
            </div>
        </>
    )
}