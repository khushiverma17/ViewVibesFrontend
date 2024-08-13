import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChannelDetails() {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  useEffect(() => {
      if(!userData){
        console.log("User data is not there")
        navigate("/")
      }
    }, [userData, navigate])
  // Mock data for the channel
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const channel = {
    avatar: 'https://via.placeholder.com/100',
    coverImage: 'https://via.placeholder.com/800x200',
    username: 'channeluser',
    fullname: 'Channel User',
    totalViews: '1.2M',
    totalSubscribers: '250K',
    subscribedChannels: 45
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    // Add additional subscribe logic here
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#200f0f] rounded-lg shadow-md">
      <div className="relative">
        <img
          src={channel.coverImage}
          alt="Cover"
          className="w-full h-60 object-cover rounded-lg"
        />
        <div className="absolute top-3 left-4">
          <img
            src={channel.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
      </div>
      
      <div className="mt-24 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-white mb-2">{channel.fullname}</h2>
        <p className="text-xl text-gray-400 mb-4">@{channel.username}</p>
        
        <div className="text-white mb-6">
          <p className="text-lg mb-1">Total Views: <span className="font-semibold">{channel.totalViews}</span></p>
          <p className="text-lg mb-1">Total Subscribers: <span className="font-semibold">{channel.totalSubscribers}</span></p>
          <p className="text-lg mb-1">Subscribed to <span className="font-semibold">{channel.subscribedChannels}</span> channels</p>
        </div>
        
        <button
          onClick={handleSubscribe}
          className={`px-6 py-2 rounded-full text-white font-semibold ${isSubscribed ? 'bg-gray-500' : 'bg-[#d96f2e]'} transition duration-300`}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
}

export default ChannelDetails;
