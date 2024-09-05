import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import thumbnail from "../assets/thumbnail.jpg"
import { SidebarContext } from '../context/SidebarContext';
import axios from 'axios';
import moment from 'moment'; // Import moment.js

function PlaylistVideos() {

  const { sidebar } = useContext(SidebarContext)
  const location = useLocation()
  const { playlistId } = location.state || {}
  const [videos, setVideos] = useState()

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  useEffect(() => {
    if (!userData) {
      console.log("User data is not there")
      navigate("/")
    }

    const fetchPlaylistVideos = () => {
      const config = {
        headers: {
          Authorisation: `Bearer ${userData.data.accessToken}`
        },
        params: {
          playlistId: playlistId
        }
      }
      console.log('first');


      axios.get(`http://localhost:8000/api/v1/playlists/playlist-videos/${playlistId}`,
        config
      ).then((response) => {
        console.log("she")
        console.log(response)
        setVideos(response.data.data.videos)
      }).catch((error) => {
        console.log(error)
      })


    }

    fetchPlaylistVideos()

  }, [])

  const removeVideoFromPlaylistHandler = (videoId) => {
    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      },
      params: {
        videoId: videoId,
        playlistId: playlistId
      }
    }
    

    axios.patch(`http://localhost:8000/api/v1/playlists/remove-video-from-playlist/${videoId}/${playlistId}`,
      {},
      config
    ).then((response) => {
      console.log(response)
      removeVideo(videoId)
    }).catch((error) => {
      console.log(error)
    })

  }

  const removeVideo = (videoId) => {
    console.log("ji")
    setVideos((prevVideos) => prevVideos.filter((video) => video._id != videoId))
  }



  if (!videos) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className={`relative pt-20 px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
      <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4`}>
        {videos?.length ? (
          videos.map((video) => (
            <div key={video._id} className="relative group">
              <Link
                to={`/video-page/${video.title}/${video._id}/${video.ownerDetails.username}/${video.ownerDetails._id}`}
                state={{ item: video }}
                className="block"
              >
                <img className="w-full h-32 object-cover rounded-lg" src={video.thumbnail} alt="" />
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <h2 className="text-xs font-semibold text-white">{video.title}</h2>
                    <p className="text-xs text-gray-600">
                      {video.views} views &bull; {moment(video.createdAt).fromNow()}
                    </p>
                  </div>
                </div>
              </Link>
              <button
                className="absolute top-2 right-2 px-2 py-1 text-xs rounded-lg text-white font-bold bg-gray-500 hover:bg-[#d96f2e] shadow-md transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  removeVideoFromPlaylistHandler(video._id);
                }}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className='text-white text-lg block'>You have not uploaded any video yet...</p>
        )}
      </div>
    </div>
  );
  
}

export default PlaylistVideos