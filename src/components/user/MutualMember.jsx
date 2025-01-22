import { Link, useParams } from "react-router-dom"
import { handleMutualMember } from "../../functions/userFunctions"
import { useState, useEffect } from "react"

export default function MutualMember() {
    const { roomCode, userCode } = useParams()

    const [memberObject, setMemberObject] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
              const matter = await handleMutualMember(roomCode, userCode); 
              setMemberObject(matter); 
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
          fetchData()
    }, [])

    const MutualItem = ({item}) => {
        return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { atob(item.userCode) } 
            </th>
            <td className="px-6 py-4">
                { item.role }
            </td>
            <td className="px-6 py-4 text-green-500">
                Mutual
            </td>
        </tr>
        )
    }


    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[500px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Student Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Role 
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                       Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {memberObject.map((item, index) => (
                                        <MutualItem item={item} key={index} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-[15px]">
                        <Link to="/">    
                            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Go back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}