import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye,AIOutlineEyeInvisible, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
export default function LoginForm({setIsLoggedIn}) {

const navigate=useNavigate();
    const [FormData, setFormData] = useState({ email: "", password: "" })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged in")
        navigate("/dashboard")
        
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 '>
            <label className='w-full' >
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup> </p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="email" onChange={changeHandler} placeholder='Enter email address ' name='email' required value={FormData.email} />
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup> </p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword ? ("password") : ("text")} name="password" onChange={changeHandler} placeholder='Enter password ' required value={FormData.password} />

                <span className='absolute right-3 top-[38px] cursor-pointer  ' onClick={()=>setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF'  />)}
                </span>
                <Link to="#"><p className='text-xs mt-1 text-blue-100 max-w-max ml-auto '>Forgot Password</p></Link>
            </label>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign in </button>
        </form>
    )
}
