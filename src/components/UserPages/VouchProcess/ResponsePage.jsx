import { useState, useEffect } from "react"
import { Eye, EyeClosed, Copy } from "lucide-react"
import Loading from "../../ReusableComponents/Loading"
import { Button } from "flowbite-react"
import { useParams } from "react-router-dom"
import { handleSearchUsercode } from "../../../functions/vouchProcess"

export default function ResponsePage() {
    const [isShow, setIsShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [userSecretCode, setUserSecretCode] = useState('User-1321')

    const { roomCode, userCode } = useParams()

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(userCode);
            alert("Copied!"); // Or better yet, show a brief success message in the UI
        } catch (err) {
            console.error("Copy failed:", err);
            alert("Copy failed!"); // Show an error message
        }
    };

    useEffect(() => {
        const userCodeSearch = async () => {
            const result = await handleSearchUsercode(roomCode, userCode)
            setUserSecretCode(result)
        }

        userCodeSearch();
    }, [])

    return (
        <>
            {isLoading ? (<Loading origin={'responsepage'} path={'/'} purpose={'back to home'} />) : (
                <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                    <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                        <div className="w-[380px] h-full flex flex-col justify-center items-center">
                            <h2 className="font-bold text-center text-lg m-4">Thank you for vouching, <br /> {atob(userCode)} </h2>
                            <div className="flex flex-col items-center gap-4">
                                <p>Here's your secret userCode: </p>
                                <div className="border-gray-400 border-[1px] w-[90%] rounded-[5px] py-3">
                                    <div className="flex justify-center items-center gap-3">
                                        <div
                                            onClick={() => { handleCopyClick() }}
                                            className="cursor-pointer hover:bg-gray-100">
                                            <Copy />
                                        </div>
                                        {isShow ? (
                                            <span> {userSecretCode} </span>
                                        ) : (
                                            "----------"
                                        )}
                                        <div
                                            className="cursor-pointer"
                                            onClick={() => { setIsShow(!isShow) }} >
                                            {isShow ? (<Eye />) : (<EyeClosed />)}
                                        </div>

                                    </div>
                                </div>
                                <p className="font-bold">Reminders:</p>
                                <ul>
                                    <li className="text-[13px]">Please do remember of the userCode, <strong>Copy it!</strong></li>
                                    <li className="text-[13px]">Public disclose of userCode is highly discouraged</li>
                                    <li className="text-[13px]">Wait for instructions to proceed</li>
                                </ul>
                                <Button 
                                    onClick={() => {setIsLoading(true)}}
                                    color="gray">
                                        Go Back to home
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}