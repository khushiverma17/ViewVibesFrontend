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
import { Link } from 'react-router-dom';
import { GrHistory } from "react-icons/gr";

function Sidebar({ sidebar }) {

  return (
    <div className={`${sidebar ? "block " : "hidden "}w-64 bg-[#200f0f] fixed h-full px-4 py-2`}>
      {/* <div>
        <h1 className='text-2x text-white font-bold mb-10'>Youtube-Twitter</h1>
      </div> */}
      {/* <hr/> */}
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <Link
            to="/home"
            className="flex items-center px-3 text-white"
          >
            <MdHome className='inline-block w-6 h-6 mr-2 -mt-2'></MdHome>
            Home
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <Link
            to="/my-playlists"
            className="flex items-center px-3 text-white"
          >
            <MdOutlinePlaylistPlay className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlinePlaylistPlay>
            My Playlists
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <Link
            to="/create-playlist"
            className="flex items-center px-3 text-white"
          >
            <MdPlaylistAdd className="inline-block w-6 h-6 mr-2 -mt-1" />
            Create Playlist
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <Link
            to="/liked-videos"
            className="flex items-center px-3 text-white"
          >
            <AiOutlineLike className='inline-block w-6 h-6 mr-2 -mt-2'></AiOutlineLike>
            Liked Videos
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
          <Link
            to="/my-videos"
            className="flex items-center px-3 text-white"
          >
            <BiSolidVideos className='inline-block w-6 h-6 mr-2 -mt-2'></BiSolidVideos>
            My Videos
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
        <Link
            to="/subscriptions"
            className="flex items-center px-3 text-white"
          >
            <MdOutlineSubscriptions className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlineSubscriptions>
            Subscriptions
        </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
        <Link
            to="/my-subscribers"
            className="flex items-center px-3 text-white"
          >
            <FaUsers className='inline-block w-6 h-6 mr-2 -mt-2'></FaUsers>
            My Subscribers
        </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
        <Link
            to="/create-tweet"
            className="flex items-center px-3 text-white"
          >
            <MdPostAdd className='inline-block w-6 h-6 mr-2 -mt-2'></MdPostAdd>
            Create Tweet
        </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
        <Link
            to="/publish-video"
            className="flex items-center px-3 text-white"
          >
            <CiVideoOn className='inline-block w-6 h-6 mr-2 -mt-2'></CiVideoOn>
            Publish Video
        </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-[#d96f2e] py-2'>
        <Link
            to="/my-history"
            className="flex items-center px-3 text-white"
          >
            <GrHistory className='inline-block w-6 h-6 mr-2 -mt-2'></GrHistory>
            My History
        </Link>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
