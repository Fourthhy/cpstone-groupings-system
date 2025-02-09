import { Modal, Dropdown, Tooltip, Button, Label, Table, Pagination } from "flowbite-react"
import { useState, useEffect } from "react"
import { LogIn, Info, Check, X } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import Chart from "./RadarChart"
import { getRoomDate, countAllDocs, fetchAllDocs as fetchRoomDocs } from "../../functions/adminFunctions"

export default function Room() {
    const [showModal, setShowModal] = useState(true)
    const [showGraph, setShowGraph] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(5) // number of items per page

    const [docCount, setDocCount] = useState(0)
    const [roomDate, setRoomDate] = useState('')
    const { roomCode } = useParams()

    const [allDocs, setAllDocs] = useState([])

    useEffect(() => {
        const fetchCount = async () => {
            const itemsCount = await countAllDocs(roomCode)
            setDocCount(itemsCount)
        }

        fetchCount()

        const fetchDate = async () => {
            const roomDate = await getRoomDate(roomCode)
            setRoomDate(roomDate)
        }

        fetchDate()

        const fetchDocs = async () => {
            const documents = await fetchRoomDocs(roomCode)
            setAllDocs(documents)
        }

        fetchDocs()
    }, [roomCode])

    // Pagination logic
    const totalPages = Math.ceil(docCount / itemsPerPage)

    const currentDocs = allDocs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <div className="h-[95%] w-[95%] font-raleway flex justify-center items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[98%] h-[98%] flex flex-col justify-center items-center">
                        <Modal show={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Header>Wow this has a lot of content!</Modal.Header>
                            <Modal.Body>
                                <p className="text-gray-600">
                                    In order to give you a one-look insight, we made this a desktop size so you can see all of the information you needed, enjoy vouching!
                                </p>
                            </Modal.Body>
                        </Modal>

                        <div className="grid grid-rows-9 grid-cols-6 h-full w-full">
                            <div className="flex flex-col items-start justify-center row-span-1 col-span-full">
                                <div className="w-full h-full flex items-center justify-end gap-10 mr-[10px]">
                                    {/* <div>
                                        <Dropdown outline label="Sort by">
                                            <Dropdown.Header>
                                                Self Vouch Roles
                                            </Dropdown.Header>
                                            <Tooltip content="Show System Developers only" style="light" placement="left" animation="duration-400">
                                                <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                    System Developer
                                                </Dropdown.Item>
                                            </Tooltip>
                                            <Tooltip content="Show Project Managers only" style="light" placement="left" animation="duration-400">
                                                <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                    Projet Manager
                                                </Dropdown.Item>
                                            </Tooltip>
                                            <Tooltip content="Show UI/UX Designers only" style="light" placement="left" animation="duration-400">
                                                <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                    UI/UX Designer
                                                </Dropdown.Item>
                                            </Tooltip>
                                            <Tooltip content="Show System QAs only" style="light" placement="left" animation="duration-400">
                                                <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                    System QA
                                                </Dropdown.Item>
                                            </Tooltip>
                                            <Dropdown.Divider />
                                            <Tooltip content="Shows who are not vouched by others" style="light" placement="left" animation="duration-400">
                                                <Dropdown.Item onClick={() => alert('Self Vouch')}>
                                                    Not Vouched
                                                </Dropdown.Item>
                                            </Tooltip>
                                        </Dropdown>
                                    </div> */}
                                    <Link to="/roomList">
                                        <div className="flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer rounded-sm">
                                            <Label htmlFor="input-gray" color="gray" value="Exit Room" />
                                            <Tooltip content="Exit the room" style="light" placement="bottom" animation="duration-400">
                                                <LogIn className="cursor-pointer" />
                                            </Tooltip>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="ml-[7px] row-span-5 col-span-1">
                                <div className="flex flex-col justify-evenly items-start w-full h-full">
                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Room code: </h2>
                                        <span className="text-xs">&nbsp; {roomCode}</span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Room Created at: </h2>
                                        <span className="text-xs">&nbsp; {roomDate?.date} </span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Total items</h2>
                                        <span className="text-xs">&nbsp; {docCount - 1} </span>
                                    </div>

                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="font-bold text-left text-m">Total vouched</h2>
                                        <span className="text-xs">&nbsp; 15 / 27 </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row-span-8 col-span-5 ml-[5px]">
                                <div className="grid grid-rows-10">
                                    <div className="row-span-9">
                                        <Table stripped={true}>
                                            <Table.Head>
                                                <Table.HeadCell>Name</Table.HeadCell>
                                                <Table.HeadCell>Self Role</Table.HeadCell>
                                                <Table.HeadCell>is Vouched ? </Table.HeadCell>
                                            </Table.Head>
                                            <Table.Body className="divide-y">
                                                {currentDocs.map((doc, index) => (
                                                    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                        <Table.Cell>{atob(doc.id)}</Table.Cell>
                                                        <Table.Cell>{doc.role === "" ? "no role" : doc.role}</Table.Cell>
                                                        <Table.Cell>
                                                            <div className="flex items-center justify-start gap-3 w-full">
                                                                <div>
                                                                    {doc.isVouched ? <Check color="#2ab265" /> : <X color="#c82828" />}
                                                                </div>
                                                                <div>
                                                                    <Info className="cursor-pointer" />
                                                                </div>
                                                            </div>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                ))}
                                            </Table.Body>
                                        </Table>
                                    </div>
                                    <div className="row-span-1 flex overflow-x-auto sm:justify-center">
                                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(number) => setCurrentPage(number)} />
                                    </div>
                                </div>
                            </div>

                            {/* <div className="row-span-1 col-span-1 w-full h-full flex flex-col justify-center items-center">
                                <Button outline onClick={() => { setShowGraph(true) }}>View Statistics</Button>
                                <Modal dismissible show={showGraph} onClose={() => setShowGraph(false)} >
                                    <Modal.Header>Vouching Statistics</Modal.Header>
                                    <Modal.Body>
                                        <div className="h-[250px]">
                                            <Chart />
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
