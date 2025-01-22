import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleCheckMutal } from "../../functions/userFunctions";

export default function MutualCheck() {
    const [userCode, setUserCode] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        try {
            // Assuming handleCheckMutal is a synchronous function
            handleCheckMutal(roomCode, userCode);
            navigate(`/mutualMember/${roomCode}/${userCode}`);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-graybg">
            <div className="h-[470px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
                <h2>Check Responses</h2>
                <h2>CASE SENSITIVE</h2>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="my-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Code</label>
                        <input 
                            value={userCode}
                            onChange={(e) => setUserCode(e.target.value)}
                            type="text"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="User-123" 
                        />
                    </div>
                    <div className="my-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Code</label>
                        <input 
                            value={roomCode}
                            onChange={(e) => setRoomCode(e.target.value)}
                            type="text"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="123456" 
                        />
                    </div>
                    <div className="flex justify-between w-full">
                        <Link to="/">
                            <button 
                                type="button" 
                                className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Back to Home
                            </button>
                        </Link>
                        <button 
                            type="submit" 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Check Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
