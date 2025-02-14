import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

import React from 'react'

const Radarchart = () => {
    const data = [
        {
          subject: 'Math',
          A: 20,
          B: 10,
          fullMark: 100,
        },
        {
          subject: 'Chinese',
          A: 98,
          B: 30,
          fullMark: 100,
        },
        {
          subject: 'English',
          A: 86,
          B: 30,
          fullMark: 100,
        },
        {
          subject: 'Geography',
          A: 99,
          B: 100,
          fullMark: 100,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 90,
          fullMark: 100,
        },
        {
          subject: 'History',
          A: 65,
          B: 85,
          fullMark: 100,
        },
      ];
  return (
    <RadarChart cx="50%" width={280} height={280} cy="50%" outerRadius="60%" data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis />
    <Radar name="Mike" dataKey="A" stroke="#097969" fill="#097969" fillOpacity={0.6} />
  </RadarChart>
  )
}

export default Radarchart