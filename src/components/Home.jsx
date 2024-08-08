import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'

function Home({sidebar}) {
  console.log("From home ", sidebar);
  
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
      <Feed/>
    </div>
  )
}

export default Home
