import React from 'react'
import { FaDiscourse } from "react-icons/fa";
import { MdStickyNote2 } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import pp from '../assets/pp.webp'
import Doubleline from './charts/Doubleline'
import Radarchart from './charts/Radarchar';
import Piechart from './charts/Piechart'
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.webp'
import p4 from '../assets/p4.webp'
import ProgressBar from "@ramonak/react-progress-bar";
import { BsCalendarDateFill } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import f1 from '../assets/f1.webp'
import f2 from '../assets/f2.webp'
import f3 from '../assets/f3.webp'
import f4 from '../assets/f4.webp'
import Loader from "react-js-loader";
import { useState,useEffect } from 'react';

function Course() {
  const userName= localStorage.getItem("userName")
  const userRole= localStorage.getItem("userRole");

  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const timer= setTimeout(()=>{
  setLoading(false)
    },1000)
  },[])
  
  if(loading){
    return(
      <div className="justify-center items-center mt-60">
        <Loader type='spinner-default' size={100} bgColor="gray"/>
      </div>
    )
  }
  return (
    <div className='mt-20 px-5'>
<div className='grid grid-cols-3'>
  <div className='col-span-2'>
  <h1 className="font-bold text-2xl">Hi, {userName}</h1>
  <p className='text-gray-500 mt-3'>Let's learn something new today!</p>
  <div className='mt-5 grid grid-cols-3 gap-2'>
    <div className='p-5 col-span-1'>
    <div className='flex justify-between'>
  <h1 className='font-bold text-4xl mt-5'>6</h1>
  <div className='w-20 h-20 text-yellow-500 rounded-full bg-yellow-100'><FaDiscourse size={30}  className='justify-self-center mt-6'/>
  </div>
  </div>
  <p className='text-gray-500 font-semibold'>Course completed</p>
    </div>
    <div className='p-5 col-span-1'>
    <div className='flex justify-between'>
  <h1 className='font-bold text-4xl mt-5'>3</h1>
  <div className='w-20 h-20 text-green-500 rounded-full bg-green-100'><MdStickyNote2 size={30}  className='justify-self-center mt-6'/>
  </div>
  </div>
  <p className='text-gray-500 font-semibold'>Course in progress</p>
    </div>
    <div className='p-5 col-span-1'>
    <div className='flex justify-between'>
  <h1 className='font-bold text-4xl mt-5'>6</h1>
  <div className='w-20 h-20 text-purple-500 rounded-full bg-purple-200'><PiCertificateFill size={30}  className='justify-self-center mt-6'/>
  </div>
  </div>
  <p className='text-gray-500 font-semibold'>Certificates</p>
    </div>
  </div>
  </div>
<div className='col-span-1 justify-items-center  items-center text-center p-5 mt-13'>
<img src={pp} className='rounded-full w-20 mb-3' alt="" />
<h1 className='font-semibold text-lg mb-1'>{userName}</h1>
<p className='text-gray-500'>{userRole}</p>
</div>
</div>
    
<div className='grid grid-cols-3 mt-10'>
<div className='col-span-2'>
  <h1 className='ms-10 font-semibold mb-5 text-xl'>Hours spent</h1>
<Doubleline/>
</div>
<div className='col-span-1'>
<h1 className='font-semibold mb-5 text-xl ms-5'>Strength</h1>
<div className='justify-items-end'>
<Radarchart/>
</div>

</div>
</div>

<div className='grid grid-cols-4 gap-7 mt-15'>
<div className='col-span-2'>
<h1 className='font-semibold text-xl ms-10'>Course progress</h1>
<Piechart/>
</div>
<div className='col-span-1'>
<h1 className='font-semibold text-xl mb-7'>Continue Course</h1>
<div className='mb-8 flex gap-4'>
  <img src={p1} className='w-17 rounded-lg' alt="" />
  <div>
<h1 className='font-semibold'>Introduction to Python Program</h1>
<p className='text-gray-500 text-sm'>Lessons: 7/12</p>
<div className='flex justify-between'>
<ProgressBar completed={50} width={150} height="7px" bgColor="#E4D00A" className='mt-2' isLabelVisible={false}/>
<p className='text-gray-500 text-sm'>58.3%</p>
</div>
  </div>
</div>

<div className='mb-8 flex gap-4'>
  <img src={p2} className='w-17 rounded-lg' alt="" />
  <div>
<h1 className='font-semibold'>Digital Marketing Fundamental</h1>
<p className='text-gray-500 text-sm'>Lessons: 7/12</p>
<div className='flex justify-between'>
<ProgressBar completed={50} width={150} height="7px" bgColor="#E4D00A" className='mt-2' isLabelVisible={false}/>
<p className='text-gray-500 text-sm'>58.3%</p>
</div>
  </div>
</div>

<div className='mb-8 flex gap-4'>
  <img src={p3} className='w-17 rounded-lg' alt="" />
  <div>
<h1 className='font-semibold'>Data Science </h1>
<p className='text-gray-500 text-sm'>Lessons: 9/12</p>
<div className='flex justify-between'>
<ProgressBar completed={80} width={150} height="7px" bgColor="#E4D00A" className='mt-2' isLabelVisible={false}/>
<p className='text-gray-500 text-sm'>78.3%</p>
</div>
  </div>
</div>

<div className='flex gap-4'>
  <img src={p4} className='w-17 rounded-lg' alt="" />
  <div>
<h1 className='font-semibold'>Graphic Design Essentials</h1>
<p className='text-gray-500 text-sm'>Lessons: 10/12</p>
<div className='flex justify-between'>
<ProgressBar completed={90} width={150} height="7px" bgColor="#E4D00A" className='mt-2' isLabelVisible={false}/>
<p className='text-gray-500 text-sm'>88.3%</p>
</div>
  </div>
</div>
</div>

<div className='col-span-1'>
<h1 className='font-semibold text-xl mb-7'>Reminders</h1>
<div className='mb-8 flex gap-2'>
  <div className='h-5 w-2 mt-1 bg-blue-400 rounded-full'></div>
  <div>
<h1 className='font-semibold'>Introduction to Python Program</h1>
<div className='flex gap-1 items-center text-gray-500 text-sm'><BsCalendarDateFill  size={13} /><p className=''>14 Feb 2025 12:00 am</p></div> 
<div className='flex justify-between'>
<ProgressBar completed={50} width={180} height="7px" bgColor="#7DF9FF" className='mt-2' isLabelVisible={false}/>
<p className='text-gray-500 text-sm'>58.3%</p>
</div>
  </div>
</div>

<div className='mb-8 flex gap-2'>
  <div className='h-5 w-2 mt-1 bg-red-400 rounded-full'></div>
  <div>
<h1 className='font-semibold'>Digital Marketing Fundamentals</h1>
<div className='flex gap-1 items-center text-gray-500 text-sm'><BsCalendarDateFill  size={13} /><p className=''>14 Feb 2025 12:00 am</p></div> 
<div className='flex justify-between'>
<ProgressBar completed={60} width={180} height="7px" bgColor="#C70039" className='mt-2' isLabelVisible={false}/>
<p className='text-gray-500 text-sm'>58.3%</p>
</div>
  </div>
</div>

<div className='mb-8 flex gap-2'>
  <div className='h-5 w-2 mt-1 bg-purple-400 rounded-full'></div>
  <div>
<h1 className='font-semibold'>Data Science with R</h1>
<div className='flex gap-1 items-center text-gray-500 text-sm'><BsCalendarDateFill  size={13} /><p className=''>14 Feb 2025 12:00 am</p></div> 
<div className='flex justify-between'>
<ProgressBar completed={70} width={180} height="7px" bgColor="#BF40BF" className='mt-2' isLabelVisible={false}/>
<p className='text-gray-500 text-sm'>58.3%</p>
</div>
  </div>
</div>

<div className='mb-8 flex gap-2'>
  <div className='h-5 w-2 mt-1 bg-green-400 rounded-full'></div>
  <div>
<h1 className='font-semibold'>Graphic Design Essentials</h1>
<div className='flex gap-1 items-center text-gray-500 text-sm'><BsCalendarDateFill  size={13} /><p className=''>14 Feb 2025 12:00 am</p></div> 
<div className='flex justify-between'>
<ProgressBar completed={80} width={180} height="7px" bgColor="#50C878" className='mt-2' isLabelVisible={false}/>
<p className='text-gray-500 text-sm'>58.3%</p>
</div>
  </div>
</div>
</div>
</div>

<div className='mt-10 grid grid-cols-4 gap-9 mb-10'>
<div className='col-span-1'>
<h1 className='font-semibold text-xl mb-8'>Featured course</h1>
<img src={f1} className='w-55 h-50 rounded-xl mb-5' alt="" />
<div className='text-gray-500 text-xs flex gap-3 ms-3 items-center'>
  <div className='flex gap-2 items-center'> <CiClock1 size={15}/> <p>1h 40m</p></div>
  <div className='flex gap-2 items-center'> <FaUserFriends size={15}/> <p>437</p></div>
</div>
<p className='text-md mt-2 font-semibold ms-2'>Introduction to Python <br /> Program</p>
<div className='flex justify-between'>
  <div className='flex gap-2 items-center mt-2'>
  <p className='text-lg font-semibold ms-2'>$83.74</p> <p className='text-gray-500 text-sm'>/year</p>
  </div>
  <button className='text-white font-semibold bg-black rounded-xl px-6 py-2'>Join</button>
</div>
</div>

<div className='col-span-1 mt-15'>
<img src={f2} className='w-55 h-50 rounded-xl mb-5' alt="" />
<div className='text-gray-500 text-xs flex gap-3 ms-3 items-center'>
  <div className='flex gap-2 items-center'> <CiClock1 size={15}/> <p>1h 40m</p></div>
  <div className='flex gap-2 items-center'> <FaUserFriends size={15}/> <p>437</p></div>
</div>
<p className='text-md mt-2 font-semibold ms-2'>Digital Marketing Fundamentals</p>
<div className='flex justify-between'>
  <div className='flex gap-2 items-center mt-2'>
  <p className='text-lg font-semibold ms-2'>$63.74</p> <p className='text-gray-500 text-sm'>/year</p>
  </div>
  <button className='text-white font-semibold bg-black rounded-xl px-6 py-2'>Join</button>
</div>
</div>

<div className='col-span-1 mt-15'>
<img src={f3} className='w-55 h-50 rounded-xl mb-5' alt="" />
<div className='text-gray-500 text-xs flex gap-3 ms-3 items-center'>
  <div className='flex gap-2 items-center'> <CiClock1 size={15}/> <p>1h 40m</p></div>
  <div className='flex gap-2 items-center'> <FaUserFriends size={15}/> <p>437</p></div>
</div>
<p className='text-md mt-2 font-semibold ms-2'>
Data Science <br /> with R</p>
<div className='flex justify-between'>
  <div className='flex gap-2 items-center mt-2'>
  <p className='text-lg font-semibold ms-2'>$53.74</p> <p className='text-gray-500 text-sm'>/year</p>
  </div>
  <button className='text-white font-semibold bg-black rounded-xl px-6 py-2'>Join</button>
</div>
</div>

<div className='col-span-1 mt-15'>
<img src={f4} className='w-55 h-50 rounded-xl mb-5' alt="" />
<div className='text-gray-500 text-xs flex gap-3 ms-3 items-center'>
  <div className='flex gap-2 items-center'> <CiClock1 size={15}/> <p>1h 40m</p></div>
  <div className='flex gap-2 items-center'> <FaUserFriends size={15}/> <p>437</p></div>
</div>
<p className='text-md mt-2 font-semibold ms-2'>Graphic Designer <br /> Essentials</p>
<div className='flex justify-between'>
  <div className='flex gap-2 items-center mt-2'>
  <p className='text-lg font-semibold ms-2'>$23.74</p> <p className='text-gray-500 text-sm'>/year</p>
  </div>
  <button className='text-white font-semibold bg-black rounded-xl px-6 py-2'>Join</button>
</div>
</div>
</div>



    </div>
  )
}

export default Course