import { useState } from "react"
import { LogIn } from "lucide-react"
import { Button } from "flowbite-react"

export default function RoomList() {

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-700">
                <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border-[1px] rounded-[5px] bg-white">
                    <div className="w-[380px] h-full grid grid-rows-10">

                        <div className="row-span-1 w-full flex justify-evenly items-center">
                            <h2 className="font-bold mt-[10px] text-left text-2xl">Room List</h2>
                            <div className="mt-[10px]">
                                <Button outline >Create Room</Button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 mt-[8px] row-span-9">

                            <div className="border rounded-[7px] w-[95%] grid grid-cols-10">
                                <div className="flex flex-col items-start justify-center m-[5px] col-span-3">
                                    <span className="text-sm font-bold">Code</span>
                                    <span className="text-m">123---</span>
                                </div>
                                <div className="flex flex-col items-start justify-center m-[5px] col-span-3">
                                    <span className="text-sm font-bold">Members</span>
                                    <span className="text-m">27</span>
                                </div>
                                <div className="flex flex-col items-start justify-center m-[5px] col-span-3">
                                    <span className="text-sm font-bold">Date Created</span>
                                    <span className="text-m">01-01-2025</span>
                                </div>
                                <div className="col-span-1 flex items-center justify-center mr-[5px]">
                                    <LogIn color="#0e2a26" />
                                </div>
                            </div>

                            <div className="border rounded-[7px] w-[95%]">
                                <div className="flex flex-col items-start justify-center m-[5px]">
                                    <span className="text-sm font-bold">Code</span>
                                    <span className="text-m">123---</span>
                                </div>
                            </div>

                            <div className="border rounded-[7px] w-[95%]">
                                <div className="flex flex-col items-start justify-center m-[5px]">
                                    <span className="text-sm font-bold">Code</span>
                                    <span className="text-m">123---</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}