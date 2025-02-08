import { TextInput, Button, Label } from "flowbite-react"
import { Link } from "react-router-dom"
import Loading from "../ReusableComponents/Loading"
import { useState } from "react"

export default function AdminLogin() {
    const [isLoading, setIsLoading] = useState(false)

    const [inputResponse, setInputResponse] = useState(0)
    // 0 for gray
    // 1 for success
    //2 for failure

    const HelperTextValidCredentials = () => {
        return (
            <>
                <span>Logging in... </span>
            </>
        )
    }

    const HelperTextInvalidCredentials = () => {
        return (
            <>
                <span>invalid admin code </span>
            </>
        )
    }

    return (
        <>
            {isLoading ? (
                <>
                    <Loading origin={'adminlogin'} path={'roomlist'} purpose={'welcome admin'} />
                </>
            ) : (
                <>
                    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                        <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                            <div className="w-[380px] h-full flex flex-col justify-center items-center">
                                <h2 className="font-bold mt-[20px] text-center text-2xl">Enter Admin Code</h2 >
                                <h2 className="text-center text-sm px-[10px]"><i>we value your participation as admin but first enter the given admin code for verification</i></h2>

                                <div className="mt-[20px] flex max-w-md flex-col gap-2">
                                    <TextInput 
                                        type="text" 
                                        placeholder="enter admin code" 
                                        required
                                        color={inputResponse == 0 ? 'gray' : inputResponse == 1 ? 'success' : inputResponse == 2 ? 'failure' : ''} 
                                        helperText={
                                            inputResponse == 1 ? <HelperTextValidCredentials /> :
                                            inputResponse == 2 ? <HelperTextInvalidCredentials /> : ''
                                        }
                                        />
                                    <Button
                                        onClick={() => { setIsLoading(true) }}
                                        outline
                                        className="bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full mt-[5px]">
                                        Submit
                                    </Button>
                                    <div className="flex justify-center items-center gap-[10px]">
                                        <hr className="w-[65px] border-gray-300" />
                                        <p className="text-gray-500">or</p>
                                        <hr className="w-[65px] border-gray-300" />
                                    </div>
                                    <Link to="/"><Button color="gray" className="w-full">Go Back</Button></Link>
                                </div>
                            </div >
                        </div >
                    </div >
                </>
            )
            }

        </>
    )
}