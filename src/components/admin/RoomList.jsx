import { Link } from "react-router-dom"
import {
    FileX2,
} from "lucide-react"

const roomList = [
    { code: "room-00aa", date: "01-01-1999", },
    { code: "room-00aa", date: "01-01-1999", },
    { code: "room-00aa", date: "01-01-1999", },
    { code: "room-00aa", date: "01-01-1999", }
]

export default function RoomList() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[470px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
                    <h2>Room List</h2>
                    <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        {roomList.map((room) => (
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{room.code}</dt>
                                <div className="flex">
                                    <Link to="/adminDashboard">
                                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Enter</button>
                                    </Link>
                                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><FileX2 /></button>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </>
    )
}