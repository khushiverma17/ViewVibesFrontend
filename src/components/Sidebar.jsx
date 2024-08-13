import React, { useContext } from 'react'
import { MdHome } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdPostAdd } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import { GrHistory } from "react-icons/gr";
import { SidebarContext } from '../context/SidebarContext';

function Sidebar() {
  const {sidebar, setSidebar} = useContext(SidebarContext)

  return (
    <div className={`${sidebar ? "block " : "hidden "}w-64 bg-[#200f0f] fixed h-full px-4 py-2`}>
      {/* <div>
        <h1 className='text-2x text-white font-bold mb-10'>Youtube-Twitter</h1>
      </div> */}
      {/* <hr/> */}
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <MdHome className='inline-block w-6 h-6 mr-2 -mt-2'></MdHome>
            Home
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/my-playlists"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <MdOutlinePlaylistPlay className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlinePlaylistPlay>
            My Playlists
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/create-playlist"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <MdPlaylistAdd className="inline-block w-6 h-6 mr-2 -mt-1" />
            Create Playlist
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/liked-videos"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <AiOutlineLike className='inline-block w-6 h-6 mr-2 -mt-2'></AiOutlineLike>
            Liked Videos
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/my-videos"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <BiSolidVideos className='inline-block w-6 h-6 mr-2 -mt-2'></BiSolidVideos>
            My Videos
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/subscriptions"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <MdOutlineSubscriptions className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlineSubscriptions>
            Subscriptions
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/my-subscribers"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <FaUsers className='inline-block w-6 h-6 mr-2 -mt-2'></FaUsers>
            My Subscribers
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/create-tweet"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <MdPostAdd className='inline-block w-6 h-6 mr-2 -mt-2'></MdPostAdd>
            Create Tweet
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/publish-video"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <CiVideoOn className='inline-block w-6 h-6 mr-2 -mt-2'></CiVideoOn>
            Publish Video
          </NavLink>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e]'>
          <NavLink
            to="/my-history"
            className={({ isActive }) =>
              `flex items-center px-3 text-white py-2 ${isActive ? 'bg-[#d96f2e]' : ''}`
            }
          >
            <GrHistory className='inline-block w-6 h-6 mr-2 -mt-2'></GrHistory>
            My History
          </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
