import React from 'react'
import { Template } from '../Component/Template'
import loginImg from "../assets/login.png" 

export default function Login({setIsLoggedIn}) {
  return (
    <div>
        <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow and beyond"
            desc2="Eduction to future-proof your carrer"
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}
