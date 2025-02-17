import back from "../assets/asd.jpg";
import stand from "../assets/stand.webp";
import back2 from "../assets/back2.jpeg";
import { FaAngleDoubleUp } from "react-icons/fa";
import m from "../assets/m.webp";
import o from "../assets/o.webp";
import a from "../assets/a.webp";
import j from "../assets/j.webp";
import i from "../assets/i.webp";
import { FaDownload } from "react-icons/fa6";
import { FaHardDrive } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import g from "../assets/g.svg";
import e from "../assets/e.svg";
import f from "../assets/f.svg";
import k from "../assets/k.svg";
import u from "../assets/u.svg";
import { IoLogoAndroid } from "react-icons/io";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import a1 from "../assets/a1.webp";
import b1 from "../assets/b1.webp";
import c1 from "../assets/c1.webp";
import { IoMdHeart } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import Chart from "./charts/Chart"
import Chart2 from "./charts/Chart2";
import Chart3 from "./charts/Chart3"
import Piechart from "./charts/Piechart";
import Stackedchart from "./charts/Stackedchart";
import Loader from "react-js-loader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Aap = ({open, setOpen}) => {
  const userName= localStorage.getItem("userName")
  const userRole= localStorage.getItem("userRole");
  const [loading,setLoading]=useState(true)

const location=useLocation()

useEffect(()=>{
  const timer= setTimeout(()=>{
setLoading(false)
  },1000)
},[])

