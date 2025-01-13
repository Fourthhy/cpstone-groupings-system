import { Link } from "react-router-dom"

const SelectName = () => {
    return (
        <>
            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What's your name?</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected value="US">student-name-01</option>
                <option value="CA">student-name-02</option>
                <option value="FR">student-name-03</option>
                <option value="DE">student-name-04</option>
                <option value="CA">student-name-06</option>
                <option value="FR">student-name-07</option>
                <option value="DE">student-name-08</option>
            </select>
        </>
    )
}

export default function App() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[470px] w-[450px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
                    <h2>Capstone Grouping</h2>
                    <form className="max-w-sm mx-auto">
                        <div className="my-5">
                            <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Code</label>
                            <input type="text" id="base-input" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <SelectName />
                        <div className="mt-[15px]">
                            <Link to="/mutualCheck">
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Check Responses</button>
                            </Link>
                            <Link to="/memberSelect">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Join Room</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

