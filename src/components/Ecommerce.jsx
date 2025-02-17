import back4 from "../assets/dsa.jpg";
import fly from "../assets/fly.webp"
import back3 from "../assets/back3.jpeg";
import ie from "../assets/1.webp"
import ij from "../assets/2.webp"
import ig from "../assets/3.webp"
import ic from "../assets/4.webp"
import im from "../assets/5.webp"
import { FaAngleDoubleUp } from "react-icons/fa";
import s1 from "../assets/s1.webp"
import s2 from "../assets/s2.webp"
import s3 from "../assets/s3.webp"
import s4 from "../assets/s4.webp"
import s5 from "../assets/s5.webp"
import g from "../assets/g.svg";
import e from "../assets/e.svg";
import f from "../assets/f.svg";
import k from "../assets/k.svg";
import u from "../assets/u.svg";
import Linechart from "./charts/Linechart";
import Linechart2 from "./charts/Linechart2";
import Linechart3 from "./charts/Linechart3";
import Radial from "./charts/Radialbar";
import Doubleline from "./charts/Doubleline";
import ProgressBar from "@ramonak/react-progress-bar";
import Loader from "react-js-loader";
import { useState,useEffect } from 'react';

const Ecommerce = () => {
  const userName= localStorage.getItem("userName")
    const userRole= localStorage.getItem("userRole");

    const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const timer= setTimeout(()=>{
  setLoading(false)
    },1000)
  },[])
  
  if(loading){
    return(
      <div className="justify-center items-center mt-60">
        <Loader type='spinner-default' size={100} bgColor="gray"/>
      </div>
    )
  }
    return (
      <div className="mt-20 mx-5">
        <div className="gap-9 grid grid-cols-3 ">
          <div
            className="bg-cover col-span-2 h-70 rounded-2xl py-10 px-10 flex justify-between"
            style={{ backgroundImage: `url(${back4})` }}
          >
            <div className="">
              <h1 className="font-bold text-2xl">Congratulations</h1>
              <h1 className="font-bold text-2xl">{userName}</h1>
              <p className="text-gray-500 text-md mt-5">
              Best seller of the month you have done
                <br /> 57.6% more sales today.
              </p>
              {userRole==="Admin" && (<button className="rounded-lg bg-green-400 text-white font-bold px-3 py-2 mt-4 hover:bg-green-500 cursor-pointer">
                Go now
              </button>)}
            </div>
            <img src={fly} className="w-20" />
          </div>
          <div
            className="bg-cover col-span-1 rounded-2xl px-5 py-4"
            style={{ backgroundImage: `url(${back3})` }}
          >
            <h1 className="text-gray-400 text-sm font-bold mt-35">
            NEW
            </h1>
            <h1 className="text-white text-lg font-bold mb-2 mt-2">
              Urban Explorer Sneakers
            </h1>
            <button className="rounded-lg bg-green-400 text-white font-bold px-3 py-1 mt-4 hover:bg-green-500 cursor-pointer">
                Buy now
              </button>
          </div>
        </div>
        {(userRole==='Admin' &&
           <div className="grid grid-cols-3 gap-5 h-30 mt-10">
           <div className=" py-2 px-3 flex justify-between items-center">
            <div>
            <h1 className="font-bold mb-3">Product sold</h1>
             <h1 className="font-bold text-3xl mb-3">765</h1>
             <p className="flex">
               <FaAngleDoubleUp className="text-green-600 mt-1" />
               +2.6% <span className="text-gray-500 ms-1">last 7 days</span>
             </p>
              </div>
             <div>
              <Linechart/>
              </div>
           </div>
           <div className="py-2 px-3 justify-between items-center flex">
            <div>
            <h1 className="font-bold mb-3">Total balance</h1>
             <h1 className="font-bold text-3xl mb-3">18,765</h1>
             <p className="flex">
               <FaAngleDoubleUp className="text-green-600 mt-1" />
               +0.1% <span className="text-gray-500 ms-1">last 7 days</span>
             </p>
            </div>
            <Linechart2/>
           </div>
           <div className=" py-2 px-3 flex justify-between items-center">
            <div>
            <h1 className="font-bold mb-3">Sales profit</h1>
             <h1 className="font-bold text-3xl mb-3">4,876</h1>
             <p className="flex">
               <FaAngleDoubleUp className="text-green-600 mt-1" />
               +0.6% <span className="text-gray-500 ms-1">last 7 days</span>
             </p>
            </div>
           <Linechart3/>
           </div>
         </div>
        )}

<div className="mt-20 grid grid-cols-3">
  <div className=" col-span-1">
  <h1 className="font-semibold text-lg">Sales By Gender</h1>
  <Radial/>
  </div>
  <div className="col-span-2">
  <h1 className="font-semibold text-lg">Yearly Sales</h1>
  <p className="text-gray-500 mb-10">+43% than last year</p>
  <Doubleline/>
  </div>
</div>
      
<div className="grid grid-cols-3 gap-10 mt-5">
  <div className="col-span-2 me-10">
  <div>
  <h1 className="font-semibold text-lg mb-6">Sales  overview</h1>
  </div>
 <div className="flex justify-between mb-5">
  <div>
  <h1 className="font-semibold text-sm mb-2">Total Profit</h1>
  <ProgressBar completed={20} width={550} height="10px" bgColor="#82ca9d" isLabelVisible={false}/>
  </div>
<div>
  <h1 className="font-bold">$8,374<span className="ms-2 text-gray-400">10.1%</span></h1>
</div>
 </div>
 <div className="flex justify-between mb-5">
  <div>
  <h1 className="font-semibold text-sm mb-2">Total Profit</h1>
  <ProgressBar completed={30} width={550} height="10px" bgColor="#89CFF0 " isLabelVisible={false}/>
  </div>
<div>
  <h1 className="font-bold">$9,714<span className="ms-2 text-gray-400">13.6%</span></h1>
</div>
 </div>
 <div className="flex justify-between">
  <div>
  <h1 className="font-semibold text-sm mb-2">Total Profit</h1>
  <ProgressBar completed={40} width={550} height="10px" bgColor="#FFC300" isLabelVisible={false}/>
  </div>
<div>
  <h1 className="font-bold">$6,871<span className="ms-2 text-gray-400">28.2%</span></h1>
</div>
 </div>
 </div>
<div className="col-span-1 ms-10 justify-end">
  <h1 className="font-semibold mb-3">Current balance</h1>
  <h1 className="font-bold text-4xl">$187,650</h1>
  <div className="flex justify-between mt-3 font-sm"><h1 className="text-gray-500">Order total</h1><p>$287,650</p></div>
  <div className="flex justify-between mt-3 font-sm"><h1 className="text-gray-500">Earning</h1><p>$25,500</p></div>
  <div className="flex justify-between mt-3 font-sm"><h1 className="text-gray-500">Refunded</h1><p>$1,600</p></div>
  <div className="mt-4 flex justify-around">
    <button className="text-black rounded-lg font-semibold bg-amber-300 px-9 py-2">Request</button>
    <button className="text-white rounded-lg font-semibold bg-green-600 px-9 py-2">Transfer</button>
  </div>
</div>
</div>

        <div className="mt-15 grid grid-cols-4">
          <div className="col-span-3">
            <h1 className="font-medium text-lg mb-5">Best salesman</h1>
            <table className="text-center w-200">
              <thead className="text-gray-500">
                <tr>
                  <th className="px-10 py-3">Seller</th>
                  <th className="px-10 py-3">Product</th>
                  <th className="px-10 py-3">Country</th>
                  <th className="px-10 py-3">Total</th>
                  <th className="px-10 py-3">Rank</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-5"><div className="flex items-center gap-2">
                    <img src={ie} className="w-10 rounded-full"/><p>Jayvion Simon</p></div></td>
                  <td>CAP</td>
                  <td><img src={u} className="w-7 rounded-sm ms-14" /></td>
                  <td>$83.74</td>
                  <td><p className="bg-green-200 text-green-700 font-bold w-11 ms-11 rounded-lg text-sm">Top 1</p></td>
                </tr>
                <tr>
                <td className="py-5"><div className="flex items-center gap-2">
                    <img src={ij} className="w-10 rounded-full"/><p>Lucian Obrien</p></div></td>
                  <td>Branded shoes</td>
                  <td><img src={g} className="w-7 rounded-sm ms-14" /></td>
                  <td>$97.14</td>
                  <td><p className="bg-purple-200 text-purple-700 font-bold w-11 ms-11 rounded-lg text-sm">Top 2</p></td>
                </tr>
                <tr>
                <td className="py-5"><div className="flex items-center gap-2">
                    <img src={ig} className="w-10 rounded-full"/><p>Deja Brady</p></div></td>
                  <td>Headphone</td>
                  <td><img src={f} className="w-7 rounded-sm ms-14" /></td>
                  <td>$68.71	</td>
                  <td><p className="bg-blue-200 text-blue-700 font-bold w-11 ms-11 rounded-lg text-sm">Top 3</p></td>
                </tr>
                <tr>
                <td className="py-5"><div className="flex items-center gap-2">
                    <img src={ic} className="w-10 rounded-full"/><p>Harrison Stein</p></div></td>
                  <td>Cell phone</td>
                  <td><img src={k} className="w-7 rounded-sm ms-14" /></td>
                  <td>$85.21</td>
                  <td><p className="bg-yellow-200 text-yellow-700 font-bold w-11 ms-11 rounded-lg text-sm">Top 4</p></td>
                </tr>
                <tr>
                <td className="py-5"><div className="flex items-center gap-2">
                    <img src={im} className="w-10 rounded-full"/><p>Reece Chung</p></div></td>
                  <td>Earings</td>
                  <td><img src={e} className="w-7 rounded-sm ms-14" /></td>
                  <td>$52.17</td>
                  <td><p className="bg-red-200 text-red-700 font-bold w-11 ms-11 rounded-lg text-sm">Top 5</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-1">
            <h1 className="font-medium text-lg mb-5">Latest products</h1>
            <div className="mt-7">
              <div className="flex">
                <div>
                  <img src={s1} className="w-10 rounded-md" />
                </div>
                <div className="flex ms-2">
                  <h1 className="font-medium me-2">Urban Explorer Sneakers</h1>
                </div>
              </div>
              <div className="flex text-gray-500 ms-13">
                <p>$83.74</p>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex">
              <div>
                  <img src={s2} className="w-10 rounded-md" />
                </div>
                <div className="flex ms-2">
                  <h1 className="font-medium me-2">Urban Explorer Sneakers</h1>
                </div>
              </div>
              <div className="flex text-gray-500 ms-13">
                <p>$83.74</p>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex">
              <div>
                  <img src={s3} className="w-10 rounded-md" />
                </div>
                <div className="flex ms-2">
                  <h1 className="font-medium me-2">Urban Explorer Sneakers</h1>
                </div>
              </div>
              <div className="flex text-gray-500 ms-13">
                <p>$83.74</p>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex">
              <div>
                  <img src={s4} className="w-10 rounded-md" />
                </div>
                <div className="flex ms-2">
                  <h1 className="font-medium me-2">Urban Explorer Sneakers</h1>
                </div>
              </div>
              <div className="flex text-gray-500 ms-13">
                <p>$83.74</p>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex">
              <div>
                  <img src={s5} className="w-10 rounded-md" />
                </div>
                <div className="flex ms-2">
                  <h1 className="font-medium me-2">Urban Explorer Sneakers</h1>
                </div>
              </div>
              <div className="flex text-gray-500 ms-13">
                <p>$83.74</p>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    );
}

export default Ecommerce