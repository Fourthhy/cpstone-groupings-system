import { useState } from "react"
import { handleAdminCodeValidation } from "../../functions/adminFunctions"
import { useNavigate, Link } from "react-router-dom"

export default function AdminLogin() {
    const [adminCodeInput, setAdminCodeInput] = useState('')

    const navigate = useNavigate();
    const handleValidationNavigation = (adminCode) => {
        handleAdminCodeValidation(adminCode) ? navigate('/roomList') : alert('Invalid Admin Code')
}
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[470px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
                    <h2>Admin Login</h2>
                    <form 
                        className="max-w-sm mx-auto" 
                        onSubmit={(e) => {
                            handleValidationNavigation(adminCodeInput); 
                            setAdminCodeInput('')
                            e.preventDefault();
                        }}>

                        <div className="my-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Admin Code</label>

                            <input 
                                required 
                                value={adminCodeInput}
                                onChange={(e) => setAdminCodeInput(e.target.value)}
                                type="text" 
                                id="base-input" 
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                        </div>
                        <Link to="/">
                            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Back to Home </button>
                        </Link>
                        
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-[20px]">Enter</button>

                    </form>
                </div>
            </div>
        </>
    )
}