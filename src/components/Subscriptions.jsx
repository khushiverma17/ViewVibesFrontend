import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Subscriptions() {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  useEffect(() => {
      if(!userData){
        console.log("User data is not there")
        navigate("/")
      }
    }, [userData, navigate])

  const channels = [
    {
      id: 1,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel One',
      totalVideos: 120,
      totalSubscribers: '1.5M',
    },
    {
      id: 2,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Two',
      totalVideos: 89,
      totalSubscribers: '800K',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
      totalVideos: 45,
      totalSubscribers: '350K',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
      totalVideos: 45,
      totalSubscribers: '350K',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
      totalVideos: 45,
      totalSubscribers: '350K',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
      totalVideos: 45,
      totalSubscribers: '350K',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
      totalVideos: 45,
      totalSubscribers: '350K',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
      totalVideos: 45,
      totalSubscribers: '350K',
    },
    // Add more channels as needed
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-[#200f0f] rounded-lg shadow-md">
      <ul>
        {channels.map(channel => (
          <li key={channel.id} className="flex items-center mb-4 hover:bg-[#343434] rounded-lg px-8 py-3 hover:cursor-pointer">
            <img
              src={channel.avatar}
              alt={`${channel.username} avatar`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-white">
              <span className="text-lg font-semibold">{channel.username}</span>
              <div className="text-sm text-gray-400">
                <p>{channel.totalVideos} videos</p>
                <p>{channel.totalSubscribers} subscribers</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subscriptions;
