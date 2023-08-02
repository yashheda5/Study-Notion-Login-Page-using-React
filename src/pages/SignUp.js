import React from 'react'
import { Template } from '../Component/Template'
import signupImg from "../assets/signup.png"
export default function SignUp({setIsLoggedIn}) {
  return (
    <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow and beyond"
            desc2="Eduction to future-proof your carrer"
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
  )
}
