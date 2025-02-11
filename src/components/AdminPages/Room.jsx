import { Modal, Tooltip, Label, Table, Pagination } from "flowbite-react"
import { useState, useEffect } from "react"
import { LogIn, Check, X } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { getRoomDate, countAllDocs, fetchAllDocs as fetchRoomDocs } from "../../functions/adminFunctions"
import Loading from "../ReusableComponents/Loading"

export default function Room() {
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(5) // Number of items per page
    const [docCount, setDocCount] = useState(0)
    const [roomDate, setRoomDate] = useState('')
    const { roomCode } = useParams()

    const [allDocs, setAllDocs] = useState([])
    const [display, setDisplay] = useState([])
    const [currentDocs, setCurrentDocs] = useState([])

    // Fetch data on mount
    useEffect(() => {
        async function fetchData() {
            setLoading(true)

            try {
                const itemsCount = await countAllDocs(roomCode)
                setDocCount(itemsCount)

                const roomDateRes = await getRoomDate(roomCode)
                setRoomDate(roomDateRes)

                let documents = await fetchRoomDocs(roomCode)
                documents = documents.slice(0, -1) // Remove the last element
                setAllDocs(documents)
            } catch (error) {
                console.error("Error fetching data:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [roomCode])

    // Process & sort documents when allDocs is updated
    useEffect(() => {
        if (allDocs.length === 0) return

        const decodeID = (id) => atob(id)

        const sortedArray = allDocs
            .map(item => ({
                id: decodeID(item.id),
                isVouched: item.isVouched,
                role: item.role
            }))
            .sort((a, b) => a.id.localeCompare(b.id)) // Fix sorting logic

        setDisplay(sortedArray)
    }, [allDocs])

    // Update `currentDocs` whenever `display` or `currentPage` changes
    useEffect(() => {
        const docsSliced = display.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        setCurrentDocs(docsSliced)
    }, [display, currentPage, itemsPerPage])

    const totalPages = Math.ceil(docCount / itemsPerPage)

    const transformIndex = (index) => {
        switch (index) {
            case 1: return "System Developer"
            case 2: return "Project Manager"
            case 3: return "System QA"
            case 4: return "UI/UX Developer"
            default: return "No role"
        }
    }

    return (
        <>
            {loading ? (
                <Loading origin={'room'} path={`room/${roomCode}`} purpose={'Loading your data'} />
            ) : (
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
                                {/* Exit Room Button */}
                                <div className="flex flex-col items-start justify-center row-span-1 col-span-full">
                                    <div className="w-full h-full flex items-center justify-end gap-10 mr-[10px]">
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

                                {/* Room Info */}
                                <div className="ml-[7px] row-span-5 col-span-1">
                                    <div className="flex flex-col justify-evenly items-start w-full h-full">
                                        <div><h2 className="font-bold text-m">Room code:</h2><span className="text-xs"> {roomCode}</span></div>
                                        <div><h2 className="font-bold text-m">Room Created at:</h2><span className="text-xs"> {roomDate?.date} </span></div>
                                        <div><h2 className="font-bold text-m">Total items</h2><span className="text-xs"> {docCount - 1} </span></div>
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="row-span-8 col-span-5 ml-[5px]">
                                    <div className="grid grid-rows-10">
                                        <div className="row-span-9">
                                            <Table stripped={true}>
                                                <Table.Head>
                                                    <Table.HeadCell>Name</Table.HeadCell>
                                                    <Table.HeadCell>Self Role</Table.HeadCell>
                                                    <Table.HeadCell>is Vouched?</Table.HeadCell>
                                                </Table.Head>
                                                <Table.Body className="divide-y">
                                                    {currentDocs.map((doc, index) => (
                                                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                            <Table.Cell>{doc.id}</Table.Cell>
                                                            <Table.Cell>{transformIndex(doc.role)}</Table.Cell>
                                                            <Table.Cell>
                                                                {doc.isVouched ? <Check color="#2ab265" /> : <X color="#c82828" />}
                                                            </Table.Cell>
                                                        </Table.Row>
                                                    ))}
                                                </Table.Body>
                                            </Table>
                                        </div>
                                        <div className="row-span-1 flex overflow-x-auto sm:justify-center">
                                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
