import back from '../assets/asd.jpg'
import stand from '../assets/stand.webp'
import back2 from '../assets/back2.jpeg'
import { FaAngleDoubleUp } from "react-icons/fa";
import m from '../assets/m.webp'
import o from '../assets/o.webp'
import a from '../assets/a.webp'
import j from '../assets/j.webp'
import i from '../assets/i.webp'


const Aap = () => {
  return (
    <div className='mt-20'>
        <div className='gap-9 grid grid-cols-3 '>
            <div className='bg-cover col-span-2 h-70 rounded-2xl py-10 px-10 flex justify-between' style={{backgroundImage: `url(${back})`}}>
                <div className=''>
                <h1 className='font-bold text-2xl'>Welcome Back</h1>
                <h1 className='font-bold text-2xl'>Jaydon Frankie</h1>
                <p className='text-gray-500 text-md mt-5'>If you are going to use a passage of Lorem Ipsum, you<br/> need to be sure there isn't anything.</p>
                <button className='rounded-lg bg-red-400 text-white font-bold px-3 py-2 mt-4 hover:bg-red-500 cursor-pointer'>Go now</button>
                </div>
            <img src={stand} className='w-20'/>
            </div>
            <div className='bg-cover col-span-1 rounded-2xl px-5 py-4' style={{backgroundImage: `url(${back2})`}}>
<h1 className='text-green-400 text-sm font-bold mt-40'>FEATURED APP</h1>
<h1 className='text-white text-lg font-bold mb-2 mt-2'>The Rise Of Something Techno ...</h1>
<h1 className='text-white text-sm font-bold'>They dont nkow what they aer doing ...</h1>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-5 h-30 mt-10'>
<div className=' py-2 px-3'>
<h1 className='font-bold mb-3'>Total active users</h1>
<h1 className='font-bold text-3xl mb-3'>18,765</h1>
<p className='flex'><FaAngleDoubleUp className='text-green-600 mt-1'/>+2.6% <span className='text-gray-500 ms-1'>last 7 days</span></p>
</div>
<div className='py-2 px-3'>
<h1 className='font-bold mb-3'>Total active users</h1>
<h1 className='font-bold text-3xl mb-3'>4,765</h1>
<p className='flex'><FaAngleDoubleUp className='text-green-600 mt-1'/>+0.2% <span className='text-gray-500 ms-1'>last 7 days</span></p>
</div>
<div className=' py-2 px-3'>
<h1 className='font-bold mb-3'>Total active users</h1>
<h1 className='font-bold text-3xl mb-3'>678</h1>
<p className='flex'><FaAngleDoubleUp className='text-green-600 mt-1'/>+7.8% <span className='text-gray-500 ms-1'>last 7 days</span></p>
</div>
</div>
<div className='mt-15 flex'>
  <div>
  <h1 className='font-medium text-lg mb-5'>New invoice</h1>
  <table className='text-center'>
    <thead className='text-gray-500'>
    <tr>
      <th className='px-10 py-3'>Invoice ID</th>
      <th className='px-10 py-3'>Category</th>
      <th className='px-10 py-3'>Price</th>
      <th className='px-10 py-3'>Status</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td className='py-5'>INV-1990</td>
      <td>Android</td>
      <td>$83.74</td>
      <td>Paid</td>
    </tr>
    <tr>
      <td className='py-5'>INV-1991</td>
      <td>Mac</td>
      <td>$97.14</td>
      <td>Out of date</td>
    </tr>
    <tr>
      <td className='py-5'>INV-1992</td>
      <td>Windows</td>
      <td>$68.71</td>
      <td>Progress</td>
    </tr>
    <tr>
      <td className='py-5'>INV-1993</td>
      <td>Android</td>
      <td>$85.21</td>
      <td>Paid</td>
    </tr>
    <tr>
      <td className='py-5'>INV-1994</td>
      <td>Mac</td>
      <td>$52.17</td>
      <td>Paid</td>
    </tr>
    </tbody>
  </table>
  </div>
  <div>
  <h1 className='font-medium text-lg mb-5'>Related applications</h1>
    <div >
      <img src={m} className='w-8'/>
      <div>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Aap