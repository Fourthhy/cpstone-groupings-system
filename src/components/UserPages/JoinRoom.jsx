import { TextInput, Button } from "flowbite-react"
import { Link } from "react-router-dom"

export default function JoinRoom() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[380px] h-full flex flex-col justify-center items-center">
                        <h2 className="font-bold text-center text-2xl">Enter Room Code</h2>
                        <div className="mt-[20px] flex max-w-md flex-col gap-2">
                            <TextInput type="text" placeholder="e.g. 123456" required />
                            <Link to="/loading"><Button className="w-full" outline gradientDuoTone="cyanToBlue" type="submit" >Submit</Button> </Link>
                            <div className="flex justify-center items-center gap-[10px]">
                                <hr className="w-[65px] border-gray-300"/>
                                <p className="text-gray-500">or</p>
                                <hr className="w-[65px] border-gray-300"/>
                            </div>
                            <Link to="/"><Button color="gray" className="w-full">Go Back</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}