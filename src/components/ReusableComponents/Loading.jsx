import React, { useEffect, useState } from "react";

export default function Loading() {
    const [progress, setProgress] = useState(0);
    const [reminder, setReminder] = useState(0);

    const objectList = [
        { title: "Transparency Matters:", content: "\"Transparency builds trust. Recorded vouching sessions ensure everyone is accountable.\"" },
        { title: "Stay Anonymous:", content: "\"Your privacy is our priority! Enjoy complete anonymity with userCodes during the vouching process.\"" },
        { title: "Foster Trust:", content: "\"Mutual vouching creates a culture of trust and cooperation. Build a supportive community together!\"" },
        { title: "Engage with Peers:", content: "\"Connect with like-minded individuals and strengthen your group dynamics through our vouching system.\"" },
        { title: "Feedback is Valuable:", content: "\"Your feedback helps us improve! Share your thoughts on the vouching process.\"" },
    ];

    useEffect(() => {
        // Set a random reminder when the component mounts
        const number = Math.floor(Math.random() * objectList.length);
        setReminder(number);

        const duration = 5000; // 5 seconds
        const increment = 100 / (duration / 100); // Calculate increment per 100ms
        let currentProgress = 0;

        const interval = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
            }
            setProgress(currentProgress);
        }, 35); // Update every 35ms

        return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Empty dependency array to run only once

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-graybg text-gray-700"> {/* Use a valid Tailwind className */}
            <div className="h-[500px] w-[400px] font-raleway flex justify-start items-center flex-col border rounded-[5px] bg-white">
                <div className="w-[380px] h-full flex flex-col justify-center items-center">
                    <p className="text-2xl font-bold text-center">Remember!</p>

                    <div className="mt-[20px] text-center text-sm">
                        <b>{objectList[reminder].title}</b><br />{objectList[reminder].content}
                    </div>

                    <div className="w-full flex flex-col items-center justify-start mt-[20px]">
                        <i>Loading...</i> {/* Added a loading text for clarity */}
                        <div className="w-[50%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}