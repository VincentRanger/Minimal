import React from 'react'
import { RadialBarChart,RadialBar,Legend,Tooltip } from 'recharts'

const Radial = () => {
    const data=[
        {name:"Kids", gender:25, fill: '#FF5733'},
        {name:"Men", gender:50, fill: '#FFC300'},
        {name:"Women", gender:75, fill: '#89CFF0'},
    ]

  return (
    <RadialBarChart width={300} height={300} innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
    <RadialBar
      minAngle={15}
      label={{ position: 'insideStart', fill: '#fff' }}
      background
      clockWise
      dataKey="gender"
    />
    <Legend/>
    <Tooltip/>
  </RadialBarChart>
  )
}

export default Radial