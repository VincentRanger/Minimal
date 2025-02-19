import { CiMenuKebab } from "react-icons/ci";
import n1 from '../assets/N1.webp'
import n2 from '../assets/N2.webp'
import n3 from '../assets/N3.webp'
import n4 from '../assets/N4.webp'
import n5 from '../assets/N5.webp'

const Gallery = () => {
  return (
    <div className='mt-10'>
<h1 className='font-semibold text-2xl'>Gallery</h1>
<div className='grid grid-cols-3 mt-10 gap-10'>

<div className='rounded-xl col-span-1 w-full h-90 bg-cover p-5 flex justify-between'  style={{ backgroundImage: `url(${n1})` }}>
  <div className="self-end">
<h1 className="text-white font-semibold">The Future of Renewable Energy: Innovation</h1>
<p className="text-md text-gray-500">19 Feb 2025</p>
  </div>
  <div className="justify-self-end text-white">< CiMenuKebab/></div>
</div>

<div className='rounded-xl col-span-1 w-full h-90 bg-cover p-5 flex justify-between'  style={{ backgroundImage: `url(${n4})` }}>
  <div className="self-end">
<h1 className="text-white font-semibold">The Future of Renewable Energy: Innovation</h1>
<p className="text-md text-gray-500">19 Feb 2025</p>
  </div>
  <div className="justify-self-end text-white">< CiMenuKebab/></div>
</div>

<div className='rounded-xl col-span-1 w-full h-90 bg-cover p-5 flex justify-between'  style={{ backgroundImage: `url(${n2})` }}>
  <div className="self-end">
<h1 className="text-white font-semibold">The Future of Renewable Energy: Innovation</h1>
<p className="text-md text-gray-500">19 Feb 2025</p>
  </div>
  <div className="justify-self-end text-white">< CiMenuKebab/></div>
</div>

<div className='rounded-xl col-span-1 w-full h-90 bg-cover p-5 flex justify-between'  style={{ backgroundImage: `url(${n1})` }}>
  <div className="self-end">
<h1 className="text-white font-semibold">The Future of Renewable Energy: Innovation</h1>
<p className="text-md text-gray-500">19 Feb 2025</p>
  </div>
  <div className="justify-self-end text-white">< CiMenuKebab/></div>
</div>

<div className='rounded-xl col-span-1 w-full h-90 bg-cover p-5 flex justify-between'  style={{ backgroundImage: `url(${n3})` }}>
  <div className="self-end">
<h1 className="text-white font-semibold">The Future of Renewable Energy: Innovation</h1>
<p className="text-md text-gray-500">19 Feb 2025</p>
  </div>
  <div className="justify-self-end text-white">< CiMenuKebab/></div>
</div>

<div className='rounded-xl col-span-1 w-full h-90 bg-cover p-5 flex justify-between'  style={{ backgroundImage: `url(${n5})` }}>
  <div className="self-end">
<h1 className="text-white font-semibold">The Future of Renewable Energy: Innovation</h1>
<p className="text-md text-gray-500">19 Feb 2025</p>
  </div>
  <div className="justify-self-end text-white">< CiMenuKebab/></div>
</div>


</div>
    </div>
  )
}

export default Gallery