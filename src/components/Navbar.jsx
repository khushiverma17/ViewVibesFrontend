import React, { useContext} from 'react'
import { FaBars} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
import Button from './Button';

function Navbar() {
  const {sidebar, setSidebar} = useContext(SidebarContext)

  const navigate = useNavigate();


  const logoutHandler = async (e) => {
    try {
      console.log("Logout button on navbar is clicked");
      // Perform logout actions here, then redirect if necessary
      sessionStorage.clear()
      navigate("/"); // Redirect after logout
    } catch (error) {
      console.log("Error in logging out");
    }
  }

  const myProfileHandler = async (e) => {
    try{
      navigate("/my-profile")
    }
    catch(error){
      console.log("Error in going to my profile: ", error);
      
    }
  }

  return (
    <nav className='bg-[#200f0f] px-4 py-3 flex justify-between items-center sticky top-0 z-50'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebar(!sidebar)} />
        <Link to="/home">
          <span className='text-white font-semibold'>YouTer</span>
        </Link>
      </div>
      
        
      <div className='flex items-center space-x-4'>
        <Button type="button" onClick={myProfileHandler}>
          My Profile
        </Button>

        <Button type="submit" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