if(loading){
  return(
    <div className="justify-center items-center mt-60">
      <Loader type='spinner-default' size={100} bgColor="green"/>
    </div>
  )
}

  return (
    <div className="mt-20 mx-5">
      <div className="gap-9 grid grid-cols-3 ">
        <div
          className="bg-cover col-span-2 h-70 rounded-2xl py-10 px-10 flex justify-between"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div className="">
            <h1 className="font-bold text-2xl">Welcome Back</h1>
            <h1 className="font-bold text-2xl">{userName}</h1>
            <p className="text-gray-500 text-md mt-5">
              If you are going to use a passage of Lorem Ipsum, you
              <br /> need to be sure there isn't anything.
            </p>
            {userRole==="Admin" && (<button className="rounded-lg bg-red-400 text-white font-bold px-3 py-2 mt-4 hover:bg-red-500 cursor-pointer">
              Go now
            </button>)}
          </div>
          <img src={stand} className="w-20" />
        </div>
        <div
          className="bg-cover col-span-1 rounded-2xl px-5 py-4"
          style={{ backgroundImage: `url(${back2})` }}
        >
          <h1 className="text-green-400 text-sm font-bold mt-10">
            FEATURED APP
          </h1>
          <h1 className="text-white text-lg font-bold mb-2 mt-10">
            The Rise Of Something ...
          </h1>
          <h1 className="text-white text-sm font-bold">
            They dont nkow what they aer doing ...
          </h1>
        </div>
      </div>
      {(userRole==='Admin' &&
         <div className='grid grid-cols-3 gap-5 h-30 mt-10'>
         <div className=" py-2 px-3 justify-between flex items-center col-span-1 border">
          <div>
          <h1 className="font-bold mb-3">Total active users</h1>
           <h1 className="font-bold text-3xl mb-3">18,765</h1>
           <p className="flex">
             <FaAngleDoubleUp className="text-green-600 mt-1" />
             +2.6% <span className="text-gray-500 ms-1">last 7 days</span>
           </p>
          </div>
           <div className=""><Chart/></div>
         </div>
         <div className="py-2 px-3 justify-between flex items-center col-span-1 border">
          <div>
          <h1 className="font-bold mb-3">Total active users</h1>
           <h1 className="font-bold text-3xl mb-3">4,765</h1>
           <p className="flex">
             <FaAngleDoubleUp className="text-green-600 mt-1" />
             +0.2% <span className="text-gray-500 ms-1">last 7 days</span>
           </p>
          </div>
         <div><Chart2/></div>
         </div>
         <div className=" py-2 px-3 justify-between flex items-center col-span-1 border">
          <div>
          <h1 className="font-bold mb-3">Total active users</h1>
           <h1 className="font-bold text-3xl mb-3">678</h1>
           <p className="flex">
             <FaAngleDoubleUp className="text-green-600 mt-1" />
             +7.8% <span className="text-gray-500 ms-1">last 7 days</span>
           </p>
            </div>
          <div><Chart3/></div>
         </div>
       </div>
      )}
     
     <div className="mt-15 grid grid-cols-3 gap-5">
      <div className="col-span-1">
        <h1 className="font-bold text-lg mb-2">Current download</h1>
        <p className="text-gray-500">Downloaded by operating system</p>
      <Piechart/>
      </div>
<div className="col-span-2">
  <div>
    <h1 className="font-bold text-lg mb-2">Area installed</h1>
    <p className="text-gray-500 mb-2">+43% than last year</p>
  </div>
  <Stackedchart/>
</div>
     </div>

      <div className="mt-15 grid grid-cols-4">
        <div className="col-span-3 ">
          <h1 className="font-medium text-lg mb-5">New invoice</h1>
          <table className={`text-center w-200 border ${open ? 'w-[75%]':'w-[90%]'}`}>
            <thead className="text-gray-500 border">
              <tr>
                <th className="px-10 py-3 border">Invoice ID</th>
                <th className="px-10 py-3 border">Category</th>
                <th className="px-10 py-3 border">Price</th>
                <th className="px-10 py-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="py-5 border">INV-1990</td>
                <td className="border">Android</td>
                <td className="border">$83.74</td>
                <td className="border"><p className="bg-green-200 text-green-700 font-bold w-10 ms-18 rounded-lg text-sm">Paid</p></td>
              </tr>
              <tr className="border">
                <td className="py-5 border">INV-1991</td>
                <td className="border">Mac</td>
                <td className="border">$97.14</td>
                <td className="border"><p className="bg-red-200 text-red-700 font-bold w-25 ms-10 rounded-lg text-sm">Out of date</p></td>
              </tr>
              <tr className="border">
                <td className="py-5 border">INV-1992</td>
                <td className="border">Windows</td>
                <td className="border">$68.71</td>
                <td className="border"><p className="bg-yellow-200 text-yellow-600 font-bold w-20 ms-13 rounded-lg text-sm">Progress</p></td>
              </tr>
              <tr className="border">
                <td className="py-5 border">INV-1993</td>
                <td className="border">Android</td>
                <td className="border">$85.21</td>
                <td className="border"><p className="bg-green-200 text-green-700 font-bold w-10 ms-18 rounded-lg text-sm">Paid</p></td>
              </tr>
              <tr className="border">
                <td className="py-5 border">INV-1994</td>
                <td className="border">Mac</td>
                <td className="border">$52.17</td>
                <td className="border"><p className="bg-green-200 text-green-700 font-bold w-10 ms-18 rounded-lg text-sm">Paid</p></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-1">
          <h1 className="font-medium text-lg mb-5">Related applications</h1>
          <div className="mt-7">
            <div className="flex">
              <div>
                <img src={m} className="w-8" />
              </div>
              <div className="flex ms-5">
                <a href="www.google.com" target="_blank" alt="_blank" className="font-medium me-2 hover:underline">Microsoft office 365</a>
                <h1 className="font-bold text-gray-400">Free</h1>
              </div>
            </div>
            <div className="flex text-gray-500 ms-13 text-sm">
              <FaDownload className="mt-1 me-1" />
              <p className="me-2">9.91k</p>
              <FaHardDrive className="mt-1 me-1" />
              <p className="me-2">9.68 Mb</p>
              <FaStar className="mt-1 me-1" />
              <p>9.91k</p>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex">
              <div>
                <img src={i} className="w-8" />
              </div>
              <div className="flex ms-5">
                <a href="www.google.com" target="_blank" alt="_blank" className="font-medium me-2 hover:underline">Opera</a>
                <h1 className="font-bold text-gray-400">Free</h1>
              </div>
            </div>
            <div className="flex text-gray-500 ms-13 text-sm">
              <FaDownload className="mt-1 me-1" />
              <p className="me-2">1.95k</p>
              <FaHardDrive className="mt-1 me-1" />
              <p className="me-2">1.9Mb</p>
              <FaStar className="mt-1 me-1" />
              <p>1.95k</p>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex">
              <div>
                <img src={o} className="w-8" />
              </div>
              <div className="flex ms-5">
                <a href="www.google.com" target="_blank" alt="_blank" className="font-medium me-2 hover:underline">Adobe acrobat reader DC</a>
                <h1 className="font-bold text-gray-400">Free</h1>
              </div>
            </div>
            <div className="flex text-gray-500 ms-13 text-sm">
              <FaDownload className="mt-1 me-1" />
              <p className="me-2">9.12k</p>
              <FaHardDrive className="mt-1 me-1" />
              <p className="me-2">8.91 Mb</p>
              <FaStar className="mt-1 me-1" />
              <p>9.12k</p>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex">
              <div>
                <img src={a} className="w-8" />
              </div>
              <div className="flex ms-5">
                <a href="www.google.com" target="_blank" alt="_blank" className="font-medium me-2 hover:underline">Joplin</a>
                <h1 className="font-bold text-gray-400">Free</h1>
              </div>
            </div>
            <div className="flex text-gray-500 ms-13 text-sm">
              <FaDownload className="mt-1 me-1" />
              <p className="me-2">6.98k</p>
              <FaHardDrive className="mt-1 me-1" />
              <p className="me-2">6.82</p>
              <FaStar className="mt-1 me-1" />
              <p>6.98k</p>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex">
              <div>
                <img src={j} className="w-8" />
              </div>
              <div className="flex ms-5">
                <a href="www.google.com" target="_blank" alt="_blank" className="font-medium me-2 hover:underline">Topaz photo AI</a>
                <h1 className="font-bold text-gray-400">Free</h1>
              </div>
            </div>
            <div className="flex text-gray-500 ms-13 text-sm">
              <FaDownload className="mt-1 me-1" />
              <p className="me-2">8.49k</p>
              <FaHardDrive className="mt-1 me-1" />
              <p className="me-2">8.29 Mb</p>
              <FaStar className="mt-1 me-1" />
              <p>8.49k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3">
        <div className="col-span-1">
          <h1 className="font-medium text-lg mb-4">Top installed countries</h1>
          <div className="flex">
            <img src={g} className="w-7 rounded-md me-2" />
            <h1 className="me-5">Germany</h1>
            <IoLogoAndroid size={15} className="mt-1" />
            <p className="me-5">9.91k</p>
            <FaWindows size={15} className="mt-1" />
            <p className="me-5">1.95k</p>
            <FaApple size={15} className="mt-1" />
            <p>9.12k</p>
          </div>
          <div className="flex mt-5">
            <img src={u} className="w-7 rounded-md me-2" />
            <h1 className="me-7">England</h1>
            <IoLogoAndroid size={15} className="mt-1" />
            <p className="me-5">1.95k</p>
            <FaWindows size={15} className="mt-1" />
            <p className="me-4">9.12k</p>
            <FaApple size={15} className="mt-1" />
            <p>6.98k</p>
          </div>
          <div className="flex mt-5">
            <img src={f} className="w-7 rounded-md me-2" />
            <h1 className="me-10">France</h1>
            <IoLogoAndroid size={15} className="mt-1" />
            <p className="me-5">9.12k</p>
            <FaWindows size={15} className="mt-1" />
            <p className="me-5">6.98k</p>
            <FaApple size={15} className="mt-1" />
            <p>8.49k</p>
          </div>
          <div className="flex mt-5">
            <img src={k} className="w-7 rounded-md me-2" />
            <h1 className="me-9">Korean</h1>
            <IoLogoAndroid size={15} className="mt-1" />
            <p className="me-5">6.98k</p>
            <FaWindows size={15} className="mt-1" />
            <p className="me-5">8.49k</p>
            <FaApple size={15} className="mt-1" />
            <p>2.03k</p>
          </div>
          <div className="flex mt-5">
            <img src={e} className="w-7 rounded-md me-2" />
            <h1 className="me-13">USA</h1>
            <IoLogoAndroid size={15} className="mt-1" />
            <p className="me-5">8.49k</p>
            <FaWindows size={15} className="mt-1" />
            <p className="me-5">2.03k</p>
            <FaApple size={15} className="mt-1" />
            <p>3.36k</p>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="font-medium text-lg mb-4 ms-10">Top Authors</h1>
          <div className="flex ms-10">
            <div>
              <img src={a1} className="w-10 rounded-full" />
            </div>
            <div className="ms-4 text-gray-500">
              <h1 className="font-bold text-sm">Jayvion Simon</h1>
              <div className="flex">
                <IoMdHeart size={15} className="mt-1" />
                <p>9.91k</p>
              </div>
            </div>
            <FaTrophy size={30} className="mt-1 ms-15 text-red-800" />
          </div>
          <div className="flex ms-10 mt-9">
            <div>
              <img src={b1} className="w-10 rounded-full" />
            </div>
            <div className="ms-4 text-gray-500">
              <h1 className="font-bold text-sm">Deja Brady</h1>
              <div className="flex">
                <IoMdHeart size={15} className="mt-1" />
                <p>9.12k</p>
              </div>
            </div>
            <FaTrophy size={30} className="mt-1 ms-21 text-green-800" />
          </div>
          <div className="flex ms-10 mt-9">
            <div>
              <img src={c1} className="w-10 rounded-full" />
            </div>
            <div className="ms-4 text-gray-500">
              <h1 className="font-bold text-sm">Lucian Obrien</h1>
              <div className="flex">
                <IoMdHeart size={15} className="mt-1" />
                <p>1.95k</p>
              </div>
            </div>
            <FaTrophy size={30} className="mt-1 ms-17 text-blue-800" />
          </div>
        </div>

        <div className=" col-span-1">
          <div className="bg-green-800 h-30 w-85 mb-5 rounded-2xl flex px-3 py-2 items-center">
            <h1 className="text-xl text-white font-medium ms-5">48%</h1>
            <div className="ms-10">
              <h1 className="text-2xl text-white font-medium">38,556</h1>
              <h1 className="text-white font-medium">Conversions</h1>
            </div>
          </div>
          <div className="bg-blue-800 h-30 w-85 rounded-lg flex px-3 py-2 items-center">
            <h1 className="text-xl text-white font-medium ms-5">68%</h1>
            <div className="ms-10">
              <h1 className="text-2xl text-white font-medium">78,556</h1>
              <h1 className="text-white font-medium">Applications</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aap;
