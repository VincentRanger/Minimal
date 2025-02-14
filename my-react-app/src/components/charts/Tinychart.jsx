import React from 'react'
import { LineChart,Line,Tooltip } from 'recharts'

const Linechart = () => {
    const data=[
        {name:'Jan', visit:6},
        {name:'Feb', visit:36},
        {name:'Mar', visit:26},
        {name:'Apr', visit:66},
        {name:'May', visit:46},
        {name:'Jun', visit:56},
        {name:'Jul', visit:16},
        {name:'Aug', visit:10}
    ]
  return (
    <LineChart width={250} height={50} data={data}>
    <Line dataKey="visit" stroke="#31ba6c" strokeWidth={2} />
    <Tooltip/>
  </LineChart>
  )
}

export default Linechart