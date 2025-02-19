import back from '../assets/cosback.jpg'
import pp from '../assets/pp.webp'
import { ImProfile } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { useNavigate,useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const  Profile = () => {
    const userName= localStorage.getItem("userName")
const navigate=useNavigate();
const location = useLocation();
    const Bottomitems=[
        {icons:<ImProfile size={20}/>, label:'Profile',url:'user'},
        {icons:<FaHeart size={20}/>, label:'Followers',url:'followers'},
        {icons:<FaUserFriends size={20}/>, label:'Friends',url:'friends'},
        {icons:<RiGalleryFill size={20}/>, label:'Gallery',url:'gallery'},
    ]
  return (
    <div className='mt-20 mx-5'>

        <div className=''>
        <h1 className='text-2xl font-bold'>Profile</h1>
<p className='text-sm mt-5'>Dashboard <span className='ms-5'> Profile</span><span className='text-gray-500 ms-5'>{userName}</span></p>
<div className='w-full mt-10 rounded-t-2xl h-60 bg-cover relative flex items-end' style={{ backgroundImage: `url(${back})` }}>
        <div className='ms-43 mb-5'>
        <h1 className='text-2xl text-white font-bold'>{userName}</h1>
        <p className='text-gray-500 font-semibold mt-2'>CTO</p>
        </div>
        <img src={pp} className='w-32 rounded-full z-1 absolute left-5 top-32' alt="" />
</div>
<div className='w-full bg-white h-12 p-5 flex justify-end font-semibold text-gray-500 rounded-b-xl'>
<ul className='flex gap-5'>
{Bottomitems.map((items,i)=>{
     const isActive = location.pathname.includes(items.url)
    return(
<li key={i} className={`flex gap-2 items-center cursor-pointer p-2 pb-4
    ${isActive ? 'text-black border-b-3':''} `} onClick={() => navigate(items.url)}>
<div>{items.icons}</div>
<p>{items.label}</p>
</li>
    )
})}
</ul>
</div>
        </div>
<div>
<Outlet/>
</div>
    </div>
  )
}

export default  Profile