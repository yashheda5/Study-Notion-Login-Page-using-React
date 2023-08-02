import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';


export default function NavBar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4'>

            <Link to="/"> <img src={logo} alt='logo' width={160} loading='lazy' height={32} /> </Link>
            <nav >
                <ul className='text-white flex gap-x-6 '>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact </Link>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
                {!isLoggedIn &&
                    <Link to="/Login"><button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack700'>Log in</button></Link>
                }
                {!isLoggedIn &&
                    <Link to="/SignUp"><button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack700'>Sign Up</button></Link>
                }
                {isLoggedIn &&
                    <Link to="/"><button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack700' onClick={() => {
                        setIsLoggedIn(false)
                        toast.success("Logged out")
                    }}>Logout</button></Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard"><button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack700'>Dashboard</button></Link>
                }
            </div>

        </div>
    )
}
