import React from 'react'
import dropbox from '../assets/Dropbox.svg'
import drive from '../assets/drive.svg'
import onedrive from '../assets/onedrive.svg'
import { CiMenuKebab } from "react-icons/ci";
import ProgressBar from "@ramonak/react-progress-bar";
import Stackedchart from './charts/Stackedchart'
import { RiFileUploadFill } from "react-icons/ri";
import image from '../assets/image.svg'
import media from '../assets/media.svg'
import document from '../assets/document.svg'
import music from '../assets/music.svg'
import pdf from '../assets/pdf.svg'
import other from '../assets/other.svg'
import { AiFillPlusCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import folder from '../assets/folder.svg'
import s1 from "../assets/1.webp"
import s2 from "../assets/2.webp"
import s3 from "../assets/3.webp"
import s4 from "../assets/4.webp"
import s5 from "../assets/5.webp"
import black from '../assets/black.jpg'
import stock from '../assets/stock.webp'
import Loader from "react-js-loader";
import { useState,useEffect } from 'react';

function File() {
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
    <div className='mt-20 '>
<div className='grid grid-cols-3 gap-20 me-10'>
<div className='col-span-1'>
<CiMenuKebab className='justify-self-end'/> 
<img src={dropbox} className='w-12' alt="" />
<h1 className='font-semibold text-xl mt-4'>Dropbox</h1>
<ProgressBar completed={25} width={250} height="6px" bgColor="#000000" isLabelVisible={false} className='mt-5'/>
<div className='flex font-semibold justify-end mt-5'><p className='text-gray-500 me-1'>2.24gb</p><p className=''>/22.35GB</p></div>
</div>
<div className='col-span-1'>
<CiMenuKebab className='justify-self-end'/> 
<img src={drive} className='w-12' alt="" />
<h1 className='font-semibold text-xl mt-4'>Drive</h1>
<ProgressBar completed={25} width={250} height="6px" bgColor="#000000" isLabelVisible={false} className='mt-5'/>
<div className='flex font-semibold justify-end mt-5'><p className='text-gray-500 me-1'>2.24gb</p><p className=''>/22.35GB</p></div>
</div>
<div className='col-span-1'>
<CiMenuKebab className='justify-self-end'/> 
<img src={onedrive} className='w-12' alt="" />
<h1 className='font-semibold text-xl mt-4'>OneDrive</h1>
<ProgressBar completed={25} width={250} height="6px" bgColor="#000000" isLabelVisible={false} className='mt-5'/>
<div className='flex font-semibold justify-end mt-5'><p className='text-gray-500 me-1'>2.24gb</p><p className=''>/22.35GB</p></div>
</div>
</div>

<div className='grid grid-cols-3 mt-15'>
<div className='col-span-2'>
  <h1 className='text-xl font-semibold mb-10'>Data activity</h1>
<Stackedchart/>
</div>
<div className='col-span-1'>
<div className='text-gray-500 justify-center items-center text-center mt-10'><RiFileUploadFill className='justify-self-center' size={50}/><p>Upload File</p></div>
<div>
<div className='justify-center text-center ms-10 mt-25'>
<ProgressBar completed={76} width={250} height="20px" bgColor="#000000" isLabelVisible={false} className='mt-5'/>
</div>
<div className='mt-5 justify-center text-center'>
<h1 className='font-semibold text-xl'>76%</h1>
<p className='text-gray-500 text-xs mt-2'>Used of 22.6Gb/44.7Gb</p>
<div className='mt-5 justify-center ms-10 me-5'>
  <div className='flex gap-2'>
  <img src={image} alt="" />
  <div>
  <h1 className='font-semibold'>Images</h1>
  <p className='text-gray-500 text-sm'>223 files</p>
  </div>
  <h1 className='font-semibold ms-30'>11.8Gb</h1>
  </div>
</div>
<div className='mt-5 justify-center ms-10 me-5'>
  <div className='flex gap-2'>
  <img src={document} alt="" />
  <div>
  <h1 className='font-semibold'>Document</h1>
  <p className='text-gray-500 text-sm'>223 files</p>
  </div>
  <h1 className='font-semibold ms-24'>11.8Gb</h1>
  </div>
</div>
<div className='mt-5 justify-center ms-10 me-5'>
  <div className='flex gap-2'>
  <img src={media} alt="" />
  <div>
  <h1 className='font-semibold'>Media</h1>
  <p className='text-gray-500 text-sm'>223 files</p>
  </div>
  <h1 className='font-semibold ms-30'>11.8Gb</h1>
  </div>
</div>
<div className='mt-5 justify-center ms-10 me-5 mb-5'>
  <div className='flex gap-2'>
  <img src={other} alt="" />
  <div>
  <h1 className='font-semibold'>Other</h1>
  <p className='text-gray-500 text-sm'>223 files</p>
  </div>
  <h1 className='font-semibold ms-30'>11.8Gb</h1>
  </div>
</div>
</div>
</div>
</div>
</div>

<div className='grid grid-cols-3'>
<div className='col-span-2'>
  <div className='flex justify-between'>
  <div className='flex'><h1 className='text-xl font-semibold mb-10'>Folders</h1><AiFillPlusCircle size={30} className='text-green-600 ms-2'/></div>
  <button className='text-sm font-semibold'>View All</button>
  </div>
  <div className='grid grid-cols-3'>
    <div className='col-span-1 ms-3'>
    <div className='flex gap-2 justify-end'><FaStar className='text-amber-300'/><CiMenuKebab/></div>
    <img src={folder} alt="" />
    <h1 className='font-semibold mt-2'>Docs</h1>
    <p className='text-gray-500 mt-2 text-xs'>2.24 Gb 100 files</p>
    <div className='flex mt-3 items-center'><img src={s1} className='rounded-full w-5' /><img src={s2} className='rounded-full w-5' />
    <p className='bg-green-300 text-green-700 w-5 rounded-full text-xs'>+3</p>
    </div>
    </div>
    <div className='col-span-1 ms-3'>
    <div className='flex gap-2 justify-end'><FaStar className='text-amber-300'/><CiMenuKebab/></div>
    <img src={folder} alt="" />
    <h1 className='font-semibold mt-2'>Projects</h1>
    <p className='text-gray-500 mt-2 text-xs'>2.24 Gb 100 files</p>
    <div className='flex mt-3 items-center'><img src={s3} className='rounded-full w-5' /><img src={s4} className='rounded-full w-5' />
    <p className='bg-green-300 text-green-700 w-5 rounded-full text-xs'>+2</p>
    </div>
    </div>
    <div className='col-span-1 ms-3'>
    <div className='flex gap-2 justify-end'><FaStar className='text-amber-300'/><CiMenuKebab/></div>
    <img src={folder} alt="" />
    <h1 className='font-semibold mt-2'>Work</h1>
    <p className='text-gray-500 mt-2 text-xs'>2.24 Gb 100 files</p>
    <div className='flex mt-3 items-center'><img src={s5} className='rounded-full w-5' /><img src={s2} className='rounded-full w-5' />
    </div>
    </div>
  </div>

<div className='mt-15'>
<div className='flex justify-between'>
  <div className='flex'><h1 className='text-xl font-semibold mb-10'>Recent Files</h1><AiFillPlusCircle size={30} className='text-green-600 ms-2'/></div>
  <button className='text-sm font-semibold'>View All</button>
  </div>

  <div className='justify-between'>
  <div className='items-center ms-5 me-5'>
  <div className='justify-between flex mb-10'>
    <div className='flex gap-3'>
    <img src={image} className='w-8' alt="" />
  <div>
  <h1 className='font-semibold text-sm'>cover-2.jpg</h1>
  <p className='text-gray-500 text-xs'>45.78 Mb 13 Feb 2025 10:37 am</p>
  </div>
    </div>
<div className='flex gap-2 items-center'>
<div className='flex mt-3 items-center'><img src={s3} className='rounded-full w-5' /><img src={s4} className='rounded-full w-5' />
    <p className='bg-green-300 text-green-700 w-5 rounded-full text-xs'>+3</p>
    </div>
    <div className='flex gap-2 justify-end mt-4'><FaStar className='text-amber-300'/><CiMenuKebab/></div>
</div>
  </div>

  <div className='justify-between flex mb-10'>
    <div className='flex gap-3'>
    <img src={media} className='w-8' alt="" />
  <div>
  <h1 className='font-semibold text-sm'>expertise-2015-conakry-sao-tome-and-principe-gender.mp4</h1>
  <p className='text-gray-500 text-xs'>15.26 Mb
  12 Feb 2025 8:41 am</p>
  </div>
    </div>
<div className='flex gap-2 items-center'>
<div className='flex mt-3 items-center'><img src={s3} className='rounded-full w-5' /><img src={s4} className='rounded-full w-5' />
    </div>
    <div className='flex gap-2 justify-end mt-4'><FaStar className='text-gray-300'/><CiMenuKebab/></div>
</div>
  </div>

  <div className='justify-between flex mb-10'>
    <div className='flex gap-3'>
    <img src={music} className='w-8' alt="" />
  <div>
  <h1 className='font-semibold text-sm'>design-suriname-2015.mp3</h1>
  <p className='text-gray-500 text-xs'>22.89 Mb
  13 Feb 2025 9:41 am</p>
  </div>
    </div>
<div className='flex gap-2 items-center'>
<div className='flex mt-3 items-center'><img src={s3} className='rounded-full w-5' /><img src={s4} className='rounded-full w-5' />
    <p className='bg-green-300 text-green-700 w-5 rounded-full text-xs'>+2</p>
    </div>
    <div className='flex gap-2 justify-end mt-4'><FaStar className='text-amber-300'/><CiMenuKebab/></div>
</div>
  </div>

  <div className='justify-between flex mb-10'>
    <div className='flex gap-3'>
    <img src={pdf} className='w-8' alt="" />
  <div>
  <h1 className='font-semibold text-sm'>money-popup-crack.pdf</h1>
  <p className='text-gray-500 text-xs'>11.44 Mb
  11 Feb 2025 7:41 am</p>
  </div>
    </div>
<div className='flex gap-2 items-center'>
<div className='flex mt-3 items-center'><img src={s3} className='rounded-full w-5' />
    </div>
    <div className='flex gap-2 justify-end mt-4'><FaStar className='text-gray-300'/><CiMenuKebab/></div>
</div>
  </div>

  <div className='justify-between flex mb-10'>
    <div className='flex gap-3'>
    <img src={image} className='w-8' alt="" />
  <div>
  <h1 className='font-semibold text-sm'>cover-4.jpg</h1>
  <p className='text-gray-500 text-xs'>9.16 Mb
  10 Feb 2025 6:41 am</p>
  </div>
    </div>
<div className='flex gap-2 items-center'>
    <div className='flex gap-2 justify-end mt-4'><FaStar className='text-amber-300'/><CiMenuKebab/></div>
</div>
  </div>
</div>
  </div>



</div>












</div>
<div className='col-span-1 mt-10' >
<div className='w-75 h-50 bg-cover rounded-lg ms-7 grid grid-cols-3 p-8' style={{ backgroundImage: `url(${black})` }}>
<div className='col-span-2'>
<h1 className='text-xl text-white font-semibold'>Upgrade your plan and get more space</h1>
<button className='text-black bg-yellow-500 p-2 px-3 mt-6 rounded-xl'>Upgrade plan</button>
</div>
<div className='col-span-1'><img src={stock} className='w-30 h-35' alt="" /></div>
</div>
</div>
</div>
    </div>
  )
}

export default File