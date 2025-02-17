import React from 'react'
import { BarChart,Bar,Legend,Tooltip,XAxis,YAxis,ResponsiveContainer } from 'recharts'

const Doublechart = () => {
    const data=[{
        name:"Jan",
        TeamA:70,
        TeamB:50,
    },
    {
        name:"Feb",
        TeamA:40,
        TeamB:20,
    },
    {
        name:"Mar",
        TeamA:40,
        TeamB:70,
    },
    {
        name:"Apr",
        TeamA:20,
        TeamB:50,
    },
    {
        name:"May",
        TeamA:70,
        TeamB:50,
    },
    {
        name:"Jun",
        TeamA:80,
        TeamB:30,
    },
    {
        name:"Jul",
        TeamA:20,
        TeamB:90,
    },
    {
        name:"Aug",
        TeamA:40,
        TeamB:30,
    },
    {
        name:"Sep",
        TeamA:30,
        TeamB:30,
    },
]
  return (
    // <ResponsiveContainer>
  <BarChart width={650} height={300} data={data}>
<XAxis dataKey={"name"}/>
<YAxis/>
<Legend/>
<Tooltip/>
<Bar dataKey={"TeamA"} fill="#FFC300"/>
<Bar dataKey={"TeamB"} fill="#AFE1AF"/>
   </BarChart>
    // </ResponsiveContainer>
  )
}

export default Doublechart