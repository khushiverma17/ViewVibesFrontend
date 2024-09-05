import React, { useContext, useEffect } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { SidebarContext } from '../context/SidebarContext'
import { useNavigate } from 'react-router-dom'

function Home() {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  useEffect(() => {
    if(!userData){
      console.log("User data is not there")
      navigate("/")
    }
  }, [userData, navigate])

  if(!userData){
    return(
      <div>Loading...</div>
    )
  }

  const {sidebar, setSidebar} = useContext(SidebarContext)
  
  return (
    <div className={`relative pt-20 px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
      <Feed />
    </div>
  )
}

export default Home
