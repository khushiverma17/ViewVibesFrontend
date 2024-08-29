import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import thumbnail from "../assets/thumbnail.jpg"
// import moment from 'moment';
// import { valueConvertor } from '../../data';
// import { useSelector } from 'react-redux';

// const API_KEY = import.meta.env.VITE_API_KEY;
import { SidebarContext } from '../context/SidebarContext';
import axios from 'axios';
import moment from 'moment';

function Feed() {
  // const lightTheme = useSelector(state => state.themeKey);
  const [data, setData] = useState([]);
  const { sidebar, setSidebar } = useContext(SidebarContext)

  const navigate = useNavigate()

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  useEffect(() => {
    if (!userData) {
      console.log("User data is not there")
      navigate("/")
    }
    
    

    const fetchVideos = async () => {
      try {
        const config = {
          headers: {
            Authorisation: `Bearer ${userData.data.accessToken}`
          },
          params: {
            page: 1,
            limit: 10,
            sortBy: "views",
            sortType: "desc"
          }
        }

        axios.get(
          `http://localhost:8000/api/v1/videos/get-all-videos-in-app`,
          config
        ).then((response) => {
          console.log("From where i want");
          console.log("Respose is: ", response);
          console.log(response.data.data.docs);

          setData(response.data.data.docs)
          console.log("dlk", data)
        })




      } catch (error) {
        console.log(error);

      }
    }

    fetchVideos()
    console.log("dlkjflkdj", data);

  }, [])

  return (



    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4`}>
      {data?.length ? (
        data.map((item) => {
          console.log("Item is like: ", item);

          return (
            <Link
              key={item._id}
              to={`/video-page/${item.title}/${item._id}/${item.ownerDetails.username}/${item.ownerDetails._id}`}
              className="flex flex-col"
              state={
                {
                  item: item
                }
              }
            >
              <img className="w-full h-56 object-cover rounded-lg" src={item.thumbnail} alt="Video Thumbnail" />
              <h2 className="text-lg font-semibold text-white mt-2">{item.title}</h2>
              <h3 className="text-base font-semibold text-gray-400">{item.ownerDetails.username}</h3>
              {/* <h3 className="text-base font-semibold text-gray-600 mt-1">{item.ownerDetails._id}</h3> */}
              <p className="text-sm text-gray-400 mt-1">{item.views} views &bull; {moment(item.createdAt).fromNow()}</p>
            </Link>
          )

        })
      ) :
        <p>Loading</p>
      }
    </div>
  )
}

export default Feed