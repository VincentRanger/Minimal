import React from 'react'
import { PieChart, Pie,Tooltip,Sector,ResponsiveContainer,Cell,Legend } from 'recharts'

const Piechart = () => {
    const data=[
        {name:"Window", value:53345},
        {name:"Mac", value:12345},
        {name:"Android", value:78345},
        {name:"IOS", value:44313},
    ]

    const COLORS=['#0088FE','#00C49F','#FFBB28','#FF8042']
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={100}
         fill="#8884d8"
         dataKey="value"
      >
         {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
      </Pie>
      <Legend/>
        <Tooltip/>
    </PieChart>
  )
}

export default Piechart