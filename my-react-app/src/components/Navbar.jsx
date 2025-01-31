import React from 'react'
import up from '../assets/up.webp'
import { FaSearch } from "react-icons/fa"
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import pp from '../assets/pp.webp'

const menuItems=[{
    icons:<FaSearch size={20}/>
},
{
    icons:<LiaFlagUsaSolid size={20}/>
},
{
    icons:<FaBell size={20}/>
},
{
    icons:<FaUser size={20} />
},
{
    icons:<IoSettings size={20} />
},
{
    icons:<img src={pp} width={40} className='rounded-full'/>
},
]

const Navbar = ({open}) => {
  return (
    <nav className={`flex h-15 items-center px-3 justify-between absolute duration-500 ${open ? 'inset-x-0 top-0 left-75' :'inset-x-0 top-0 left-34'}  `}>
        <div className='flex gap-2'>
        <img src={up} className='w-6 h-6'/>
        <p>Team1</p>
        </div>
        <ul className='flex items-center gap-5'>
            {menuItems.map((items, i)=>(
<li key={i} className=''>
<div className='text-gray-500'>{items.icons}</div>
</li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar