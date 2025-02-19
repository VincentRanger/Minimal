import s1 from "../assets/1.webp"
import s2 from "../assets/2.webp"
import s3 from "../assets/3.webp"
import s4 from "../assets/4.webp"
import s5 from "../assets/5.webp"
import { FaLocationDot} from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react"

const Followers = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };
  return (
    <div className='mt-10'>
      <h1 className='font-semibold text-2xl'>Followers</h1>
<div className='grid grid-cols-3 mt-10 gap-10 mb-10'>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s1} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div> <button onClick={handleFollow}
className={`text-black font-semibold border px-2 me-2 border-gray-300 rounded-lg ${
                isFollowed ? "text-green-500 border-0" : ""}`}>
              {isFollowed ? (
                <div className="flex items-center gap-1">
                  <FaCheck className=" text-green-500" />
                  Followed
                </div>
              ) : ("Follow")}
            </button>
   </div>
</div>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s3} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div><button className="text-black font-semibold border px-2 bg-white me-2 border-gray-400 rounded-lg">Follow</button></div>
</div>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s4} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div><button className="text-black font-semibold border px-2 bg-white me-2 border-gray-400 rounded-lg">Follow</button></div>
</div>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s2} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div><button className="text-black font-semibold border px-2 bg-white me-2 border-gray-400 rounded-lg">Follow</button></div>
</div>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s3} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div><button className="text-black font-semibold border px-2 bg-white me-2 border-gray-400 rounded-lg">Follow</button></div>
</div>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s5} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div><button className="text-black font-semibold border px-2 bg-white me-2 border-gray-400 rounded-lg">Follow</button></div>
</div>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s4} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div><button className="text-black font-semibold border px-2 bg-white me-2 border-gray-400 rounded-lg">Follow</button></div>
</div>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s1} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div><button className="text-black font-semibold border px-2 bg-white me-2 border-gray-400 rounded-lg">Follow</button></div>
</div>
<div className='col-span-1 flex justify-between items-center'>
  <div className="flex gap-2">
  <img src={s3} alt=""  className="w-12 rounded-full "/>
  <div className="items-center">
    <h1 className="font-semibold">Jayvion Simon</h1>
    <div className="flex text-gray-500"><FaLocationDot className="mt-1 me-1"/>United States</div>
  </div>
  </div>
<div><button className="text-black font-semibold border px-2 bg-white me-2 border-gray-400 rounded-lg">Follow</button></div>
</div>
</div>
    </div>
  )
}

export default Followers