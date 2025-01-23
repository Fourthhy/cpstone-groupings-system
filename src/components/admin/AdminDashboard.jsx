import { Link, useParams } from "react-router-dom";
import { displayVouchForRoles } from "../../functions/adminFunctions";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
    const [active, setActive] = useState(0);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const { roomCode } = useParams();

    const buttonDesign = `py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedResults = await displayVouchForRoles(roomCode);

                // Log the fetched results for debugging
                console.log("Fetched Results:", fetchedResults);

                if (Array.isArray(fetchedResults)) {
                    setResults(fetchedResults); // Update state
                } else {
                    console.warn("Fetched data is not an array:", fetchedResults);
                    setResults([]); // Default to empty array if invalid
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setResults([]); // Default to empty array on error
            } finally {
                setLoading(false); // Stop loading
            }
        };

        if (roomCode) {
            fetchData();
        } else {
            console.warn("No roomCode provided!");
            setLoading(false); // Stop loading even if roomCode is missing
        }
    }, [roomCode]);

    if (loading) {
        return <p>Loading...</p>; // Show a loading message or spinner
    }

    if (!results.length) {
        return <p>No data available</p>; // Show a message if no results
    }

    const SelectRole = () => {
        const classNameActive = `text-blue-600 inline-block p-4 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500`;
        const classNameInactive = `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`;

        return (
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {["DEV", "PM", "UI/UX", "NO ROLE"].map((role, index) => (
                    <li
                        key={index}
                        className="me-2"
                        onClick={() => setActive(index)}
                    >
                        <p className={active === index ? classNameActive : classNameInactive}>
                            {role}
                        </p>
                    </li>
                ))}
            </ul>
        );
    };

    const DisplayRole = ({ index }) => {
        const selectedRole = results[index] || []; // Safely access the role data

        if (!selectedRole.length) {
            return (
                <tr>
                    <td colSpan="3" className="px-6 py-4 text-center">
                        No data for this role
                    </td>
                </tr>
            );
        }

        // Group data into chunks of 3
        const rows = [];
        for (let i = 0; i < selectedRole.length; i += 3) {
            rows.push(selectedRole.slice(i, i + 3));
        }

        return (
            <>
                {rows.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        {row.map((student, colIndex) => (
                            <td
                                key={`student-${colIndex}`}
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {student}
                            </td>
                        ))}
                        {/* Add empty cells if the last row has fewer than 3 items */}
                        {row.length < 3 &&
                            Array.from({ length: 3 - row.length }).map((_, idx) => (
                                <td
                                    key={`empty-${idx}`}
                                    className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap"
                                >
                                    -
                                </td>
                            ))}
                    </tr>
                ))}
            </>
        );
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-graybg">
            <div className="min-h-[470px] max-h-full w-[400px] font-raleway border-[1px] rounded-lg bg-white">
                <div className="my-[30px] flex justify-center items-center flex-col">
                    <h2>Admin Dashboard - Fit for roles</h2>
                    <h2 className="text-gray-500">Room code: {roomCode} </h2>
                    <div className="my-5">
                        <SelectRole />
                    </div>
                    <table className="min-w-full border-collapse border border-gray-300">
                        <tbody>
                            {results.length > 0 && <DisplayRole index={active} />}
                        </tbody>
                    </table>
                    <div className="mt-[15px]">
                        <Link to="/adminLogin">
                            <button type="button" className={buttonDesign}>
                                Go Home
                            </button>
                        </Link>
                        <Link to="/voteBacklog">
                            <button type="button" className={buttonDesign}>
                                View Logs
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
