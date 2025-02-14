import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Aap from './Aap'
import Ecommerce from './Ecommerce'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  const [open,setOpen]=useState(true)
  return (
    <div className='flex mx-3'>
     <Sidebar open={open} setOpen={setOpen}/>
     <Navbar open={open} />
   <div className={`${!open ? 'w-[100%]': 'w-[80%]'} ${!open ? 'ms-37':'ms-75'}`}>
<Outlet/>
    </div>
    </div>
  )
}

export default Dashboard