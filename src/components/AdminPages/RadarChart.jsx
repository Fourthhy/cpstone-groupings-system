import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    subject: 'No Role',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Project Manager',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'UI/UX Designer',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'System QA',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'System Developer',
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

export default class Chart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarRadiusAxis angle={45} domain={[0, 150]} />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Self Vouch" dataKey="A"  fill="#05919F" fillOpacity={0.6} />
          <Radar name="By Member Vouch" dataKey="B"  fill="#7A37ED" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
