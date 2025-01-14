import { Link } from "react-router-dom"

const studentList = [
    { name: "Student-Name-01" },
    { name: "Student-Name-02" },
    { name: "Student-Name-03" },
    { name: "Student-Name-04" },
]
const roomCode = "65623"

const StudentResponse = () => {
    return (
        <>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Usernames
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((student) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {student.name}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

const SelectRole = () => {
    return (
        <>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="me-2">
                    <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Role1</a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Role2</a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Role3</a>
                </li>
            </ul>

        </>
    )
}

export default function AdminDashboard() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="min-h-[470px] max-h-full w-[400px] font-raleway  border-[1px] rounded-lg bg-white ">
                    <div className="my-[30px] flex justify-center items-center flex-col">
                        <h2>Dashboard - Fit for roles</h2>
                        <h2 className="text-gray-500">Room code: { roomCode }</h2>
                        <form className="max-w-sm mx-auto">
                            <div className="my-5">
                                <SelectRole />
                            </div>
                        </form>
                        <StudentResponse />
                        <div className="mt-[15px]">
                            <Link to="/adminLogin">
                                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Go back</button>
                            </Link>
                            <Link to="/voteBacklog">
                                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Logs</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}