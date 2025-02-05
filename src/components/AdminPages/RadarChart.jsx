import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'System Developer',
        A: 120,
        B: 110,
        fullMark: 150,
        img: '/system_developer.png'
    },
    {
        subject: 'Project Manager',
        A: 98,
        B: 130,
        fullMark: 150,
        img: '/project_manager.png'
    },
    {
        subject: 'UI/UX Designer',
        A: 86,
        B: 130,
        fullMark: 150,
        img: '/uiux_designer.png'
    },
    {
        subject: 'System QA',
        A: 99,
        B: 100,
        fullMark: 150,
        img: '/system_quality.png'
    },
    {
        subject: 'No Role',
        A: 85,
        B: 90,
        fullMark: 150,
        img: '/undefined.png'
    },
];

// Custom tick to render image and text
const CustomTick = ({ x, y, payload }) => {
    // Get the image source corresponding to the subject
    const imageUrl = payload.img || '/undefined.png'; // Fallback image if none is provided

    return (
        <g transform={`translate(${x},${y})`}>
            {/* Render Image */}
            <img src={imageUrl} alt={payload.value} width="24" height="24" style={{ transform: 'translate(-12px, -12px)' }} />
            {/* Render Subject Name */}
            <text x="0" y="18" textAnchor="middle" fill="#666">{payload.value}</text>
        </g>
    );
};

export default class Chart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%" className="border">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={<CustomTick />} />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}
