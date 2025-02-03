import back from '../assets/asd.jpg'
import stand from '../assets/stand.webp'
import back2 from '../assets/back2.jpeg'

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
            <div className='bg-cover col-span-1 rounded-2xl justify-baseline' style={{backgroundImage: `url(${back2})`}}>
<h1 className=''>FEATURED APP</h1>
            </div>
        </div>
    </div>
  )
}

export default Aap