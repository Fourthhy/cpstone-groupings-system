import { useState, useEffect } from "react";
import { displayVouchForRoles } from "./adminFunctions"

export default function Auto2() {
    const [results, setResults ] = useState([])
    const [active, setActive] = useState(0)
    const [loading, setLoading] = useState(true); // Loading state

    const roomCode = '438255'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const out = await displayVouchForRoles(roomCode);
                setResults(out); // Set the results with the fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchData(); // Call the async function
    }, []);

    if (loading || !results.length) {
        return <p>Loading...</p>; // Show a loading message or spinner
    }
    
    const DisplayRole = ({index}) => {
        const roleName = ["DEV", "PM", "UIUX", "NOROLE"]
        return (
            <ul>
                { roleName[index] }
                {results[index].map((role) => (
                    <li key={role}>{role}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <div className="flex gap-[20px]">
                <button className="border-black border-[1px]" onClick={() => setActive(0)}> DEV </button>
                <button className="border-black border-[1px]" onClick={() => setActive(1)}> PM </button>
                <button className="border-black border-[1px]" onClick={() => setActive(2)}> UIUX </button>
                <button className="border-black border-[1px]" onClick={() => setActive(3)}> NOROLE </button>
            </div>
            <div>
                <h2>Results:</h2>
                <div>
                    {active == 0 ? <DisplayRole index={0}/> : null}
                    {active == 1 ? <DisplayRole index={1}/> : null}
                    {active == 2 ? <DisplayRole index={2}/> : null}
                    {active == 3 ? <DisplayRole index={3}/> : null} 
                </div>
            </div>
        </div>
    );
}