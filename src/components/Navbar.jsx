import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import up from '../assets/up.webp'
import { FaSearch } from "react-icons/fa"
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import pp from '../assets/pp.webp'
import g from '../assets/g.svg'   
import e from '../assets/e.svg'   
import f from '../assets/f.svg'  
import k from '../assets/k.svg'   
import { MdMessage } from "react-icons/md";
import s1 from "../assets/1.webp"
import s2 from "../assets/2.webp"
import s3 from "../assets/3.webp"
import { FaPlus } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiFileUserFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Navbar = ({ open }) => {
  const userEmail = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");

  const [isOpen, setIsOpen] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); 
  const [selectedFlag, setSelectedFlag] = useState(e); 
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      icons: <LiaFlagUsaSolid size={20} />,
      feature: (
        <div className='absolute right-40 px-4 py-2 shadow-md mt-2 bg-white rounded-md'>
          <div className='flex cursor-pointer' onClick={() => { setSelectedLanguage('German'); setSelectedFlag(g) }}>
            <img src={g} className='w-5 me-3' />
            <h1 className='hover:underline'>German</h1>
          </div>
          <div className='flex cursor-pointer' onClick={() => { setSelectedLanguage('English'); setSelectedFlag(e) }}>
            <img src={e} className='w-5 me-3 mt-2' />
            <h1 className='hover:underline'>English</h1>
          </div>
          <div className='flex cursor-pointer' onClick={() => { setSelectedLanguage('French'); setSelectedFlag(f) }}>
            <img src={f} className='w-5 me-3 mt-2' />
            <h1 className='hover:underline'>French</h1>
          </div>
          <div className='flex cursor-pointer' onClick={() => { setSelectedLanguage('Korean'); setSelectedFlag(k) }}>
            <img src={k} className='w-5 me-3 mt-2' />
            <h1 className='hover:underline'>Korean</h1>
          </div>
        </div>
      )
    },
    {
      icons: <FaBell size={20} />,
      feature: <div className='absolute top-20 left-200 p-5 w-100 h-70 shadow-lg items-center bg-white rounded-md'>
        <h1 className='font-bold text-xl'>Notifications</h1>
        <div className='justify-items-center text-gray-500 mt-15'>
          <div><MdMessage size={50}/></div>
          <h1>No new notifications</h1>
        </div>
      </div>
    },
    {
      icons: <FaUser size={20} />,
      feature: <div className='absolute top-20 left-200 p-5 w-100 shadow-lg items-center bg-white rounded-md'>
      <h1 className='font-bold text-xl'>Contacts</h1>
      <div className='justify-items-center text-gray-500 mt-2'>
        <h1>No contacts saved</h1>
      </div>
    </div>
    },
    {
      icons: <IoSettings size={20} />,
      feature: <div></div>
    },
    {
      icons: <img src={pp} width={40} className='rounded-full' />,
      feature: <div className='absolute right-0 top-20 rounded-lg text-center py-10 shadow-2xl h-130 w-80 bg-gray-50'>
        <div className='shadow-md pb-5 w-80 justify-items-center'>
        <div className='mb-4 justify-items-center'><img src={pp} className='w-20 rounded-full' /></div>
        <h1 className='font-bold'>{userName}</h1>
        <h1 className='text-gray-500'>{userEmail}</h1>
        <div className='flex gap-3 mt-5'>
            <img src={s1} alt="" className='rounded-full w-10' />
          <img src={s2} alt="" className='rounded-full w-10' />
          <img src={s3} alt="" className='rounded-full w-10' />
          <div className='w-10 bg-gray-200 justify-items-center rounded-full items-center'><FaPlus className='text-gray-500 mt-2' size={22} /></div>
        </div>
        </div>
        <div className='justify-items-start justify-start px-5 mt-8'>
        <div className='flex gap-2 text-gray-500 font-semibold p-2 hover:bg-gray-300 w-full'><FaHome size={20}/><h1>Home</h1></div>
        <div className='flex gap-2 text-gray-500 font-semibold p-2 hover:bg-gray-300 w-full' onClick={()=> navigate('profile/user')}><RiFileUserFill size={20}/><h1>Profile</h1></div>
        <div className='flex gap-2 text-gray-500 font-semibold p-2 hover:bg-gray-300 w-full'><MdOutlineSecurity size={20}/><h1>Security</h1></div>
        <div className='flex gap-2 text-gray-500 font-semibold p-2 hover:bg-gray-300 w-full'><IoMdSettings size={20}/><h1>Settings</h1></div>
        </div>
        <button onClick={() => { localStorage.clear(); navigate('/') }} className='font-bold text-red-900 bg-red-200 px-5 w-70 rounded-lg py-2 mt-2 cursor-pointer hover:bg-red-400'>Logout</button>
      </div>
    },
  ];

  return (
    <nav ref={navbarRef} className={`flex h-15 fixed backdrop-blur-sm items-center mx-6 z-2 justify-between duration-500 ${open ? 'inset-x-0 top-0 left-72' : 'inset-x-0 top-0 left-34'}  `}>
      <div className='flex gap-2'>
        <img src={up} className='w-6 h-6' />
        <p>Team1</p>
      </div>
      <ul className='flex items-center gap-5'>
        {menuItems.map((items, i) => (
          <li key={i} className=''>
            <p className='text-gray-500 cursor-pointer' onClick={() => handleToggle(i)}>
              {i === 0 ? <img src={selectedFlag} className='w-6 h-6' /> : items.icons}
            </p>
            {isOpen === i && (
              <div>{items.feature}</div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
