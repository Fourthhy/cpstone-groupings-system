import { TextInput, Button, Label } from "flowbite-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import Loading from "../../ReusableComponents/Loading.jsx"
export default function JoinRoom() {

    const [isLoading, setIsLoading] = useState(false)
    const [inputResponse, setInputResponse] = useState(0)
    // 0 for neutral
    // 1 for success
    // 2 for failure

    const [invalidReason, setInvalidReason] = useState(0)
    // 0 for invalid room code
    // 1 for room not open

    const handleResponse = () => {
        inputResponse == 1 ? setInputResponse(1) : inputResponse == 2 ? setInputResponse(2) : setInputResponse(0)
        if (inputResponse == 2) {
            //This will set the reason why the room is closed, for example, the set reason is 0 (invalid room code)
            setInvalidReason(0)
        }
    }

    const HelperTextSucess = () => {
        return (
            <>
                <span>Logging in..</span>
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
                <span>Room is Closed</span>
            </>
        )
    }


    const customButtonDesign = "bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full mt-[5px]";

    const JoinRoomForm = () => {
        return (
            <>
                <h2 className="font-bold text-center text-2xl">Enter Room Code</h2>
                <div className="mt-[20px] flex max-w-md flex-col gap-2">

                    <Label htmlFor="input-gray" color="gray" value="Room Code" />
                    <TextInput
                        type="text"
                        placeholder="e.g. 123456"
                        required
                        color={inputResponse == 1 ? "success" : inputResponse == 2 ? "failure" : "gray"}
                        helperText={ inputResponse == 1 ? <HelperTextSucess /> : 
                                     inputResponse == 2 ? 
                                     invalidReason == 0 ? <HelperTextInvalidCode /> : 
                                     invalidReason == 1 ? <HelperTextVouchDisabled /> : '' : ''
                        }
                    />
                    {/*color="gray" for failed*/}

                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            setIsLoading(true)
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
        )
    }

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[380px] h-full flex flex-col justify-center items-center">
                        {isLoading ? <Loading origin={'joinroom'} path={'selfvouch'} purpose={"loading"} /> : <JoinRoomForm />}
                    </div>
                </div>
            </div>
        </>
    )
}