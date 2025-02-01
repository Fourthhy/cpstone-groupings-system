import { Button } from "flowbite-react";
import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-graybg  text-gray-700">
                <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[380px]">
                        <h2 className="font-bold mt-[20px] text-center text-2xl">Member Vouch System</h2>
                        <p className="mt-[20px] text-center text-sm">Are you ready to compose your ideal group and foster trust among your peers?</p>
                        <h2 className="font-bold mt-[20px]">Features</h2>
                        <ul>
                            <li className="ml-[5px] mt-[10px] text-sm"><b>Recorded Vouching Sessions</b>: Vouching sessions are recorded for transparency and accountability.</li>
                            <li className="ml-[5px] mt-[10px] text-sm"><b>Anonymity Guaranteed</b>: Names are transcribed into userCodes, ensuring complete anonymity during the voting process.</li>
                            <li className="ml-[5px] mt-[10px] text-sm"><b>Mutual Vouching</b>: Build a culture of trust, accountability, mutual cooperation and agreement within your groups.</li>
                        </ul>
                        <div className="mt-[20px] text-center flex items-center flex-col">
                            <b>Proceed as..</b>
                            <div className="flex gap-[10px] mt-[20px]">
                                <Link to=""><Button color="gray">Host</Button></Link>
                                <Link to="/joinroom"><Button color="gray">User</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}