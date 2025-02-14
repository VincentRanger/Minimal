import React from "react";
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
import { useNavigate, useLocation } from "react-router-dom";

const allMenuItems = [
  { icon: <IoIosSpeedometer size={20} />, label: "App", url: "app" },
  { icon: <HiShoppingBag size={20} />, label: "Ecommerce", url: "ecommerce" },
  { icon: <SiGoogleanalytics size={20} />, label: "Analytics", url: "analytic" },
  { icon: <CiBank size={20} />, label: "Banking", url: "banking" },
  { icon: <TbBrandBooking size={20} />, label: "Booking", url: "booking" },
  { icon: <FaFile size={20} />, label: "File", url: "file" },
  { icon: <SiCoursera size={20} />, label: "Course", url: "course" },
];

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const userRole = localStorage.getItem("userRole");
  const userEmail= localStorage.getItem("userEmail")
  const userName= localStorage.getItem("userName")

  const filteredMenuItems = allMenuItems.filter(item => {
    if (userRole === "Admin") {
      return true;
    } else if (userRole === "Hr") {
      return item.label === "Analytics";
    } else if (userRole === "Finance") {
      return item.label !== "App" && item.label !== "Analytics" && item.label !=="Banking"
      && item.label !=="File" && item.label !=="Course";
    } else if(userRole === "Developer"){
      return item.label === "Banking"
    }
  });

  return (
    <nav
      className={`shadow-md fixed h-screen p-2 flex flex-col duration-500 ${
        open ? "w-75" : "w-38"
      }`}
    >
      <div className="h-20 px-3 py-2 flex justify-between items-center">
        <img
          src={Logo}
          alt="logo"
          className={`w-12 rounded-md cursor-pointer duration-500 ${
            !open ? "ms-5" : ""
          }`}
        />
        <MdOutlineKeyboardArrowLeft
          size={30}
          className={`cursor-pointer duration-500 ms-2 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className="flex-1">
        {filteredMenuItems.map((item, i) => {
          const isActive = location.pathname.includes(item.url);
          return (
            <li
              key={i}
              className={`px-3 py-2 rounded-md text-gray-700 cursor-pointer duration-500 ${
                open ? "text-sm" : "text-xs"
              } gap-2 items-center ${
                open ? "flex" : "block"
              } ${isActive ? "bg-green-200" : ""}`}
              onClick={() => navigate(item.url)}>
              <div className={`justify-self-center ${isActive ? "text-green-700":''}`}>{item.icon}</div>
              <p className={`justify-self-center font-semibold ${isActive ? "text-green-700":""}`}>{item.label}</p>
            </li>
          );
        })}
      </ul>
      <div
        className={`items-center px-3 py-2 duration-500 ${
          open ? "block" : "hidden"
        }`}
      >
        <img src={pp} alt="profile" className="w-13 ms-20 mb-3 rounded-full" />
        <div className="text-center w-52">
          <p>{userName}</p>
          <span>{userEmail}</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
