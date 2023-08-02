import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AIOutlineEyeInvisible, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
export default function SignUpForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [FormData, setFormData] = useState({
        firstName: "", LastName: "", email: "", password: "", confirmPassword: ""
    })
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, [event.target.name]: event.target.value
            }
        ))
    }
    const[accountType , setAccountType] = useState("student")
    function submitHandler(event) {
        event.preventDefault();
        if (FormData.password != FormData.confirmPassword) {
            toast.error("Passwords do not match")
            return
        }

        setIsLoggedIn(true)
        toast.success("Account has been created")
        const accountData = { ...FormData }
        console.log(accountData)
        navigate("/dashboard")
        const finalData = { ...accountData ,accountType}
    }
    return (
        <div>
            <div className='flex mt-[10px] bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("student")}>Student</button>
                <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("instructor")}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                {/* first name and last name */}
                <div className='flex mt-[5px] justify-between flex-row '>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup> </p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='text' value={FormData.firstName} required name="firstName" onChange={changeHandler} placeholder='Enter first name' />
                    </label>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup> </p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='text' value={FormData.LastName} required name="LastName" onChange={changeHandler} placeholder='Enter last name' />
                    </label>
                </div>
                {/* email add */}
                <div className='mt-[5px] w-full'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup> </p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='email' value={FormData.email} required name="email" onChange={changeHandler} placeholder='Enter email address' />
                    </label>
                </div>
                {/* create password and confirm password */}
                <div className='mt-[5px] w-full flex justify-between flex-row '>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password  <sup className='text-pink-200'>*</sup> </p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword ? ("password") : ("text")} value={FormData.password} required name="password" onChange={changeHandler} placeholder='Enter password' />
                        <span className='absolute right-3 top-[38px] cursor-pointer  ' onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm  Password  <sup className='text-pink-200'>*</sup> </p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showConfirmPassword ? ("password") : ("text")} value={FormData.confirmPassword} required name="confirmPassword" onChange={changeHandler} placeholder='Enter password' />
                        <span className='absolute right-3 top-[38px] cursor-pointer  ' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
                <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create account </button>
            </form>
        </div>
    )
}
