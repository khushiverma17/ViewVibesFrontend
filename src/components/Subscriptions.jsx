import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Subscriptions() {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  const [data, setData] = useState()
  useEffect(() => {
    if (!userData) {
      console.log("User data is not there")
      navigate("/")
    }

    console.log(userData.data.user._id);

  }, [userData, navigate])

  useState(() => {
    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      },
      params: {
        subscriberId: userData.data.user._id
      }
    }

    axios.get(`http://localhost:8000/api/v1/subscriptions/get-subscriptions/${userData.data.user._id}`,
      config
    ).then((response) => {
      console.log("REsponse: ", response);
      setData(response.data.data)
      console.log(response.data.data);
      
    }).catch((error) => {
      console.log(error);
    })
  }, [])

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
      id: 4,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
      totalVideos: 45,
      totalSubscribers: '350K',
    },
    
    // Add more channels as needed
  ];

  if(!data){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-[#200f0f] rounded-lg shadow-md">
      <ul>
        {data.map((item) => (
          <Link 
          key={item.subscribedChannel._id} 
          className="flex items-center mb-4 hover:bg-[#343434] rounded-lg px-8 py-3 hover:cursor-pointer"
          to={`/channel-details/${item.subscribedChannel.username}/${item.subscribedChannel._id}`}
            state={
              {
                channel: item.subscribedChannel
              }
            }
          >
            <img
              src={item.subscribedChannel.avatar}
              alt={`${item.subscribedChannel.username} avatar`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-white">
              <span className="text-lg font-semibold">{item.subscribedChannel.username}</span>
              <div className="text-sm text-gray-400">
                {/* <p>{channel.totalVideos} videos</p>
                <p>{channel.totalSubscribers} subscribers</p> */}
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Subscriptions;
