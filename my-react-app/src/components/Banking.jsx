import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { PiArrowDownLeft } from "react-icons/pi";
import { PiArrowUpRight } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import card from '../assets/card.png'
import Doubleline from './charts/Doubleline'
import Doublechart from './charts/Doublechart'
import s1 from "../assets/1.webp"
import s2 from "../assets/2.webp"
import s3 from "../assets/3.webp"
import s4 from "../assets/4.webp"
import s5 from "../assets/5.webp"
import pop from '../assets/pop.webp'
import Loader from "react-js-loader";
import { useState,useEffect } from 'react';

function Banking() {

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
      <div className='grid grid-cols-5'>
        <div className='col-span-3'>
      <div className='justify-between flex'>
<div className='flex'><h1 className='text-gray-400 font-semibold'>Total balance</h1><CiCircleInfo className='mt-1 ms-1 text-gray-800'/></div>
      <div className='flex gap-4'>
<div className='flex font-semibold'><FaArrowUp className='mt-1 me-1' /><h1>Send</h1></div>
<div className='flex font-semibold'><IoMdAdd className='mt-1 me-1' /><h1>Add card</h1></div>
<div className='flex font-semibold'><FaArrowDown className='mt-1 me-1' /><h1>Request</h1></div>
      </div>
      </div>
      <div>
        <h1 className='font-bold text-4xl mt-1'>$49,990</h1>
      </div>
      <div className='mt-10 flex gap-5'> 
        <div className=' shadow-md w-80 h-25'>
          <div className='flex text-green-700 bg-green-200 w-16 ms-60 rounded-md'><MdKeyboardDoubleArrowUp className='mt-1' /><p>+8.2%</p></div>
          <div className='flex mt-1 '>
          <div className='bg-green-900 w-10 h-10 pt-2 rounded-full'><PiArrowDownLeft size={23} className='ms-2 text-white'/></div>
        <div className='ms-3'>
        <div className='flex'>
          <h1 className='font-semibold'>Income</h1>
          <CiCircleInfo className='mt-1 ms-1'/>
        </div>
        <div><h1 className='font-bold text-2xl'>$9,990</h1></div>
          </div>
        </div>
        </div>
        <div className=' shadow-md w-80 h-25'>
          <div className='flex text-orange-700 bg-orange-200 w-16 ms-60 rounded-md'><MdKeyboardDoubleArrowDown className='mt-1' /><p>-6.6%</p></div>
          <div className='flex mt-1 '>
          <div className='bg-amber-900 w-10 h-10 pt-2 rounded-full'><PiArrowUpRight size={23} className='ms-2 text-white'/></div>
        <div className='ms-3'>
        <div className='flex'>
          <h1 className='font-semibold'>Expense</h1>
          <CiCircleInfo className='mt-1 ms-1'/>
        </div>
        <div><h1 className='font-bold text-2xl'>$1,989</h1></div>
          </div>
        </div>
        </div>
      </div>
      </div>
      <div className='col-span-2 bg-gray-900 ms-20  p-5 font-bold rounded-xl w-80 h-60'>
      <CiMenuKebab className=' ms-65 text-gray-500' />
      <p className='text-gray-500 '>Current balance</p>
      <p className='text-white text-2xl mt-2'>$23,432.03</p>
      <div className='flex mt-5 ms-17'>
      <img src={card} className='w-9 h-6 mt-1 rounded-md'/>
      <p className='text-white text-lg ms-2'>**** **** **** 3690</p>
      </div>
      <div className='flex gap-10 mt-5'>
        <div>
          <h1 className='text-gray-500 text-sm'>Card holder</h1>
          <h1 className='text-white'>Deja Brady</h1>
        </div>
        <div>
        <h1 className='text-gray-500 text-sm'>Expire Date</h1>
        <h1 className='text-white'>11/22</h1>
        </div>
      </div>
      </div>
      </div>
    
      <div className='mt-5 grid grid-cols-3'>
        <div className='col-span-2'>
        <Doubleline/>
        </div>
        <div className='col-span-1 me-5'>
<div className='flex justify-between'>
<h1 className='font-semibold text-xl'>Contacts</h1>
<button className='font-semibold text-sm'>View all</button>
</div>
<p className='text-gray-500'>You have 122 contacts</p>
<div className='flex mt-3'>
  <img src={s1} className='w-12 me-3 rounded-full'/>
  <div>
    <h1 className='font-bold'>Melanie Noble</h1>
    <p className='text-gray-500'>luella.ryan33@gmail.com</p>
  </div>
</div>
<div className='flex mt-3'>
  <img src={s2} className='w-12 me-3 rounded-full'/>
  <div>
    <h1 className='font-bold'>Chase Day</h1>
    <p className='text-gray-500'>joana.simonis84@gmail.com</p>
  </div>
</div>
<div className='flex mt-3'>
  <img src={s3} className='w-12 me-3 rounded-full'/>
  <div>
    <h1 className='font-bold'>Shawn Manning</h1>
    <p className='text-gray-500'>marjolaine.white94@gmail.com</p>
  </div>
</div>
<div className='flex mt-3'>
  <img src={s4} className='w-12 me-3 rounded-full'/>
  <div>
    <h1 className='font-bold'>Soren Durham</h1>
    <p className='text-gray-500'>vergie.block82@hotmail.com</p>
  </div>
</div>
<div className='flex mt-3'>
  <img src={s5} className='w-12 me-3 rounded-full'/>
  <div>
    <h1 className='font-bold'>Cortez Herring</h1>
    <p className='text-gray-500'>vito.hudson@hotmail.com</p>
  </div>
</div>
        </div>
      </div>

      <div className='mt-5 grid grid-cols-3'>
        <div className='col-span-2'>
        <h1 className='font-semibold text-xl col-span-2'>Balance statistics</h1>
        <p className='text-gray-500 mb-5'>Statistics on balance over time</p>
<Doublechart/>
        </div>
       <div className='col-span-1 text-white bg-green-700 w-77 h-82 rounded-2xl mt-2 p-9 pe-5 relative'>
<div className='flex justify-between'>
  <div className='font-bold'>
    <h1 className='text-xl'>Invite friends <br /> and earn</h1>
    <h1 className='text-5xl mt-1'>$50</h1>
  </div>
  <img src={pop} className='w-25'/>
</div>
<p className='mt-7'>Praesent egestas tristique nibh.<br/> Duis lobortis massa imperdiet quam.</p>
<input type="text" placeholder='Email' size={25} className='p-3 mt-4 bg-green-800 rounded-lg'/>
<button className='text-black text-sm bg-amber-400 rounded-lg p-1 px-3 font-semibold absolute right-10 bottom-7 '>Invite</button>
       </div>
      </div>

<div className='grid grid-cols-3'>
<div className='col-span-2'>
<h1 className='font-semibold text-xl'>Recent transitions</h1>
<div className='text-gray-500 flex font-semibold mt-6 text-md'>
  <h1>Description</h1>
  <h1 className='ms-38'>Date</h1>
  <h1 className='ms-39'>Amount</h1>
  <h1 className='ms-33'>Status</h1>
</div>
<div className='mt-6 flex items-center'>
  <div className='relative'>
  <img src={s1} className='w-10 rounded-full'/>
  <PiArrowDownLeft className='bg-green-700 text-white h-5 w-5 rounded-full absolute top-6 left-6'/>
  </div>
<div className='ms-4 text-sm'>
  <h1 className='font-semibold'>Receive money from</h1>
  <p className='text-gray-500'>Annette black</p>
</div>
<div className='text-sm ms-12'>
  <h1>11 Feb 2025</h1>
  <p className='text-xs text-gray-500 mt-1'>8:37 am</p>
</div>
<div className='ms-29'>
  <h1>$68.71</h1>
</div>
<div className='ms-35'>
  <h1 className='text-orange-500 bg-orange-300 px-2 py-1 font-bold rounded-lg text-xs'>Progress</h1>
</div>
</div>
<div className='mt-6 flex items-center'>
  <div className='relative'>
  <img src={s2} className='w-10 rounded-full'/>
  <PiArrowUpRight className='bg-orange-700 text-white h-5 w-5 rounded-full absolute top-6 left-6'/>
  </div>
<div className='ms-4 text-sm'>
  <h1 className='font-semibold'>Payment for</h1>
  <p className='text-gray-500'>Courtney henry</p>
</div>
<div className='text-sm ms-20'>
  <h1>10 Feb 2025</h1>
  <p className='text-xs text-gray-500 mt-1'>7:37 am</p>
</div>
<div className='ms-29'>
  <h1>$85.21</h1>
</div>
<div className='ms-34'>
  <h1 className='text-green-500 bg-green-300 px-2 py-1 font-bold rounded-lg text-xs'>Completed</h1>
</div>
</div>
<div className='mt-6 flex items-center'>
  <div className='relative'>
  <img src={s3} className='w-10 rounded-full'/>
  <PiArrowDownLeft className='bg-green-700 text-white h-5 w-5 rounded-full absolute top-6 left-6'/>
  </div>
<div className='ms-4 text-sm'>
  <h1 className='font-semibold'>Receive money from</h1>
  <p className='text-gray-500'>Annette black</p>
</div>
<div className='text-sm ms-12'>
  <h1>11 Feb 2025</h1>
  <p className='text-xs text-gray-500 mt-1'>8:37 am</p>
</div>
<div className='ms-29'>
  <h1>$68.71</h1>
</div>
<div className='ms-36'>
  <h1 className='text-red-500 bg-red-300 px-2 py-1 font-bold rounded-lg text-xs'>Failed</h1>
</div>
</div>
<div className='mt-6 flex items-center'>
  <div className='relative'>
  <img src={s4} className='w-10 rounded-full'/>
  <PiArrowDownLeft className='bg-green-700 text-white h-5 w-5 rounded-full absolute top-6 left-6'/>
  </div>
<div className='ms-4 text-sm'>
  <h1 className='font-semibold'>Receive money from</h1>
  <p className='text-gray-500'>Annette black</p>
</div>
<div className='text-sm ms-12'>
  <h1>11 Feb 2025</h1>
  <p className='text-xs text-gray-500 mt-1'>8:37 am</p>
</div>
<div className='ms-29'>
  <h1>$68.71</h1>
</div>
<div className='ms-35'>
  <h1 className='text-orange-500 bg-orange-300 px-2 py-1 font-bold rounded-lg text-xs'>Progress</h1>
</div>
</div>
<div className='mt-6 flex items-center mb-5'>
  <div className='relative'>
  <img src={s5} className='w-10 rounded-full'/>
  <PiArrowDownLeft className='bg-green-700 text-white h-5 w-5 rounded-full absolute top-6 left-6'/>
  </div>
<div className='ms-4 text-sm'>
  <h1 className='font-semibold'>Receive money from</h1>
  <p className='text-gray-500'>Annette black</p>
</div>
<div className='text-sm ms-12'>
  <h1>11 Feb 2025</h1>
  <p className='text-xs text-gray-500 mt-1'>8:37 am</p>
</div>
<div className='ms-29'>
  <h1>$68.71</h1>
</div>
<div className='ms-35'>
  <h1 className='text-orange-500 bg-orange-300 px-2 py-1 font-bold rounded-lg text-xs'>Progress</h1>
</div>
</div>
<div className='text-end me-3 mb-5'>
<button className='font-semibold text-sm'>View All</button>
</div>
</div>
</div>
    </div>
  )
}

export default Banking