import { Link } from "react-router-dom"

export default function MutualMember() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[500px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">


                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Student Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Role 
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Student_Member_Name
                                    </th>
                                    <td class="px-6 py-4">
                                        Role-1
                                    </td>
                                    <td class="px-6 py-4 text-green-500">
                                        Mutual
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Student_Member_Name
                                    </th>
                                    <td class="px-6 py-4">
                                        Role-1
                                    </td>
                                    <td class="px-6 py-4 text-red-500">
                                        Not Mutual
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Student_Member_Name
                                    </th>
                                    <td class="px-6 py-4">
                                        Role-1                                      
                                    </td>
                                    <td class="px-6 py-4 text-green-500">
                                        Mutual
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-[15px]">
                        <Link to="/">    
                            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Go back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}