import { useState } from "react";
import { Carousel } from "flowbite-react";
import { StepBack, StepForward, Eye } from "lucide-react";

export default function VouchResults() {
    const selectedMembers = [
        { studentName: "No name 1", roleName: "N/A", profile: "undefined.png", status: "mutual" },
        { studentName: "No name 2", roleName: "N/A", profile: "undefined.png", status: "mutual" },
        { studentName: "No name 3", roleName: "N/A", profile: "undefined.png", status: "mutual" },
        { studentName: "No name 4", roleName: "N/A", profile: "undefined.png", status: "mutual" },
    ];

    // Use an array of booleans to track visibility for each member
    const [showStatuses, setShowStatuses] = useState(selectedMembers.map(() => false));

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[380px] h-full flex flex-col justify-center items-center">
                        <h2 className="font-bold text-center text-2xl">Vouch Results</h2>

                        <Carousel
                            className="border w-[65%] h-[65%] mt-2 rounded-[8px] text-gray-500"
                            leftControl={<StepBack color="#ffffff" className="ml-[-10px]" />}
                            rightControl={<StepForward color="#b8c1bf" className="mr-[-10px]" />}
                            slide={false} // Keep this if you don't want automatic sliding
                            onSlideChange={(index) => { index === selectedMembers.length + 1 ? alert('Last of the list') : '' }}
                        >
                            <div className="text-center">
                                <h2 className="text-center">Navigate your results.</h2>
                                <h2 className="text-center">Click the eye to <br />reveal mutuality</h2>
                            </div>
                            {selectedMembers.map((item, index) => (
                                <div key={index} className="border text-center flex flex-col items-center">
                                    <img src={`/${selectedMembers[0].profile}`} alt="" className="w-[50px] h-[50px] ml-[5px]" />
                                    <p className="text-l text-gray-500">{selectedMembers[index].studentName}</p>
                                    <hr className="w-[40%]" />
                                    <p className="text-s text-gray-500">{selectedMembers[index].roleName}</p>
                                    <div className="border text-center py-[5px] px-[10px] mt-[10px]">
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
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}