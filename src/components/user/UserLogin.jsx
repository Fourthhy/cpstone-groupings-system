import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import studentList from "../../json/studentList.json"
import { fetchRoomList } from "../../functions/adminFunctions"

export default function App() {
    const [selectedName, setSelectedName] = useState('')
    const [enterCode, setEnterCode] = useState('')
    const navigate = useNavigate()
    
    const SelectName = () => {
        const handleSelectChange = (e) => {
            setSelectedName(e.target.value)
        }
        return (
            <>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What's your name?</label>
    
                <select
                    onChange={handleSelectChange}
                    value={selectedName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>...</option>
                    {studentList.map((item, index) => (
                        <option key={index} >{atob(item.studentName)}</option>
                    ))}
                </select>
            </>
        )
    }

    const handleSubmit = async (roomCode, selectedName) => {
        const encodedName = btoa(selectedName)
        const rooms = await fetchRoomList()
        rooms.map((room) => {
            if (room.roomCode === roomCode) {
                navigate(`/memberSelect/${roomCode}/${encodedName}`)
            }
            else {
                return false
            }
        })
    }

    const handleJoin = (selectedName) => {
        if (selectedName) {handleSubmit(enterCode, selectedName)}
        else if  (selectedName === "...") { alert('name required') }
        else { alert('name required') }
    }

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[470px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
                    
                    <h2>Capstone Grouping</h2>
                    { selectedName }
                    <form 
                        className="max-w-sm mx-auto"
                        onSubmit={(e) => {
                            handleSubmit(enterCode,selectedName)
                            e.preventDefault()
                            }}>
                        <div className="my-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Code</label>
                            <input 
                                required
                                value={enterCode}
                                onChange={(e)=> setEnterCode(e.target.value)}
                                type="text"
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <SelectName />
                        <div className="mt-[15px]">
                            <Link to="/mutualCheck">
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Check Responses</button>
                            </Link>
                                <button 
                                    type="submit" 
                                    onClick={() => {handleJoin(selectedName)}}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Join Room
                                </button>
                        </div>
                    </form>
                    <hr />
                    <div className="mt-[20px]">
                        <Link to="/adminLogin">
                            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Host a room</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

