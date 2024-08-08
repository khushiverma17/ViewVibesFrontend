import React from 'react'
import { MdHome } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdPostAdd } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

function Sidebar({sidebar}) {
  console.log("From sidebar ", sidebar);
  
  return (
      <div className={`${sidebar ? "block " : "hidden "}w-64 bg-[#200f0f] fixed h-full px-4 py-2`}>
      {/* <div>
        <h1 className='text-2x text-white font-bold mb-10'>Youtube-Twitter</h1>
      </div> */}
      {/* <hr/> */}
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <MdHome className='inline-block w-6 h-6 mr-2 -mt-2'></MdHome>
            Home
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <MdOutlinePlaylistPlay className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlinePlaylistPlay>
            My Playlists
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <MdPlaylistAdd className='inline-block w-6 h-6 mr-2 -mt-2'></MdPlaylistAdd>
            Create Playlist
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <AiOutlineLike className='inline-block w-6 h-6 mr-2 -mt-2'></AiOutlineLike>
            Liked Videos
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <BiSolidVideos className='inline-block w-6 h-6 mr-2 -mt-2'></BiSolidVideos>
            My Videos
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <MdOutlineSubscriptions className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlineSubscriptions>
            Subscriptions
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <FaUsers className='inline-block w-6 h-6 mr-2 -mt-2'></FaUsers>
            Subscribers List
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <MdPostAdd className='inline-block w-6 h-6 mr-2 -mt-2'></MdPostAdd>
              Create Tweet
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <a href="" className='px-3'>
            <CiVideoOn className='inline-block w-6 h-6 mr-2 -mt-2'></CiVideoOn>
              Publish Video
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
