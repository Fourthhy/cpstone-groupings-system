import { Link, useParams, useNavigate } from "react-router-dom";
import studentList from "../../json/studentList.json";
import { useState } from "react";
import { handleAddToSubCollection } from "../../functions/userFunctions"
//src/functions/userFunctions.js

export default function MemberSelect() {
    const { roomCode, userCode } = useParams();
    const navigate = useNavigate()
    const originalRoleList = ['DEV', 'PM', 'UI/UX1', 'UI/UX2'];
    const [roleList, setRoleList] = useState([]);
    const [roleSelected, setRoleSelected] = useState('')

    const [selectedMember1, setSelectedMember1] = useState('')
    const [selectedMember2, setSelectedMember2] = useState('')
    const [selectedMember3, setSelectedMember3] = useState('')

    const handleSelect = (e) => {
        const selectedRole = e;
        setRoleSelected(e);
        setRoleList(originalRoleList.filter((role) => role != selectedRole));
    };

    const SelectRole = () => {
        return (
            <div className="flex flex-col items-center">
                <label className="block mb-2 text-s font-medium text-gray-900 dark:text-white">Select role</label>
                <select
                    value={roleSelected}
                    onChange={(e) => handleSelect(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[calc(100% + 20px)] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>...</option>
                    {originalRoleList.map((role, index) => (
                        <option key={index} value={role}>{role}</option>
                    ))}
                </select>
            </div>
        );
    };

    const SelectMember1 = () => {
        const HandleMemberSelect1 = (e) => {
            setSelectedMember1(e)
        }
        return (
            <div className="flex flex-col items-center">
                <select
                    value={selectedMember1}
                    onChange={(e) => { HandleMemberSelect1(e.target.value) }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>...</option>
                    {studentList.map((item, index) => (
                        <option key={index}>{atob(item.studentName)}</option>
                    ))}
                </select>
            </div>
        );
    };

    const SelectMember2 = () => {
        const HandleMemberSelect2 = (e) => {
            setSelectedMember2(e)
        }
        return (
            <div className="flex flex-col items-center">
                <select
                    value={selectedMember2}
                    onChange={(e) => { HandleMemberSelect2(e.target.value) }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>...</option>
                    {studentList.map((item, index) => (
                        <option key={index}>{atob(item.studentName)}</option>
                    ))}
                </select>
            </div>
        );
    };

    const SelectMember3 = () => {
        const HandleMemberSelect3 = (e) => {
            setSelectedMember3(e)
        }
        return (
            <div className="flex flex-col items-center">
                <select
                    value={selectedMember3}
                    onChange={(e) => { HandleMemberSelect3(e.target.value) }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>...</option>
                    {studentList.map((item, index) => (
                        <option key={index}>{atob(item.studentName)}</option>
                    ))}
                </select>
            </div>
        );
    };

    const handleSubmit = async () => {
        try {
            await handleAddToSubCollection(
                roomCode,
                userCode,
                roleSelected,
                selectedMember1,
                selectedMember2,
                selectedMember3,
                roleList[0],
                roleList[1],
                roleList[2],
            )
            navigate(`/selectResponse/${roomCode}/${userCode}`)
        } catch (err) {
            alert(err)
        }
    }


    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg">
                <div className="h-[500px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                        {atob(userCode)} <br />
                                    </th>
                                    <td className="px-6 py-4">
                                        <SelectRole />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <SelectMember1 />
                                    </th>
                                    <td className="px-6 py-4 text-black">
                                        {roleList.length == 4 ? "N/A" : roleList[0]}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <SelectMember2 />
                                    </th>
                                    <td className="px-6 py-4 text-black">
                                        {roleList.length == 4 ? "N/A" : roleList[1]}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <SelectMember3 />
                                    </th>
                                    <td className="px-6 py-4 text-black">
                                        {roleList.length == 4 ? "N/A" : roleList[2]}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-[15px]">
                        <button 
                            type="button" 
                            onClick={handleSubmit} 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
