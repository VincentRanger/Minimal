import React from 'react'
import { BarChart, Bar, XAxis, YAxis,Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stackedchart = () => {
    const data=[
        {
            name:'Jan',
            Asia:6,
            Europe:6,
            Amercias:6
        },
        {
            name:'Feb',
            Asia:16,
            Europe:16,
            Amercias:16
        },
        {
            name:'Mar',
            Asia:26,
            Europe:26,
            Amercias:26
        },
        {
            name:'Apr',
            Asia:36,
            Europe:36,
            Amercias:36
        },
        {
            name:'May',
            Asia:6,
            Europe:46,
            Amercias:6
        },
        {
            name:'Jun',
            Asia:6,
            Europe:6,
            Amercias:66
        },
        {
            name:'Jul',
            Asia:6,
            Europe:6,
            Amercias:86
        },
        {
            name:'Aug',
            Asia:6,
            Europe:6,
            Amercias:46
        },
        {
            name:'Sep',
            Asia:6,
            Europe:46,
            Amercias:6
        },
        {
            name:'Oct',
            Asia:6,
            Europe:36,
            Amercias:6
        },
        {
            name:'Nov',
            Asia:6,
            Europe:46,
            Amercias:6
        },
        {
            name:'Dec',
            Asia:1,
            Europe:75,
            Amercias:6
        },
    ]
  return (
    // <ResponsiveContainer width='100%' height='100%' >
      <BarChart data={data} width={650} height={350} >
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="Asia" stackId="a" fill='#088F8F'/>
            <Bar dataKey="Europe" stackId="a" fill='#FFC300 '/>
            <Bar dataKey="Amercias" stackId="a" fill='#9FE2BF'/>
        </BarChart>
    // </ResponsiveContainer>
  )
}

export default Stackedchart