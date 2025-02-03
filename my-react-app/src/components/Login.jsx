import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Back from "../assets/asd.jpeg"

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errors, setErrors]= useState('')
 
  const navigate=useNavigate()
  const users=[{
    email:'em@gmail.com',
    password:'12345678'
  },
{
  email:'tm@gmail.com',
  password: '87654321'
}]

  const handleSubmit=(event)=>{
    event.preventDefault()
    const errors= validate()
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      const user = users.find(u => u.email === email && u.password === password)
      if (user) {
        navigate('/dashboard')
      } else {
        setErrors({
          email: 'Email is not correct',
          password: 'Password is not correct'
        })
      }
    }
  }

  const handleEmail=(e)=>{
   setEmail(e.target.value);
   const errors= validate()
   setErrors(errors)
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value);
   const errors= validate()
   setErrors(errors)
  }

  
  const validate=()=>{
    const error={}

    if(!email){
      error.email="Email is Required"
    }
    if(!password){
      error.password="Password is Required"
    }
    return error
  }

  return (
    <div className='h-screen justify-items-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${Back})`}}>
        <form onSubmit={handleSubmit} className='absolute inset-x-120 top-40 shadow-lg rounded-lg bg-white h-[300px] w-[450px] justify-items-center'>
        <h1 className='text-3xl font-bold mb-5 mt-5'>LOGIN</h1>
        <label><input placeholder='Email' className='px-2 py-2 w-80 border border-gray-400 rounded-md' onChange={handleEmail}/></label><br/>
        {errors.email && <div className='text-red-600 justify-self-start ms-17'>{errors.email}</div>}
        <label> <input placeholder='Password' className='mt-3 px-2 py-2 w-80 border border-gray-400 rounded-md' type='password' onChange={handlePassword}/></label><br/>
       {errors.password && <div className='text-red-600 justify-self-start ms-17'>{errors.password}</div>}
        <button className='mt-4 border rounded-2xl px-2 py-2 w-80  text-white bg-amber-800'>SIGN IN</button>
        </form>
        </div>
  
  )
}


export default Login