import { Link } from "react-router-dom"

const studentList = [
    { name: "Student-Name-1" },
    { name: "Student-Name-2" },
    { name: "Student-Name-1" },
]

const SelectName = () => {
    return (
        <>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {studentList.map((student) => (
                    <option value="US"> {student.name} </option>
                ))}
            </select>
        </>
    )
}

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

export default function VoteBacklog() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[470px] max-h-full w-[400px] font-raleway border-[1px] rounded-lg bg-white">
                    <div className="my-[30px] flex justify-center items-center flex-col overflow-scroll">
                    <h2>Dashboard - Vote Backlogs</h2>
                        <form className="max-w-sm mx-auto">
                            <div className="my-5 gap-[10px]">
                                <SelectName />
                                <StudentResponse />
                            </div>
                        </form>
                        <Link to="/adminDashboard">
                            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Dashboard</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}