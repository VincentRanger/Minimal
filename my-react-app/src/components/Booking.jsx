import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import back from '../assets/back.jpg'
import { FaArrowTrendUp } from "react-icons/fa6";
import Linechart from './charts/Tinychart'
import ProgressBar from "@ramonak/react-progress-bar";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Doublechart from './charts/Doublechart'
import s1 from "../assets/1.webp"
import s2 from "../assets/2.webp"
import s3 from "../assets/3.webp"
import s4 from "../assets/4.webp"
import s5 from "../assets/5.webp"
import { FaStar } from "react-icons/fa";
import t1 from '../assets/t1.webp'
import t2 from '../assets/t2.webp'
import t3 from '../assets/t3.webp'
import t4 from '../assets/t4.webp'
import t5 from '../assets/t5.webp'
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import Loader from "react-js-loader";
import { useState,useEffect } from 'react';


function Booking() {
  const percentage=75

  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const timer= setTimeout(()=>{
  setLoading(false)
    },1000)
  },[])
  
  if(loading){
    return(
      <div className="justify-center items-center mt-60">
        <Loader type='rectangular-ping' size={500} bgColor="gray"/>
      </div>
    )
  }


  return (
    <div className='mt-20'>
<div className='grid grid-cols-3'>
<div className='col-span-1 p-2'>
<h1 className='font-semibold text-gray-500'>Total booking</h1>
<h1 className='font-bold text-4xl mt-4'>714k</h1>
<div className='flex items-center mt-4'><MdKeyboardDoubleArrowUp className='text-green-600' size={20}/><p className='font-semibold'>+2.6%</p></div>
</div>
<div className='col-span-1 p-2'>
<h1 className='font-semibold text-gray-500'>Sold</h1>
<h1 className='font-bold text-4xl mt-4'>311k</h1>
<div className='flex items-center mt-4'><MdKeyboardDoubleArrowUp className='text-green-600' size={20}/><p className='font-semibold'>+0.2%</p></div>
</div>
<div className='col-span-1 p-2'>
<h1 className='font-semibold text-gray-500'>Canceled</h1>
<h1 className='font-bold text-4xl mt-4'>124k</h1>
<div className='flex items-center mt-4'><MdKeyboardDoubleArrowDown className='text-red-600' size={20}/><p className='font-semibold'>-0.1%</p></div>
</div>
</div>

<div className='grid grid-cols-3 mt-10'>
<div className='col-span-1 bg-cover bg-no-repeat h-70 w-75 rounded-2xl p-5 text-green-300' style={{ backgroundImage: `url(${back})` }}>
<div className=' font-bold flex justify-between'><h1>Total Income</h1><div className='flex items-center gap-1'><FaArrowTrendUp /><p>+2.6%</p></div></div>
<div className='font-semibold text-end'>last month</div>
<div className='font-bold text-3xl'>$18,756</div>
<div className='mt-20'><Linechart className='w-20'/></div>
<div className='mt-25 ms-10 flex items-center'>
<div className='w-20 h-20'><CircularProgressbar styles={buildStyles({
  textSize:'16px', pathColor: `rgba(80, 200, 120, ${73 / 100})`, textColor: '#000000'
})} value={73} text={`73.9%`} />;</div>
<div className='ms-7'>
  <h1 className='font-bold text-xl text-black'>38,566</h1>
  <p className='text-md text-gray-500'>Sold</p>
</div>
</div>
</div>
<div className='col-span-1'>
<div>
  <h1 className="font-semibold text-lg mb-6 mt-2">Booked</h1>
  </div>
 <div className="flex justify-between me-10 mb-5">
  <div>
  <h1 className="font-semibold text-sm mb-2">Pending</h1>
  <ProgressBar completed={20} width={250} height="10px" bgColor="#82ca9d" isLabelVisible={false}/>
  </div>
<div>
  <h1 className="font-bold">9.91k</h1>
</div>
 </div>
 <div className="flex justify-between me-10 mb-5">
  <div>
  <h1 className="font-semibold text-sm mb-2">Canceled</h1>
  <ProgressBar completed={30} width={250} height="10px" bgColor="#89CFF0 " isLabelVisible={false}/>
  </div>
<div>
  <h1 className="font-bold">1.91k</h1>
</div>
 </div>
 <div className="flex justify-between me-10">
  <div>
  <h1 className="font-semibold text-sm mb-2">Sold</h1>
  <ProgressBar completed={100} width={250} height="10px" bgColor="#FFC300" isLabelVisible={false}/>
  </div>
<div>
  <h1 className="font-bold">9.12k</h1>
</div>
 </div>
 <div className='mt-30 ms-10 flex items-center'>
<div className='w-20 h-20'><CircularProgressbar styles={buildStyles({
  textSize:'16px', pathColor: `rgba(228, 208, 10, ${45 / 100})`, textColor: '#000000'
})} value={45} text={`45.9%`} />;</div>
<div className='ms-7'>
  <h1 className='font-bold text-xl text-black'>18,472</h1>
  <p className='text-md text-gray-500'>Pending for payment
  </p>
</div>
</div>
</div>
<div className='col-span-1'>
<h1 className="font-semibold text-lg mb-6">Tours available</h1>
<div className='w-50 h-50 mt-20'><CircularProgressbar styles={buildStyles({
  textSize:'16px', pathColor: `rgba(80, 200, 120, ${percentage / 100})`, textColor: '#000000'
})} value={percentage} text={`186`} />;</div>
<div className='flex items-center gap-2 mt-5 font-semibold'><div className='w-3 h-3 rounded-full bg-green-600'></div><p className='text-gray-500 me-15'>Sold out</p><p>120 tours</p></div>
<div className='flex items-center gap-2 mt-5 font-semibold'><div className='w-3 h-3 rounded-full bg-gray-200'></div><p className='text-gray-500 me-15'>Available</p><p>66 tours</p></div>
</div>
</div>

<div className='grid grid-cols-3 mt-15'>
<div className='col-span-2'>
  <h1 className='font-semibold text-xl'>Statistics</h1>
  <div className='mt-5'>
  <Doublechart/>
  </div>
  </div>
<div className='col-span-1'>
<h1 className='font-semibold text-xl'>Customer reviews</h1>
<p className='text-gray-500'>5 Reviews</p>
<div className='flex mt-5'>
  <img src={s1} className='rounded-full w-12 me-2' />
  <div>
    <h1 className='font-semibold'>Jayvion Simon</h1>
    <p className='text-gray-500 text-sm'>Posted 13 Feb 2025 10:37 am</p>
  </div>
</div>
<div className='flex mt-5 gap-1 text-amber-300'><FaStar size={18}/><FaStar size={18}/><FaStar size={18}/><FaStar size={18}/><FaStar size={18} className='text-gray-400'/></div>
<p className='mt-2 me-10'>Occaecati est et illo quibusdam <br /> accusamus qui.
   Incidunt aut et molestiae ut facere aut
    Est quidem iusto praesentium excepturi harum nihil tenetur facilis.
     Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
     <div className='flex gap-2 mt-2 text-sm'>
      <button className='p-2 font-semibold'>Great Service</button><button className='p-2 font-semibold'>Recommended</button>
     </div>
     <button className='p-2 font-semibold text-sm'>Best price</button>
     <div className='flex mt-5 gap-5'>
      <button className='px-9 py-1 rounded-lg bg-red-200 text-red-500 font-semibold'>Reject</button>
      <button className='px-9 py-1 rounded-lg bg-black text-white font-semibold'>Accept</button>
     </div>
</div>
</div>

<div className='mt-10'>
<h1 className='font-semibold text-xl'>Newest booking</h1>
<p className='text-gray-500 text-sm'>8 bookings</p>
<div className='grid grid-cols-4 mt-10'>
<div className=' col-span-1'>
  <div className='flex'>
  <img src={s5} className='w-10 rounded-full' alt="" />
<div className='ms-3'>
<h1 className='font-semibold'>Jayvion Simon</h1>
<p className='text-gray-500 text-sm'>13 Feb 2025 10:37 am</p>
  </div>
</div>
<div className='text-sm text-gray-500 flex items-center font-semibold mt-4'><SlCalender className='me-2' /><p>3 days 2 nights</p></div>
<div className='text-sm text-gray-500 flex items-center font-semibold mt-2'><FaUser className='me-2' /><p>3-5 guest</p></div>
<div className='h-50 w-50 bg-cover mt-2 rounded-xl mb-2 relative' style={{ backgroundImage: `url(${t1})` }}>
  <div className='flex justify-end absolute right-1 bottom-1 w-17 rounded-md items-center text-white font-semibold bg-black'><FaFire size={10} className='text-orange-400' /><p className='me-1'>$83.75</p></div>
</div>
</div>
<div className=' col-span-1'>
  <div className='flex'>
  <img src={s2} className='w-10 rounded-full' alt="" />
<div className='ms-3'>
<h1 className='font-semibold'>Jayvion Simon</h1>
<p className='text-gray-500 text-sm'>13 Feb 2025 10:37 am</p>
  </div>
</div>
<div className='text-sm text-gray-500 flex items-center font-semibold mt-4'><SlCalender className='me-2' /><p>3 days 2 nights</p></div>
<div className='text-sm text-gray-500 flex items-center font-semibold mt-2'><FaUser className='me-2' /><p>3-5 guest</p></div>
<div className='h-50 w-50 bg-cover mt-2 rounded-xl mb-2 relative' style={{ backgroundImage: `url(${t2})` }}>
  <div className='flex justify-end absolute right-1 bottom-1 w-17 rounded-md items-center text-white font-semibold bg-black'><FaFire size={10} className='text-orange-400' /><p className='me-1'>$83.75</p></div>
</div>
</div>
<div className=' col-span-1'>
  <div className='flex'>
  <img src={s3} className='w-10 rounded-full' alt="" />
<div className='ms-3'>
<h1 className='font-semibold'>Jayvion Simon</h1>
<p className='text-gray-500 text-sm'>13 Feb 2025 10:37 am</p>
  </div>
</div>
<div className='text-sm text-gray-500 flex items-center font-semibold mt-4'><SlCalender className='me-2' /><p>3 days 2 nights</p></div>
<div className='text-sm text-gray-500 flex items-center font-semibold mt-2'><FaUser className='me-2' /><p>3-5 guest</p></div>
<div className='h-50 w-50 bg-cover mt-2 rounded-xl mb-2 relative' style={{ backgroundImage: `url(${t3})` }}>
  <div className='flex justify-end absolute right-1 bottom-1 w-17 rounded-md items-center text-white font-semibold bg-black'><FaFire size={10} className='text-orange-400' /><p className='me-1'>$83.75</p></div>
</div>
</div>
<div className=' col-span-1'>
  <div className='flex'>
  <img src={s4} className='w-10 rounded-full' alt="" />
<div className='ms-3'>
<h1 className='font-semibold'>Jayvion Simon</h1>
<p className='text-gray-500 text-sm'>13 Feb 2025 10:37 am</p>
  </div>
</div>
<div className='text-sm text-gray-500 flex items-center font-semibold mt-4'><SlCalender className='me-2' /><p>3 days 2 nights</p></div>
<div className='text-sm text-gray-500 flex items-center font-semibold mt-2'><FaUser className='me-2' /><p>3-5 guest</p></div>
<div className='h-50 w-50 bg-cover mt-2 rounded-xl mb-2 relative' style={{ backgroundImage: `url(${t4})` }}>
  <div className='flex justify-end absolute right-1 bottom-1 w-17 rounded-md items-center text-white font-semibold bg-black'><FaFire size={10} className='text-orange-400' /><p className='me-1'>$83.75</p></div>
</div>
</div>
</div>
</div>

<div>
<h1 className='font-semibold text-xl mt-5 ms-1'>Booking Details</h1>
<div className='flex mt-5 gap-15'>
  <div>
    <h1 className='font-semibold text-gray-500 text-sm mb-5'>Destination</h1>
    <div className='flex gap-3 items-center text-sm mb-5'>
      <img src={t1} className='w-13 rounded-lg' alt="" />
      <h1>Island Hopping Extravaganza</h1>
    </div>
    <div className='flex gap-3 items-center text-sm mb-5'>
      <img src={t2} className='w-13 rounded-lg' alt="" />
      <h1>Cultural Wonders of Europe</h1>
    </div>
    <div className='flex gap-3 items-center text-sm mb-5'>
      <img src={t3} className='w-13 rounded-lg' alt="" />
      <h1>Safari Expedition in Africa</h1>
    </div>
    <div className='flex gap-3 items-center text-sm mb-5'>
      <img src={t4} className='w-13 rounded-lg' alt="" />
      <h1>Grand Canyon Explorer</h1>
    </div>
    <div className='flex gap-3 items-center text-sm mb-5'>
      <img src={t5} className='w-13 rounded-lg' alt="" />
      <h1>Historic Cities of Asia</h1>
    </div>
  </div>
<div className='items-center'>
<h1 className='font-semibold text-gray-500 text-sm mb-5'>Customer</h1>
<div className='mb-7'>
  <p>Jayvion Simon</p>
  <p className='text-gray-500 text-sm'>+1 202-555-0143</p>
</div>
<div className='mb-7'>
  <p>Lucian Obrien</p>
  <p className='text-gray-500 text-sm'>+1 416-555-0198</p>
</div>
<div className='mb-7'>
  <p>Deja Brady</p>
  <p className='text-gray-500 text-sm'>+44 20 7946 0958</p>
</div>
<div className='mb-7'>
  <p>Harrison Stein</p>
  <p className='text-gray-500 text-sm'>+61 2 9876 5432</p>
</div>
<div className='mb-7'>
  <p>JReece Chung</p>
  <p className='text-gray-500 text-sm'>+91 22 1234 5678</p>
</div>
</div>
<div className='items-center'>
<h1 className='font-semibold text-gray-500 text-sm mb-5'>Check in</h1>
<div className='mb-7'>
  <p>13 Feb 2025</p>
  <p className='text-gray-500 text-sm'>10:37 am</p>
</div>
<div className='mb-7'>
  <p>12 Feb 2025</p>
  <p className='text-gray-500 text-sm'>9:37 am</p>
</div>
<div className='mb-7'>
  <p>11 Feb 2025</p>
  <p className='text-gray-500 text-sm'>8:37 am</p>
</div>
<div className='mb-7'>
  <p>10 Feb 2025</p>
  <p className='text-gray-500 text-sm'>7:37 am</p>
</div>
<div className='mb-7'>
  <p>09 Feb 2025</p>
  <p className='text-gray-500 text-sm'>6:37 am</p>
</div>
</div>
<div className='items-center'>
<h1 className='font-semibold text-gray-500 text-sm mb-5'>Check out</h1>
<div className='mb-7'>
  <p>13 Feb 2025</p>
  <p className='text-gray-500 text-sm'>10:37 am</p>
</div>
<div className='mb-7'>
  <p>12 Feb 2025</p>
  <p className='text-gray-500 text-sm'>9:37 am</p>
</div>
<div className='mb-7'>
  <p>11 Feb 2025</p>
  <p className='text-gray-500 text-sm'>8:37 am</p>
</div>
<div className='mb-7'>
  <p>10 Feb 2025</p>
  <p className='text-gray-500 text-sm'>7:37 am</p>
</div>
<div className='mb-7'>
  <p>09 Feb 2025</p>
  <p className='text-gray-500 text-sm'>6:37 am</p>
</div>
</div>
<div className='items-center justify-center'>
<h1 className='font-semibold text-gray-500 text-sm mb-5'>Status</h1>
<div className='mb-14'>
<p className='text-red-500 bg-red-300 rounded-lg font-bold w-9'>Paid</p>
</div>
<div className='mb-12'>
<p className='text-red-500 bg-red-300 rounded-lg font-bold w-9'>Paid</p>
</div>
<div className='mb-12'>
<p className='text-orange-500 bg-orange-300 rounded-lg font-bold w-16'>Pending</p>
</div>
<div className='mb-14'>
<p className='text-green-500 bg-green-300 rounded-lg font-bold'>Cancelled</p>
</div>
<div className='mb-14'>
<p className='text-red-500 bg-red-300 rounded-lg font-bold w-9'>Paid</p>
</div>
</div>
<div className='text-gray-500'>
<CiMenuKebab className='mt-12 mb-14'/>
<CiMenuKebab className='mb-15' />
<CiMenuKebab className='mb-14'/>
<CiMenuKebab className='mb-15'/>
<CiMenuKebab className='mb-14'/>
</div>
</div>
<div className='text-end me-30'><button className='font-semibold text-sm'>View all</button></div>
</div>
    </div>
  )
}

export default Booking