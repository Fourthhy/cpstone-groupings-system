import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { handleSearchUsercode } from "../../functions/userFunctions";

export default function Response() {
    const [show, setShow] = useState(false);
    const [userCodename, setUserCodename] = useState('');
    const [loading, setLoading] = useState(true); // To handle loading state

    const handleShow = () => {
        setShow(!show);
    };

    const { roomCode, userCode } = useParams();

    useEffect(() => {
        const fetchUserCodename = async () => {
            try {
                const codename = await handleSearchUsercode(roomCode, userCode);
                setUserCodename(codename);
            } catch (error) {
                console.error("Error fetching user codename:", error);
                setUserCodename('Error fetching codename');
            } finally {
                setLoading(false);
            }
        };

        fetchUserCodename();
    }, [roomCode, userCode]); // Added dependencies to re-run when roomCode or userCode change

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-graybg">
            <div className="h-[500px] w-[400px] font-raleway flex justify-center items-center flex-col border-[1px] rounded-lg bg-white gap-[10px]">
                <h2>Your entry is submitted</h2>
                <h2 className="text-gray-400">We'll keep it anonymous</h2>
                <hr className="w-[400px]" />
                <h2>Your user code is...</h2>
                {loading ? (
                    <p className="text-xl text-gray-400 dark:text-white">Loading...</p> // Show loading state while fetching
                ) : (
                    <p onClick={handleShow} className="text-xl text-gray-400 dark:text-white">
                        {show ? userCodename : 'click to reveal'}
                    </p>
                )}
                <Link to="/">
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
