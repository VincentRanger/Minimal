import { CiMenuKebab } from "react-icons/ci";
import s1 from "../assets/1.webp"
import s2 from "../assets/2.webp"
import s3 from "../assets/3.webp"
import s4 from "../assets/4.webp"
import s5 from "../assets/5.webp"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Friends = () => {
  return (
    <div className='mt-10'>
      <div className='flex justify-between'>
      <h1 className='font-semibold text-2xl'>Friends</h1>
      </div>
      <div className='grid grid-cols-3 mt-10 gap-10'>
<div className='col-span-1 justify-items-center'>
<div className="justify-self-end text-gray-500"><CiMenuKebab /></div>
<img src={s4} className="w-15 rounded-full" alt="" />
<h1 className="font-semibold mt-2">Jayvion Simon</h1>
<p className="text-gray-500 text-md">CEO</p>
<div className="flex gap-4 mt-3">
  < FaFacebookF size={20}/>
  <FaInstagram size={20}/>
  <FaLinkedin size={20}/>
  <FaXTwitter size={20}/>
</div>
</div>
<div className='col-span-1 justify-items-center'>
<div className="justify-self-end text-gray-500"><CiMenuKebab /></div>
<img src={s1} className="w-15 rounded-full" alt="" />
<h1 className="font-semibold mt-2">Jayvion Simon</h1>
<p className="text-gray-500 text-md">CEO</p>
<div className="flex gap-4 mt-3">
  < FaFacebookF size={20}/>
  <FaInstagram size={20}/>
  <FaLinkedin size={20}/>
  <FaXTwitter size={20}/>
</div>
</div>
<div className='col-span-1 justify-items-center'>
<div className="justify-self-end text-gray-500"><CiMenuKebab /></div>
<img src={s4} className="w-15 rounded-full" alt="" />
<h1 className="font-semibold mt-2">Jayvion Simon</h1>
<p className="text-gray-500 text-md">CEO</p>
<div className="flex gap-4 mt-3">
  < FaFacebookF size={20}/>
  <FaInstagram size={20}/>
  <FaLinkedin size={20}/>
  <FaXTwitter size={20}/>
</div>
</div>
<div className='col-span-1 justify-items-center'>
<div className="justify-self-end text-gray-500"><CiMenuKebab /></div>
<img src={s2} className="w-15 rounded-full" alt="" />
<h1 className="font-semibold mt-2">Jayvion Simon</h1>
<p className="text-gray-500 text-md">CEO</p>
<div className="flex gap-4 mt-3">
  < FaFacebookF size={20}/>
  <FaInstagram size={20}/>
  <FaLinkedin size={20}/>
  <FaXTwitter size={20}/>
</div>
</div>
<div className='col-span-1 justify-items-center'>
<div className="justify-self-end text-gray-500"><CiMenuKebab /></div>
<img src={s3} className="w-15 rounded-full" alt="" />
<h1 className="font-semibold mt-2">Jayvion Simon</h1>
<p className="text-gray-500 text-md">CEO</p>
<div className="flex gap-4 mt-3">
  < FaFacebookF size={20}/>
  <FaInstagram size={20}/>
  <FaLinkedin size={20}/>
  <FaXTwitter size={20}/>
</div>
</div>
<div className='col-span-1 justify-items-center'>
<div className="justify-self-end text-gray-500"><CiMenuKebab /></div>
<img src={s5} className="w-15 rounded-full" alt="" />
<h1 className="font-semibold mt-2">Jayvion Simon</h1>
<p className="text-gray-500 text-md">CEO</p>
<div className="flex gap-4 mt-3">
  < FaFacebookF size={20}/>
  <FaInstagram size={20}/>
  <FaLinkedin size={20}/>
  <FaXTwitter size={20}/>
</div>
</div>

      </div>
      
    </div>
  )
}

export default Friends