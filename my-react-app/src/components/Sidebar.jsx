import React, { useState } from "react";
import Logo from "../assets/Logo.webp";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import { TbBrandBooking } from "react-icons/tb";
import { FaFile } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import pp from "../assets/pp.webp";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    icon: <IoIosSpeedometer size={20} />,
    label: "App",
    url:'/app'
  },
  {
    icon: <HiShoppingBag size={20} />,
    label: "Ecommerce",
    url:'/ecommerce'
  },
  {
    icon: <SiGoogleanalytics size={20} />,
    label: "Analytics",
  },
  {
    icon: <CiBank size={20} />,
    label: "Banking",
  },
  {
    icon: <TbBrandBooking size={20} />,
    label: "Booking",
  },
  {
    icon: <FaFile size={20} />,
    label: "File",
  },
  {
    icon: <SiCoursera size={20} />,
    label: "Course",
  },
];

const Sidebar = ({ open, setOpen }) => {
  const navigate=useNavigate()
  return (
    <nav
      className={`shadow-md h-screen p-2 flex flex-col duration-500 ${
        open ? "w-75" : "w-38"
      }`}
    >
      <div className="h-20 px-3 py-2 flex justify-between items-center">
        <img src={Logo} className={`w-12 rounded-md cursor-pointer duration-500 ${!open ? 'ms-5' : ''}`} />
        <MdOutlineKeyboardArrowLeft
          size={30}
          className={`cursor-pointer duration-500 ms-2 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className="flex-1">
        {menuItems.map((items, i) => (
          <li
            key={i}
            className={`px-3 py-2 rounded-md text-gray-700 cursor-pointer duration-500 ${
              open ? "text-sm" : "text-xs"
            } gap-2 items-center ${open ? "flex" : "block"}`} onClick={()=> navigate(items.url)}
          >
            <div className="justify-self-center ">{items.icon}</div>
            <p className="justify-self-center ">{items.label}</p>
          </li>
        ))}
      </ul>
      <div
        className={`items-center ms-10 px-3 py-2 duration-500 ${
          open ? "block" : "hidden"
        }`}
      >
        <img src={pp} className="w-13 ms-8 mb-3 rounded-full" />
        <div>
          <p>Jaydon Frankie</p>
          <span>em@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
