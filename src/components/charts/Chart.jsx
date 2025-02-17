'use client'
import {BarChart, Bar, Tooltip,ResponsiveContainer} from "recharts"

const Chart = () => {
    const Bardata=[
        {month:'Jan', user:15},
        {month:'Feb', user:18},
        {month:'Mar', user:12},
        {month:'Apr', user:51},
        {month:'May', user:68},
        {month:'Jun', user:11},
        {month:'Jul', user:39},
        {month:'Aug', user:37},
    ]
  return (
    <BarChart width={78} height={58} data={Bardata}>
        <Bar dataKey="user" fill="#4CBB17"/>
        <Tooltip/>
    </BarChart>
  )
}

export default Chart