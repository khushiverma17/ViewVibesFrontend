import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'

function Home({sidebar, setSidebar}) {
  console.log("From home ", sidebar);
  
  return (
      <div className={`relative pt-20 px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>

                <Feed sidebar={sidebar} setSidebar={setSidebar}/>
      </div>
  )
}

export default Home
