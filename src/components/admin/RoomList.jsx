import { Link, useNavigate } from "react-router-dom"
import { FileX2 } from "lucide-react"
import { fetchRoomList, deleteRoom } from "../../functions/adminFunctions"
import { createCollection } from "../../functions/backendFunction"
import React, { useState, useEffect } from "react"

export default function RoomList() {
    const [roomList, setRoomList] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const rooms = await fetchRoomList();
            setRoomList(rooms);
        };
        fetchData();
    }, []);

    const handleCreateRoom = async () => {
        try {
            const roomCode = await createCollection()
            navigate(`/adminDashboard/${roomCode}`)
        } catch (err) {
            alert(err)
        }
    }

    const handleDeleteRoom = async (code) => {
        try {
            await deleteRoom(code)
            setRoomList(roomList.filter(room => room.roomCode !== code))
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-graybg">
            <div className="h-[470px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
                <div className="flex justify-center items-center gap-[20px]">
                    <h2>Room List</h2>
                    <button
                        onClick={handleCreateRoom}
                        type="button"
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Create Room
                    </button>
                </div>

                <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    {roomList.length === 0 ? (
                        <div>No rooms available.</div>
                    ) : (
                        roomList.map((room) => (
                            <div key={room.id} className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{room.roomCode}</dt>
                                <div className="flex">
                                    <Link to={`/room/${room.id}`}>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                            Enter
                                        </button>
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => { handleDeleteRoom(room.roomCode) }}
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        <FileX2 />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </dl>
                <Link to="/">
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Back to Home </button>
                </Link>
            </div>
        </div>
    )
}