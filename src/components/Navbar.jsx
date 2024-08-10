import React, { useState } from 'react'
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Navbar({sidebar, setSidebar}) {
  const navigate = useNavigate()


  const loginHandler = async (e) => {
    try{
      console.log("Login button on navbar is clicked");
      
      navigate("/login");
    }catch(error){
      console.log("Error in login the user")
    }
  }
  
  const signupHandler = async(e) => {
    try {
      console.log("Signup button on navbar is clicked");
      navigate("/login");
      
    } catch (error) {
      console.log("error in signup");
      
    }
  }

  return (
    <nav className='bg-[#200f0f] px-4 py-3 flex justify-between items-center sticky top-0 z-50'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebar(!sidebar)} />
        <Link
        to="/home"
        >
          <span className='text-white font-semibold'>YouTer</span>
        </Link>
      </div>
      <div className='flex items-center gap-x-5'>
        <div>
          <button className='bg-[#d96f2e] px-4 py-2' onClick={loginHandler}>Login/SignUp</button>
        </div>


      </div>
    </nav>
  )
}

export default Navbar
