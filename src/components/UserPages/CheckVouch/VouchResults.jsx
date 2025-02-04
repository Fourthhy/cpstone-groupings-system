import { useState } from "react";
import { Link } from "react-router-dom"
import { Carousel, Button } from "flowbite-react";
import { StepBack, StepForward, Eye, Check } from "lucide-react";
import AnimatedContent from "../../ComponentAnimations/AnimatedContent";


export default function VouchResults() {
    const [isGridView, setIsGridView] = useState(false)
    const selectedMembers = [
        { studentName: "Marco, Justine Jynne Patrice", roleName: "project manager", profile: "project_manager.png", status: "mutual" },
        { studentName: "No name 2", roleName: "N/A", profile: "undefined.png", status: "mutual" },
        { studentName: "No name 3", roleName: "N/A", profile: "undefined.png", status: "mutual" },
        { studentName: "No name 4", roleName: "N/A", profile: "undefined.png", status: "mutual" },
    ];

    // Use an array of booleans to track visibility for each member
    const [showStatuses, setShowStatuses] = useState(selectedMembers.map(() => false));

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

                            {isGridView ? (
                                <>
                                    <h2 className="text-center text-gray-500 text-xl mb-4">summary</h2>
                                    <div className="grid grid-cols-1 grid-rows-auto gap-2">
                                        {selectedMembers.map((item, index) => (
                                            <div className="border rounded-[5px] px-[10px] py-[5px] grid grid-cols-10 grid-rows-1">
                                                <div className="flex col-span-9">
                                                    <img src={`/${selectedMembers[index].profile}`} alt="" className="w-[50px] h-[50px] mx-[10px]" />
                                                    <div className="flex flex-col justify-center">
                                                        <p className="text-sm text-gray-500">{selectedMembers[index].studentName}</p>
                                                        <p className="text-xs text-gray-500">{selectedMembers[index].roleName}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center ml-[5px]">
                                                    <Check color="#2ab265" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-center text-gray-500 text-xl">gallery</h2>
                                    <Carousel
                                        className="border w-[65%] h-[65%] mt-2 rounded-[8px] text-gray-500"
                                        leftControl={<StepBack color="#ffffff" className="ml-[-10px]" />}
                                        rightControl={<StepForward color="#b8c1bf" className="mr-[-10px]" />}
                                        slide={false} // Keep this if you don't want automatic sliding
                                        indicators={false}
                                        onSlideChange={(index) => { index == selectedMembers.length + 2 ? setIsGridView(true) : '' }}
                                    >
                                        <div className="text-center">
                                            <h2 className="text-center">Navigate your results.</h2>
                                            <h2 className="text-center">Click the eye to <br />reveal mutuality</h2>
                                        </div>
                                        {selectedMembers.map((item, index) => (
                                            <div key={index} className="text-center flex flex-col items-center gap-5">
                                                <img src={`/${selectedMembers[index].profile}`} alt="" className="w-[50px] h-[50px] ml-[5px]" />
                                                <div className="flex flex-col items-center gap-1">
                                                    <p className="text-sm text-gray-500">{selectedMembers[index].studentName}</p>
                                                    <hr className="w-[100%] border-gray-800" />
                                                    <p className="text-xs text-gray-500">{selectedMembers[index].roleName}</p>
                                                </div>
                                                <div className="text-center py-[5px] px-[10px] mt-[10px]">
                                                    {showStatuses[index] ? (
                                                        <span>{selectedMembers[index].status}</span>
                                                    ) : (
                                                        <Eye
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                const newShowStatuses = [...showStatuses]; // Create a copy
                                                                newShowStatuses[index] = true; // Update the specific item's visibility
                                                                setShowStatuses(newShowStatuses); // Set the new state
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        <div className="text-center">
                                            <h2 className="text-center">end of results</h2>
                                            <h2 className="text-center">press next to view in summary</h2>
                                        </div>
                                        <span>''</span>
                                    </Carousel>
                                </>
                            )}
                            <div className="w-full mt-[10px] grid grid-cols-2 gap-1">
                                <div className=" flex flex-col justify-center">
                                    <span className="text-xs">userCode: User-12323</span>
                                    <span className="text-xs">roomCode: User-12323</span>
                                </div>
                                {isGridView ? (<Link to="/"><Button color="gray" className="w-full">Go Back</Button></Link>) : ''}
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </>
    );
}