import { Button, Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { StepBack, StepForward } from "lucide-react"
import AnimatedContent from "../ComponentAnimations/AnimatedContent";

export default function LandingPage() {
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
                        <div className="w-[380px]">
                            <h2 className="font-bold mt-[20px] text-center text-2xl">Member Vouch System</h2>
                            <p className="mt-[20px] text-center text-sm">Are you ready to compose your ideal group and foster trust among your peers?</p>
                            <h2 className="font-bold mt-[20px]">Features</h2>
                            <Carousel
                                className="h-[100px]"
                                slideInterval={2000}
                                leftControl={<StepBack color="#b8c1bf" className="ml-[-10px]" />}
                                rightControl={<StepForward color="#b8c1bf" className="mr-[-10px]" />}
                                indicators={false}
                            >
                                <li className="px-[40px] text-sm"><b>Recorded Vouching Sessions</b>:  <br />Vouching sessions are recorded for transparency and accountability.</li>
                                <li className="px-[40px] text-sm"><b>Anonymity Guaranteed</b>:  <br />Names are transcribed into userCodes, ensuring complete anonymity during the voting process.</li>
                                <li className="px-[40px] text-sm"><b>Mutual Vouching</b>: <br />Build a culture of trust, accountability, mutual cooperation and agreement within your groups.</li>
                            </Carousel>
                            <div className="mt-[10px] text-center flex items-center flex-col">
                                <b>Proceed as..</b>
                                <div className="flex gap-[10px] mt-[20px]">
                                    <Link to=""><Button color="gray">Host</Button></Link>
                                    <Link to="/joinroom"><Button color="gray">User </Button></Link>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <hr className="w-[50px] border-gray-300" />
                                    or
                                    <hr className="w-[50px] border-gray-300" />
                                </div>
                                <Link to="/joinroom"><Button color="gray">Review a vouch</Button></Link>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </>
    );
}