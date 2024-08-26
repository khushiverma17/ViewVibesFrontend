import React, { useContext, useEffect, useState } from 'react';
import thumbnail from "../assets/thumbnail.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
import axios from 'axios';
import moment from 'moment';

const LikedVideo = () => {
    // Hardcoded data
    const {sidebar, setSidebar} = useContext(SidebarContext)
    
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const navigate = useNavigate()
    const [data, setData] = useState()
    useEffect(() => {
        if(!userData){
          console.log("User data is not there")
          navigate("/")
        }

       const checkLikeStatus = async() => {
        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`
            }
        }

        axios.get(`http://localhost:8000/api/v1/likes/liked-videos`, config)
        .then((response) => {
            console.log("lkdj", response);
            setData(response.data.data)
            
        }).catch((error) => {
            console.log(error);
        })
       }

       checkLikeStatus()


      }, [])


    const video = {
        thumbnail: { thumbnail }, // Replace with actual thumbnail URL
        title: 'Example Video Title',
        channel: 'Channel Name',
        views: '1.2M views',
        updatedAt: '2 days ago',
    };

    if(!data){
        return(
            <div>Loading..jj.</div>
        )
    }

    return (
        <div className='bg-black h-screen'>
            {data?.length ? (
                data?.map((item) => {
                    console.log("Item is : ", item.likedVideo);
                    // console.log(item.likedVideo.thumbnail);
                    
                    
                    return(
                        <Link key={item._id}
                        to={`/video-page/${item.likedVideo.title}/${item.likedVideo._id}/${item.likedVideo.ownerDetails.username}/${item.likedVideo.ownerDetails._id}`}
                        state={
                            {
                                item: item.likedVideo
                            }
                        }
                        >
                        <div className={`flex items-start p-4 bg-[#343434] rounded-lg shadow-lg mb-4 relative px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
                            {/* Video Thumbnail */}
                            <img
                                src={item.likedVideo.thumbnail}
                                alt="Video Thumbnail"
                                className="w-48 h-28 object-cover rounded-lg"
                            />
            
                            {/* Video Details */}
                            <div className="ml-4 flex flex-col justify-between">
                                {/* Video Title */}
                                <h3 className="text-white font-semibold text-lg mb-1">{item.likedVideo.title}</h3>
            
                                {/* Channel Name */}
                                <p className="text-gray-400 text-sm mb-1">{item.likedVideo.ownerDetails?.username}</p>
            
                                {/* Views and Updated Time */}
                                <p className="text-gray-400 text-sm">
                                    {item.likedVideo.views} &bull; {moment(item.likedVideo.createdAt).fromNow()}
                                </p>
                            </div>
                        </div>
                        </Link>
                    )
                })
            )
            :
            <div>Loading...</div>

            }
            
            
        </div>
    );
};

export default LikedVideo;
