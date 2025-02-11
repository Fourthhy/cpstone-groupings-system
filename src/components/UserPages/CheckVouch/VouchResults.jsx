import { Link, useParams } from "react-router-dom"
import { Button } from "flowbite-react";
import { Check, X } from "lucide-react";
import AnimatedContent from "../../ComponentAnimations/AnimatedContent";
import { handleMutualMember } from "../../../functions/checkProcess"
import { useState, useEffect } from "react"


export default function VouchResults() {
    const [members, setMembers] = useState([])
    const { roomCode, userCode } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const memberList = await handleMutualMember(roomCode, userCode); 
                setMembers(memberList)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()
    }, [])


    const selectedMembers = [
        { studentName: "Pagarigan, Shaina Karillyn", roleName: "project manager", profile: "project_manager.png", status: "mutual" },
        { studentName: "Isip, Christian Eliseo", roleName: "System Developer", profile: "system_developer.png", status: "mutual" },
        { studentName: "Olingay, Princess", roleName: "UI/UX Designer", profile: "uiux_designer.png", status: "mutual" },
        { studentName: "Olorvida, Trisha", roleName: "UI/UX Designer", profile: "uiux_designer.png", status: "mutual" },
    ];

    const handleRoleNameIndexTranslate = (index) => {
        switch (index) {
            case 1:
                return "System Developer";
            case 2:
                return "Project Manager";
            case 3:
                return "System QA";
            case 4:
                return "UI/UX Designer";
        }
    }

    const handleRoleProfileIndexTranslate = (index) => {
        switch (index) {
            case 1:
                return "system_developer.png";
            case 2:
                return "project_manager.png";
            case 3:
                return "system_quality.png";
            case 4:
                return "uiux_designer.png"
        }
    }

    // Use an array of booleans to track visibility for each member
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={true}
                    config={{ tension: 90, friction: 30 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                >
                    <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                        <div className="w-[380px] h-full flex flex-col justify-center items-center">
                            <h2 className="font-bold text-center text-2xl">Vouch Results</h2>
                            <h2 className="text-center text-gray-500 text-l mb-4">summary</h2>
                            <div className="grid grid-cols-1 grid-rows-auto gap-2">
                                {members.map((item, index) => (
                                    <div className="border rounded-[5px] px-[10px] py-[5px] grid grid-cols-10 grid-rows-1">
                                        <div className="flex col-span-9">
                                            <img src={`/${handleRoleProfileIndexTranslate(members[index].roleIndex)}`} alt="" className="w-[50px] h-[50px] mx-[10px]" />
                                            <div className="flex flex-col justify-center">
                                                <p className="text-sm text-gray-500">{atob(members[index].userCode)}</p>
                                                <p className="text-xs text-gray-500">{handleRoleNameIndexTranslate(members[index].roleIndex)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center ml-[5px]">
                                            {members[index].mutual == true ? <Check color="#2ab265" /> : <X color="#b42727"/>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full mt-[10px] grid grid-cols-2 gap-1">
                                <div className=" flex flex-col justify-center">
                                    <span className="text-xs">userCode: User-12323</span>
                                    <span className="text-xs">roomCode: User-12323</span>
                                </div>
                                <Link to="/"><Button color="gray" className="w-full">Go Back</Button></Link>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </>
    );
}