import { TextInput, Button, Label } from "flowbite-react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../../ReusableComponents/Loading.jsx"
import { handleCheckVouchRoom } from "../../../functions/checkProcess"

export default function CheckVouch() {
    const [roomCode, setRoomCode] = useState('')
    const [userCode, setUserCode] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [roomList, setRoomList] = useState()

    const [inputResponseRoom, setInputResponseRoom] = useState(0)
    // 0 for gray
    // 1 for success
    // 2 for failure

    const [invalidReasonRoom, setInvalidReasonRoom] = useState(0)
    // 0 for no matching room code
    // 1 for ineligible for checking 

    const [inputResponseUser, setInputResponseUser] = useState(0)
    // 0 for gray
    // 1 for success
    // 2 for failure

    const customButtonDesign = "bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full mt-[5px]";

    const handleSubmit = async () => {
        try {
            const check = await handleCheckVouchRoom(roomCode, userCode);
            if (check) {
                setInputResponseRoom(1)
                setInputResponseUser(1)
                // navigate(`/mutualMember/${roomCode}/${check}`);
            } else {
                setInputResponseRoom(2)
                setInvalidReasonRoom(0)
                // alert('Room/User not found');
            }
        } catch (error) {
            setInputResponseRoom(2)
            setInvalidReasonRoom(0)
            // console.error("Error checking room/user:", error);
            // alert('An error occurred. Please try again later.');
        }
    };

    const HelperTextSucessRoom = () => {
        return (
            <>
                <span>Room Found..</span>
            </>
        )
    }

    const HelperTextInvalidCode = () => {
        return (
            <>
                <span>Invalid Room Code</span>
            </>
        )
    }

    const HelperTextVouchDisabled = () => {
        return (
            <>
                <span>Room is ineligible for checking</span>
            </>
        )
    }

    const HelperTextSucessUser = () => {
        return (
            <>
                <span>User Found..</span>
            </>
        )
    }

    const HelperTextInvalidUserCode = () => {
        return (
            <>
                <span>Invalid User Code</span>
            </>
        )
    }
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[380px] h-full flex flex-col justify-center items-center">
                        {isLoading ? <Loading origin={'checkvouch'} path={'vouchresults'} purpose={"checking responses"} /> : (
                            <>
                                <h2 className="font-bold text-center text-2xl">Check Vouch Results</h2>
                                <div className="mt-[20px] flex max-w-md flex-col gap-2">

                                    <Label htmlFor="input-gray" color="gray" value="Room Code" />
                                    <TextInput
                                        value={roomCode}
                                        onChange={(e) => setRoomCode(e.target.value)}
                                        id="room-code"
                                        placeholder="enter room code"
                                        required
                                        color={inputResponseRoom == 0 ? "gray" : inputResponseRoom == 1 ? "success" : inputResponseRoom == 2 ? 'failure' : ''}
                                        helperText={
                                            inputResponseRoom == 1 ? <HelperTextSucessRoom /> :
                                                inputResponseRoom == 2 ?
                                                    invalidReasonRoom == 0 ? <HelperTextInvalidCode /> :
                                                        invalidReasonRoom == 1 ? <HelperTextVouchDisabled /> : '' : ''
                                        } />

                                    <Label htmlFor="input-gray" color="gray" value="User Code" />
                                    <TextInput
                                        value={userCode}
                                        onChange={(e) => { setUserCode(e.target.value) }}
                                        type="text"
                                        placeholder="User-12345"
                                        required
                                        color={inputResponseUser == 0 ? 'gray' : inputResponseUser == 1 ? 'success' : inputResponseUser == 2 ? 'failure' : ''}
                                        helperText={
                                            inputResponseUser == 1 ? <HelperTextSucessUser /> :
                                                inputResponseUser == 2 ? <HelperTextInvalidUserCode /> : ''
                                        }
                                    />
                                    {/*color="gray" for failed*/}

                                    <Button
                                        onClick={(e) => {
                                            handleSubmit()
                                        }}
                                        outline
                                        className={customButtonDesign}
                                    >
                                        Submit
                                    </Button>

                                    <div className="flex justify-center items-center gap-[10px]">
                                        <hr className="w-[65px] border-gray-300" />
                                        <p className="text-gray-500">or</p>
                                        <hr className="w-[65px] border-gray-300" />
                                    </div>
                                    <Link to="/"><Button color="gray" className="w-full">Go Back</Button></Link>
                                </div>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}