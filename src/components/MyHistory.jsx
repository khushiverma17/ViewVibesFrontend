import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MyHistory() {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  const [data, setData] = useState()
  useEffect(() => {
    if (!userData) {
      console.log("User data is not there")
      navigate("/")
    }

    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      }
    }

    axios.get(`http://localhost:8000/api/v1/users/history`,
      config
    ).then((response) => {
      console.log(response)
      setData(response.data.data)
    }).catch((error) => {
      console.log(error)
    })

  }, [])

  const historyItems = [
    {
      id: 1,
      videoThumbnail: 'https://via.placeholder.com/150',
      videoTitle: 'How to Learn React',
      channelName: 'React Mastery',
      likes: 1234,
      watchedAt: '2024-08-10 14:35',
      videoUrl: '/videos/1' // URL to the video page
    },
    {
      id: 2,
      videoThumbnail: 'https://via.placeholder.com/150',
      videoTitle: 'Understanding JavaScript Closures',
      channelName: 'JavaScript Guru',
      likes: 987,
      watchedAt: '2024-08-09 11:20',
      videoUrl: '/videos/2' // URL to the video page
    },
    // Add more items as needed
  ];


  if(!data){
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#200f0f] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">My History</h2>
      <ul className="space-y-4">
        {data.map((video) => (
          <li key={video._id} className="flex items-center bg-[#343434] rounded-lg p-4 hover:bg-[#2c2c2c] transition duration-200">
            <Link
            to={`/video-page/${video.title}/${video._id}/${video.ownerDetails.username}/${video.ownerDetails._id}`}
            state={{ item: video }}
            className="flex items-center w-full">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-32 h-18 rounded-lg object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                <span className="text-sm text-gray-400 mb-1 mr-2 font-semibold">{video.ownerDetails.username}</span>
                <span className="text-sm text-gray-400 mb-1">{video.views} views</span>

                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-gray-400">{video.description}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyHistory;
