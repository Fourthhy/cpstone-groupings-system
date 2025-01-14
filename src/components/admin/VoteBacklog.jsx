// Suggested code may be subject to a license. Learn more: ~LicenseLog:3875564553.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1411787280.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3455933181.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3279744693.
import { Link } from "react-router-dom"

const studentList = [
    { name: "User-00aa" },
    { name: "User-00aa" },
    { name: "User-00aa" },
    { name: "User-00aa" },
    { name: "User-00aa" },
    { name: "User-00aa" },
    { name: "User-00aa" },
    { name: "User-00aa" },
]

const roomCode = "65623";

const rows = studentList.reduce((acc, student, index) => {
    // Calculate the row index
    const rowIndex = Math.floor(index / 3);

    // If the row doesn't exist, create it
    if (!acc[rowIndex]) {
        acc[rowIndex] = [];
    }

    // Push the current student into the appropriate row
    acc[rowIndex].push(student);

    return acc;
}, []);

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
            <div class="relative">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Usernames
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {row.map((student) => (
                                    <th
                                        key={student.name}
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {student.name}
                                    </th>
                                ))}
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
                    <div className="my-[30px] flex justify-center items-center flex-col">
                        <h2>Admin Dashboard - Vote Backlogs</h2>
                        <h2 className="text-gray-500">Room code: { roomCode } </h2>
                        <form className="max-w-sm mx-auto">
                            <div className="my-5 gap-[10px]">
                                <SelectName />
                                <StudentResponse /> {/* Display 3 rows */}
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