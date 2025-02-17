import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Back from "../assets/asd.jpeg"
import users from '../data/constant'

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errors, setErrors]= useState('')
 
  const navigate=useNavigate()
  const handleSubmit=(event)=>{
    event.preventDefault()
    const errors= validate()
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      const user = users.find((u) => u.email === email && u.password === password)
      if (user) {
        localStorage.setItem("userRole", user.role)
        localStorage.setItem("userName", user.name)
        localStorage.setItem("userEmail", user.email)

        if (user.role === 'Admin') {
          navigate("/dashboard/app")
        } else if (user.role === 'Hr') {
          navigate("/dashboard/analytic")
        } else if (user.role === 'Finance') {
          navigate("/dashboard/ecommerce")
        } else if (user.role === 'Developer') {
          navigate("/dashboard/banking")
        } else {
          navigate("/dashboard")
        }
      } else {
        setErrors({
          email: "Email is not correct",
          password: "Password is not correct",
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
      error.email=""
    }
    if(!password){
      error.password=""
    }
    return error
  }

  return (
    <div className='h-screen flex  justify-center items-center g-no-repeat bg-cover' style={{backgroundImage: `url(${Back})`}}>
        <form onSubmit={handleSubmit} className='shadow-lg rounded-lg bg-white p-10 justify-items-center'>
        <h1 className='text-3xl font-bold mb-5'>LOGIN</h1>
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