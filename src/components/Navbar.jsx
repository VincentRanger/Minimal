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

const Navbar = ({ open }) => {

  const userEmail= localStorage.getItem("userEmail")
  const userName= localStorage.getItem("userName")

  const [isOpen, setIsOpen] = useState(null)
  const navigate = useNavigate()
  const navbarRef = useRef(null);

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? null : index)
  }

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
      icons: <FaSearch size={20} />,
      feature: <div></div>
    },
    {
      icons: <LiaFlagUsaSolid size={20} />,
      feature: <div className='absolute right-40 px-4 py-2 shadow-md mt-2 bg-gray-200 rounded-md'>
        <div className='flex'><img src={g} className='w-5 me-3' /><h1>German</h1></div>
        <div className='flex'><img src={e} className='w-5 me-3 mt-2' /><h1>English</h1></div>
        <div className='flex'><img src={f} className='w-5 me-3 mt-2' /><h1>French</h1></div>
        <div className='flex'><img src={k} className='w-5 me-3 mt-2' /><h1>Korean</h1></div>
      </div>
    },
    {
      icons: <FaBell size={20} />,
      feature: <div></div>
    },
    {
      icons: <FaUser size={20} />,
      feature: <div></div>
    },
    {
      icons: <IoSettings size={20} />,
      feature: <div></div>
    },
    {
      icons: <img src={pp} width={40} className='rounded-full' />,
      feature: <div className='absolute right-0 top-20 justify-center rounded-lg text-center py-10 shadow-2xl h-60 w-50 bg-gray-200'>
        <div className='ms-14 mb-4'><img src={pp} className='w-20 rounded-full' /></div>
        <h1 className='font-bold'>{userName}</h1>
        <h1 className='text-gray-500'>{userEmail}</h1>
        <button onClick={() => { localStorage.clear(); navigate('/') }} className='font-bold text-amber-900 mt-2 cursor-pointer hover:underline'>Logout</button>
      </div>
    },
  ]

  return (
    <nav ref={navbarRef} className={`flex h-15 fixed backdrop-blur-sm items-center mx-6 justify-between duration-500 ${open ? 'inset-x-0 top-0 left-72' : 'inset-x-0 top-0 left-34'}  `}>
      <div className='flex gap-2'>
        <img src={up} className='w-6 h-6' />
        <p>Team1</p>
      </div>
      <ul className='flex items-center gap-5'>
        {menuItems.map((items, i) => (
          <li key={i} className=''>
            <p className='text-gray-500 cursor-pointer' onClick={() => handleToggle(i)}>{items.icons}</p>
            {isOpen === i && (
              <div>{items.feature}</div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
