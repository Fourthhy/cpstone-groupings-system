import { useState } from "react" 
import { Link } from "react-router-dom"

export default function Response() {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const studentCode = "User-12aq"
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[500px] w-[450px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white gap-[10px]">
                    <h2>Your entry is submitted</h2>
                    <h2 className="text-gray-400">We'll keep it anonymous</h2>
                    <hr className="w-[400px]" />
                    <h2>Your user code is...</h2>
                    <p onClick={handleShow} className="text-xl text-gray-400 dark:text-white">{ show ?  studentCode : 'click to reveal' }</p>
                    <Link to="/">
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back to Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}