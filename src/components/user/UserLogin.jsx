import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import studentList from "../../json/studentList.json"
import { fetchRoomList } from "../../functions/adminFunctions"

import { Button, TextInput, Label, Select } from "flowbite-react"

export default function App() {
    const [selectedName, setSelectedName] = useState('')
    const [enterCode, setEnterCode] = useState('')

    const [inputResponse, setInputResponse] = useState(0)

    const navigate = useNavigate()

    const customButtonDesign = "bg-gradient-to-br from-purple-200 to-cyan-200 text-white focus:ring-2 focus:ring-cyan-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800 w-full mt-[5px]";

    const SelectName = () => {
        const handleSelectChange = (e) => {
            setSelectedName(e.target.value)
        }
        return (
            <>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What's your name?</label>

                <Select
                    onChange={handleSelectChange}
                    value={selectedName}
                    className="bg-white">
                    <option>select a name</option>
                    {studentList.map((item, index) => (
                        <option key={index} >{atob(item.studentName)}</option>
                    ))}
                </Select>
            </>
        )
    }

    const handleSubmit = async (roomCode, selectedName) => {
        const encodedName = btoa(selectedName)
        const rooms = await fetchRoomList()
        rooms.map((room) => {
            if (room.roomCode === roomCode) {
                setInputResponse(1)
                navigate(`/memberSelect/${roomCode}/${encodedName}`)
            }
            else {
                setInputResponse(2)
                return false
            }
        })
    }

    const handleJoin = (selectedName) => {
        if (selectedName) { handleSubmit(enterCode, selectedName) }
        else if (selectedName === "...") { alert('name required') }
        else { alert('name required') }
    }

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
                <div className="h-[500px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white">

                    <h2>Capstone Grouping</h2>
                    <form
                        className="max-w-sm mx-auto"
                        onSubmit={(e) => {
                            handleSubmit(enterCode, selectedName)
                            e.preventDefault()
                        }}>
                        <div className="my-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Code</label>
                            <TextInput
                                required
                                value={enterCode}
                                onChange={(e) => setEnterCode(e.target.value)}
                                type="text"
                                color={inputResponse == 1 ? 'success' : 
                                        inputResponse == 2 ? 'failure' : 'gray'
                                }
                                placeholder='123456'
                                helperText={inputResponse == 1 ? 'room found!' : 
                                inputResponse == 2 ? 'room not found' : ''}
                                />
                        </div>
                        <SelectName />

                        <div className="mt-[20px]">
                            <Button
                                outline
                                type="submit"
                                onClick={() => { handleJoin(selectedName) }}
                                className={customButtonDesign}>Join Room
                            </Button>
                        </div>
                    </form>
                    <div className="my-[20px] flex justify-center items-center gap-5">
                        <hr className="border-gray-400 w-[50px]" />
                        <p>or</p>
                        <hr className="border-gray-400 w-[50px]" />
                    </div>
                    <div className="w-[50%]">
                        <Link to="/">
                            <Button
                                color="gray"
                                className="w-full">
                                Go Back
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

