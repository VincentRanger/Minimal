import React from 'react'
import { LineChart, Line,XAxis,YAxis,Legend,Tooltip } from 'recharts'

const Doubleline = () => {
    const data=[
        {month:'Jan',Totalincome:35,TotalExpense:23},
        {month:'Feb',Totalincome:25,TotalExpense:16},
        {month:'Mar',Totalincome:45,TotalExpense:23},
        {month:'Apr',Totalincome:65,TotalExpense:43},
        {month:'May',Totalincome:75,TotalExpense:53},
        {month:'Jun',Totalincome:55,TotalExpense:14},
        {month:'Jul',Totalincome:55,TotalExpense:15},
        {month:'Aug',Totalincome:45,TotalExpense:17},
        {month:'Sep',Totalincome:45,TotalExpense:15},
        {month:'Oct',Totalincome:35,TotalExpense:13},
        {month:'Nov',Totalincome:25,TotalExpense:11},
        {month:'Dec',Totalincome:15,TotalExpense:12},
    ]
  return (
    <LineChart width={650} height={300} data={data}>
<XAxis dataKey='month'/>
<YAxis/>
<Legend/>
<Tooltip/>
<Line dataKey='Totalincome' stroke='#FFC300' strokeWidth={4}/>
<Line dataKey='TotalExpense' stroke='#AAFF00' strokeWidth={4}/>
    </LineChart>
  )
}

export default Doubleline