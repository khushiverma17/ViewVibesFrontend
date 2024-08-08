import React from 'react'
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

function Navbar({sidebar, setSidebar}) {
  console.log("sidebar is ", sidebar);
  

  const loginHandler = async (e) => {
    // try{
    //   const config = {
    //     headers: {
    //         "Content-type": "application/json"
    //     }
    //   };
    //   console.log("hello")

    //   const response = await axios.post(
    //     "http://localhost:8000/api/v1/users/login", 
    //     data, 
    //     config
    //   )
    //   console.log("hel")
    //   sessionStorage.setItem("userData", JSON.stringify(response));
    //   // navigate("/app/welcome")
    // }catch(error){
    //   console.log("Error in login the user")
    // }
  }

  return (
    <nav className='bg-[#200f0f] px-4 py-3 flex justify-between'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebar(!sidebar)}/>
        <span className='text-white font-semibold'>YouTer</span>
      </div>
      <div className='flex items-center gap-x-5'>
        <div><button className='bg-[#d96f2e] px-4 py-2'
        >Login</button></div>
        <div><button className='bg-[#d96f2e] px-4 py-2'>Signup</button></div>


      </div>
    </nav>
  )
}

export default Navbar
