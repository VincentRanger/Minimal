import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Aap from './Aap'

const Dashboard = () => {
  const [open,setOpen]=useState(true)
  return (
    <div className='flex mx-3'>
     <Sidebar open={open} setOpen={setOpen}/>
   <div className={`${!open ? 'w-[100%]': 'w-[80%]'}`}>
    <Navbar open={open} />
    <Aap/>
    </div>
    </div>
  )
}

export default Dashboard