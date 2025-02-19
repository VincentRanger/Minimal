import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiGalleryFill } from "react-icons/ri";
import { MdVideoCameraBack } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import pp from '../assets/pp.webp'
import t1 from '../assets/t1.webp'
import t2 from '../assets/t2.webp'
import t3 from '../assets/t3.webp'
import t4 from '../assets/t4.webp'
import t5 from '../assets/t5.webp'
import s1 from "../assets/1.webp"
import s2 from "../assets/2.webp"
import s3 from "../assets/3.webp"
import s4 from "../assets/4.webp"
import s5 from "../assets/5.webp"
import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

const User = () => {
  const [likeCount,setLikeCount]=useState(20)
  const [liked,setLiked]=useState(false)

  const handleLike=()=>{
    setLiked(!liked)
    setLikeCount(liked ? likeCount-1: likeCount+1)
  }

  return (
    <div className='mt-10 mx-5'>
<div className='grid grid-cols-6 gap-10'>
<div className='col-span-2'>
<div className='flex justify-between px-10'>
  <div className='justify-items-center items-center'>
  <h1 className='text-2xl font-bold'>1947</h1>
  <p className='text-sm text-gray-500'>Follower</p>
  </div>
 <div className='justify-items-center items-center'>
 <h1 className='text-2xl font-bold'>9124</h1>
 <p className='text-sm text-gray-500'>Following</p>
 </div>
</div>
</div>
<div className='col-span-4 items-center'>
<input type="text" size={100} className='text-gray-500 mt-4 outline-0 focus:text-black' placeholder='Share what you are thinking here...'/>
</div>
</div>

<div className='grid grid-cols-6 mt-10 gap-10'>
<div className='col-span-2'>
  <div>
  <h1 className='text-xl font-semibold mb-5'>About</h1>
  <p className='text-sm'>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..</p>
  <div className='flex gap-4 mt-5 mb-5 text-sm ms-1'><FaLocationDot size={20}/><h1>Live at United Kingdom</h1></div>
  <div className='flex gap-4 mb-5 text-sm ms-1'><FaEnvelope size={20}/><h1>ashlynn.ohara62@gmail.com</h1></div>
  <div className='flex gap-4 mb-5 text-sm ms-1'><FaSuitcase size={20}/><h1>CTO at Gleichner, Mueller and Tromp</h1></div>
  <div className='flex gap-4 mb-5 yext-sm ms-1'><FaSuitcase size={20}/><h1>Studied at Nikolaus - Leuschke</h1></div>
  </div>

<div className="mt-15">
<h1 className='text-xl font-semibold mb-5'>Social</h1>
<div className='flex gap-4 mt-5 mb-5 text-sm ms-1'><FaFacebookF size={20}/><h1 className="hover:underline">https://www.facebook.com/caitlyn.kerluke</h1></div>
  <div className='flex gap-4 mb-5 text-sm ms-1'><FaInstagram size={20}/><h1 className="hover:underline">https://www.instagram.com/caitlyn.kerluke</h1></div>
  <div className='flex gap-4 mb-5 text-sm ms-1'><FaLinkedin size={20}/><h1 className="hover:underline">https://www.linkedin.com/in/caitlyn.kerluke</h1></div>
  <div className='flex gap-4 mb-5 text-sm ms-1'><FaXTwitter size={20}/><h1 className="hover:underline">https://www.twitter.com/caitlyn.kerluke</h1></div>
</div>
</div>

<div className="col-span-4">
<div className="flex justify-between mt-7 items-center"> 
  <div className="flex gap-5">
    <div>
    <label for="file-upload" className="flex items-center gap-2"> <RiGalleryFill size={20} className="text-green-600"/>
    <p className="font-semibold">Image/Video</p></label><input className="hidden" type="file" id="file-upload" />
    </div>
  <div className="flex">
  <MdVideoCameraBack  size={20} className="text-orange-600"/><p className="font-semibold">Streaming</p>
  </div>
  </div>
  <div><button className="bg-black text-white font-semibold px-3 py-1 rounded-lg hover:bg-gray-500">Post</button></div>
</div>

<div className="mt-20">
  <div className="justify-between flex items-center">
  <div className="flex gap-5">
<img src={pp} className="w-10 rounded-full"/>
<div>
  <h1 className="font-semibold">Jaydon Frankie</h1>
  <p className="text-xs text-gray-500">18 Feb 2025</p>
</div>
  </div>
<div>
<CiMenuKebab size={20} className="text-gray-500" />
</div>
</div>
<p className="mt-5 text-sm">The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.</p>
<img src={t1} className="rounded-lg w-full h-100 mt-5" alt="" />
<div className="mt-5 flex justify-between">
<div className="flex">
  <div className="flex text-gray-500 items-center gap-2 cursor-pointer me-2" onClick={handleLike}>
  <FaHeart size={20} className={!liked ? "text-gray-500": "text-orange-500"}/>
  <h1>{likeCount}</h1>
  </div>
  <div className="flex gap-1">
<img src={s1} className="w-7 rounded-full" alt="" />
<img src={s2} className="w-7 rounded-full" alt="" />
<img src={s3} className="w-7 rounded-full" alt="" />
<div className="px-1 items-center rounded-full bg-green-400 text-green-700"><p className="mt-1 text-xs font-bold">+17</p></div>
  </div>
  </div>
  <div className="text-gray-500 gap-5 flex items-center">
  <AiFillMessage size={20}/>
  <FaShareAlt size={20}/>
  </div>
</div>
<div className="flex justify-between mt-5">
  <div className="flex gap-2">
  <img src={s1} className="w-10 h-10 rounded-full" alt="" />
  <div><h1 className="font-semibold">Lainey Davidson</h1><p className="text-gray-500 ">Praesent venenatis metus at</p></div>
  </div>
<p className="text-gray-500">16 Feb 2025</p>
</div>
<div className="flex justify-between mt-5">
  <div className="flex gap-2">
  <img src={s2} className="w-10 h-10 rounded-full" alt="" />
  <div><h1 className="font-semibold">Lainey Davidson</h1><p className="text-gray-500 ">Praesent venenatis metus at</p></div>
  </div>
<p className="text-gray-500">16 Feb 2025</p>
</div>
<div className="flex gap-2 mt-5 items-center mb-5">
  <img src={pp} className="w-10 h-10 rounded-full" alt="" />
<input type="text" size={85} placeholder="Write a comment..." className="text-gray-500 border-gray-300 border rounded p-2 focus:text-black outline-0" />
</div>
</div>

<div className="mt-20">
  <div className="justify-between flex items-center">
  <div className="flex gap-5">
<img src={pp} className="w-10 rounded-full"/>
<div>
  <h1 className="font-semibold">Jaydon Frankie</h1>
  <p className="text-xs text-gray-500">18 Feb 2025</p>
</div>
  </div>
<div>
<CiMenuKebab size={20} className="text-gray-500" />
</div>
</div>
<p className="mt-5 text-sm">The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.</p>
<img src={t2} className="rounded-lg w-full h-100 mt-5" alt="" />
<div className="mt-5 flex justify-between">
<div className="flex">
  <div className="flex text-gray-500 items-center gap-2 cursor-pointer me-2" onClick={handleLike}>
  <FaHeart size={20} className={!liked ? "text-gray-500": "text-orange-500"}/>
  <h1>{likeCount}</h1>
  </div>
  <div className="flex gap-1">
<img src={s1} className="w-7 rounded-full" alt="" />
<img src={s2} className="w-7 rounded-full" alt="" />
<img src={s3} className="w-7 rounded-full" alt="" />
<div className="px-1 items-center rounded-full bg-green-400 text-green-700"><p className="mt-1 text-xs font-bold">+17</p></div>
  </div>
  </div>
  <div className="text-gray-500 gap-5 flex items-center">
  <AiFillMessage size={20}/>
  <FaShareAlt size={20}/>
  </div>
</div>
<div className="flex justify-between mt-5">
  <div className="flex gap-2">
  <img src={s1} className="w-10 h-10 rounded-full" alt="" />
  <div><h1 className="font-semibold">Lainey Davidson</h1><p className="text-gray-500 ">Praesent venenatis metus at</p></div>
  </div>
<p className="text-gray-500">16 Feb 2025</p>
</div>
<div className="flex justify-between mt-5">
  <div className="flex gap-2">
  <img src={s2} className="w-10 h-10 rounded-full" alt="" />
  <div><h1 className="font-semibold">Lainey Davidson</h1><p className="text-gray-500 ">Praesent venenatis metus at</p></div>
  </div>
<p className="text-gray-500">16 Feb 2025</p>
</div>
<div className="flex gap-2 mt-5 items-center mb-5">
  <img src={pp} className="w-10 h-10 rounded-full" alt="" />
<input type="text" size={85} placeholder="Write a comment..." className="text-gray-500 border-gray-300 border rounded p-2 focus:text-black outline-0" />
</div>
</div>

<div className="mt-20">
  <div className="justify-between flex items-center">
  <div className="flex gap-5">
<img src={pp} className="w-10 rounded-full"/>
<div>
  <h1 className="font-semibold">Jaydon Frankie</h1>
  <p className="text-xs text-gray-500">18 Feb 2025</p>
</div>
  </div>
<div>
<CiMenuKebab size={20} className="text-gray-500" />
</div>
</div>
<p className="mt-5 text-sm">The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.</p>
<img src={t3} className="rounded-lg w-full h-100 mt-5" alt="" />
<div className="mt-5 flex justify-between">
<div className="flex">
  <div className="flex text-gray-500 items-center gap-2 cursor-pointer me-2" onClick={handleLike}>
  <FaHeart size={20} className={!liked ? "text-gray-500": "text-orange-500"}/>
  <h1>{likeCount}</h1>
  </div>
  <div className="flex gap-1">
<img src={s1} className="w-7 rounded-full" alt="" />
<img src={s4} className="w-7 rounded-full" alt="" />
<img src={s5} className="w-7 rounded-full" alt="" />
<div className="px-1 items-center rounded-full bg-green-400 text-green-700"><p className="mt-1 text-xs font-bold">+17</p></div>
  </div>
  </div>
  <div className="text-gray-500 gap-5 flex items-center">
  <AiFillMessage size={20}/>
  <FaShareAlt size={20}/>
  </div>
</div>
<div className="flex justify-between mt-5">
  <div className="flex gap-2">
  <img src={s1} className="w-10 h-10 rounded-full" alt="" />
  <div><h1 className="font-semibold">Lainey Davidson</h1><p className="text-gray-500 ">Praesent venenatis metus at</p></div>
  </div>
<p className="text-gray-500">16 Feb 2025</p>
</div>
<div className="flex justify-between mt-5">
  <div className="flex gap-2">
  <img src={s2} className="w-10 h-10 rounded-full" alt="" />
  <div><h1 className="font-semibold">Lainey Davidson</h1><p className="text-gray-500 ">Praesent venenatis metus at</p></div>
  </div>
<p className="text-gray-500">16 Feb 2025</p>
</div>
<div className="flex gap-2 mt-5 items-center mb-5">
  <img src={pp} className="w-10 h-10 rounded-full" alt="" />
<input type="text" size={85} placeholder="Write a comment..." className="text-gray-500 border-gray-300 border rounded p-2 focus:text-black outline-0" />
</div>
</div>
</div>
</div>






    </div>
  )
}

export default User