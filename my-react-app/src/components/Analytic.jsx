import React from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import back1 from '../assets/1back.avif'
import back2 from '../assets/2back.webp'
import back3 from '../assets/back5.jpg'
import back4 from '../assets/4back.webp'
import bag from '../assets/bag.svg'
import user from '../assets/user.svg'
import shop from '../assets/shop.svg'
import some from '../assets/something.svg'
import Linechart from './charts/Linechart'
import Linechart2 from './charts/Linechart2'
import Linechart3 from './charts/Linechart3'
import Pies from './charts/Pie'
import Doublechart from './charts/Doublechart';
import n1 from '../assets/N1.webp'
import n2 from '../assets/N2.webp'
import n3 from '../assets/N3.webp'
import n4 from '../assets/N4.webp'
import n5 from '../assets/N5.webp'
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import Loader from "react-js-loader";
import { useState,useEffect } from 'react';

function Analytic() {

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
      <h1 className='font-bold text-2xl'>Hi, Welcome back</h1>
      <div className='grid grid-cols-4 mt-8'>
<div className='col-span-1 rounded-lg p-5 py-4 h-60 w-60 text-green-200 bg-cover' style={{ backgroundImage: `url(${back1})` }}>
  <div className=' flex items-center font-bold justify-end'><IoIosTrendingUp/><h1>+2.6%</h1></div>
<img src={bag} className='w-13'/>
<h1 className='font-semibold'>Weekly sales</h1>
<h1 className='text-2xl font-bold'>714k</h1>
<div className='ms-25'><Linechart/></div>
</div>
<div className='col-span-1 rounded-lg p-5 py-4 h-60 w-60 text-purple-200 bg-cover' style={{ backgroundImage: `url(${back3})` }}>
  <div className=' flex items-center font-bold justify-end'><IoIosTrendingUp/><h1>+0.6%</h1></div>
<img src={user} className='w-13'/>
<h1 className='font-semibold'>New users</h1>
<h1 className='text-2xl font-bold'>1.3m</h1>
<div className='ms-25'><Linechart2/></div>
</div>
<div className='col-span-1 rounded-lg p-5 py-4 h-60 w-60 text-orange-200 bg-cover' style={{ backgroundImage: `url(${back4})` }}>
  <div className=' flex items-center font-bold justify-end'><IoIosTrendingUp/><h1>+2.8%</h1></div>
<img src={shop} className='w-13'/>
<h1 className='font-semibold'>Purchase orders</h1>
<h1 className='text-2xl font-bold'>1.72m</h1>
<div className='ms-25'><Linechart3/></div>
</div>
<div className='col-span-1 rounded-lg p-5 py-4 h-60 w-60 text-red-700 bg-cover' style={{ backgroundImage: `url(${back2})` }}>
  <div className=' flex items-center font-bold justify-end'><IoIosTrendingUp/><h1>+3.6%</h1></div>
<img src={some} className='w-13'/>
<h1 className='font-semibold'>Messages</h1>
<h1 className='text-2xl font-bold'>234</h1>
<div className='ms-25'><Linechart3/></div>
</div>
      </div>

<div className='mt-10 grid grid-cols-3 ms-5'>
<div className='col-span-1'>
<h1 className='font-semibold text-lg mb-5'>Current visit</h1>
<Pies/>
</div>
<div className='col-span-2'>
<h1 className='font-semibold text-lg'>Website visit</h1>
<p className='text-gray-400 mb-5'>+43 than last year</p>
<Doublechart/>
</div>
</div>

<div className='grid grid-cols-3 mt-5'>
<div className='col-span-2'>
  <h1 className='font-bold text-lg mb-5'>News</h1>
<div className='flex items-center gap-3'>
<img src={n1} className='w-12 h-12 rounded-lg'/>
<div>
<h1 className='font-semibold'>The Future of Renewable Energy: Innovations and Challenges Ahead</h1>
<p className='text-gray-400'>The sun slowly set over the horizon, painting the sky in vibrant hues of ...</p>
</div>
<p className='text-gray-400 text-xs ms-7'>an hour</p>
</div>
<div className='flex items-center gap-3 mt-5'>
<img src={n2} className='w-12 h-12 rounded-lg'/>
<div>
<h1 className='font-semibold'>Exploring the Impact of Artificial Intelligence on Modern Healthcare</h1>
<p className='text-gray-400'>She eagerly opened the gift, her eyes sparkling with excitement.</p>
</div>
<p className='text-gray-400 text-xs ms-11'>a day</p>
</div>
<div className='flex items-center gap-3 mt-5'>
<img src={n3} className='w-12 h-12 rounded-lg'/>
<div>
<h1 className='font-semibold'>Climate Change and Its Effects on Global Food Security</h1>
<p className='text-gray-400'>The old oak tree stood tall and majestic, its branches swaying gently in t ...</p>
</div>
<p className='text-gray-400 text-xs ms-4'>2 days</p>
</div>
<div className='flex items-center gap-3 mt-5'>
<img src={n4} className='w-12 h-12 rounded-lg'/>
<div>
<h1 className='font-semibold'>The Rise of Remote Work: Benefits, Challenges, and Future Trends</h1>
<p className='text-gray-400'>The aroma of freshly brewed coffee filled the air, awakening my senses.</p>
</div>
<p className='text-gray-400 text-xs ms-8'>3 days</p>
</div>
<div className='flex items-center mt-5 gap-3'>
<img src={n5} className='w-12 h-12 rounded-lg'/>
<div>
<h1 className='font-semibold'>Understanding Blockchain Technology: Beyond Cryptocurrency</h1>
<p className='text-gray-400'>TThe children giggled with joy as they ran through the sprinklers on a hot  ...</p>
</div>
<p className='text-gray-400 text-xs'>4 days
</p>
</div>
<button className='text-black bg-white font-bold mt-5 ms-147'>View all</button>
</div>
<div className='col-span-1 mt-1 ms-5'>
<h1 className='font-bold text-lg mb-5'>Order timeline</h1>
<div className='flex gap-2 mb-5'>
<div className='w-3 h-3 rounded-full bg-green-900 mt-2'></div>
<div>
  <h1 className='font-semibold'>1983, orders, $4220</h1>
  <p className='text-gray-400 text-xs'>12 Feb 2025 10:47 am</p>
</div>
</div>
<div className='flex gap-2 mb-5'>
<div className='w-3 h-3 rounded-full bg-green-500 mt-2'></div>
<div>
  <h1 className='font-semibold'>12 Invoices have been paid</h1>
  <p className='text-gray-400 text-xs'>11 Feb 2025 9:47 am</p>
</div>
</div>
<div className='flex gap-2 mb-5'>
<div className='w-3 h-3 rounded-full bg-blue-500 mt-2'></div>
<div>
  <h1 className='font-semibold'>Order #37745 from September</h1>
  <p className='text-gray-400 text-xs'>10 Feb 2025 8:47 am</p>
</div>
</div>
<div className='flex gap-2 mb-5'>
<div className='w-3 h-3 rounded-full bg-yellow-500 mt-2'></div>
<div>
  <h1 className='font-semibold'>New order placed #XF-2356</h1>
  <p className='text-gray-400 text-xs'>09 Feb 2025 7:47 am</p>
</div>
</div>
<div className='flex gap-2'>
<div className='w-3 h-3 rounded-full bg-red-500 mt-2'></div>
<div>
  <h1 className='font-semibold'>New order placed #XF-2346</h1>
  <p className='text-gray-400 text-xs'>08 Feb 2025 6:47 am</p>
</div>
</div>
</div>
</div>

<div className='grid grid-cols-3 mt-5'>
<div className='col-span-1'>
<h1 className='font-semibold text-lg'>Traffic by site</h1>
<div className='flex items-center'>
  <div className='text-center p-15 py-10'>
  <FaFacebookF size={25} className='text-blue-500 ms-5 mb-2' />
  <h1 className='font-bold text-xl mb-2'>1.95k</h1>
  <p className='text-gray-400'>Facebook</p>
  </div>
  <div>
  <FaGoogle size={25} className='text-red-500 ms-4 mb-2' />
  <h1 className='font-bold text-xl mb-2'>9.12k</h1>
  <p className='text-gray-400'>Google</p>
  </div>
</div>
<div className='flex items-center'>
<div className='text-center px-13 ps-15'>
  <FaXTwitter size={25} className='text-black ms-4 mb-2' />
  <h1 className='font-bold text-xl mb-2'>8.49k</h1>
  <p className='text-gray-400'>Twiiter</p>
  </div>
  <div className='text-center px-5'>
  <FaLinkedin size={25} className='text-blue-900 ms-5 mb-2' />
  <h1 className='font-bold text-xl mb-2'>6.98k</h1>
  <p className='text-gray-400'>Linkedin</p>
  </div>
</div>
</div>
<div className='col-span-2'>
<h1 className='font-semibold text-lg mb-5'>Tasks</h1>
<div className='flex gap-2 mb-7'><input type='checkbox'/><h1 className='me-80'>Prepare Monthly Financial Report</h1><CiMenuKebab /></div>
<div className='flex gap-2 mb-7'><input type='checkbox'/><h1 className='me-80'>Design New Marketing Campaign</h1><CiMenuKebab /></div>
<div className='flex gap-2 mb-7'><input type='checkbox'/><h1 className='me-90'>Analyze Customer Feedback</h1><CiMenuKebab /></div>
<div className='flex gap-2 mb-7'><input type='checkbox'/><h1 className='me-97'>Update Website Content</h1><CiMenuKebab /></div>
<div className='flex gap-2'><input type='checkbox'/><h1 className='me-95'>Conduct Market Research</h1><CiMenuKebab /></div>
</div>


</div>

    </div>
  )
}

export default Analytic