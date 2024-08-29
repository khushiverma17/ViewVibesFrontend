import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import thumbnail from "../assets/thumbnail.jpg"
import { SidebarContext } from '../context/SidebarContext';
import axios from 'axios';
import moment from 'moment'; // Import moment.js

function MyVideos() {
  // const lightTheme = useSelector(state => state.themeKey);
  const navigate = useNavigate()
  const [data, setData] = useState({ docs: [] });
  const { sidebar, setSidebar } = useContext(SidebarContext)

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
            userId: userData.data.user._id,
            page: 1,
            limit: 10,
            sortBy: "views",
            sortType: "desc"
          }
        }
        axios.get(
          `http://localhost:8000/api/v1/videos/get-all-videos/${userData.data.user._id}/${userData.data.user.username}`,
          config
        )
          .then((response) => {
            console.log(response);
            setData(response.data.data)
            console.log((response.data.data));
            console.log("Array size is : ", response.data.data.docs.length);


          })


      } catch (error) {
        console.log(error);

      }

    }

    fetchVideos()

  }, [])

  const deleteVideoHandler = (videoId, event) => {
    event.stopPropagation(); // Prevent click from navigating to the video page
    event.preventDefault(); // Prevent default action of the button click
    console.log("Insidie dvh");
    const isConfirmed = confirm("Do you want to delete the video?")
    if (!isConfirmed) {
      return;
    }

    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      },
      params: {
        videoId: videoId
      }
    }

    axios.delete(`http://localhost:8000/api/v1/videos/delete-video/${videoId}`
      , config
    ).then((response) => {
      console.log(response, "kdj");
      setData((prevData) => {
        return {
          ...prevData,
          docs: prevData.docs.filter((item) => item._id !== videoId)
        };
      });



    }).catch((error) => {
      console.log(error);
    })


  }




  return (
    <div className={`relative pt-20 px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4`}>
        {data?.docs?.length ? (
          data.docs.map((item) => {
            console.log("ITEM IS SOMETHING LIKE: ", item);


            return (
              <div key={item._id} className="relative">
                <Link
                  to={`/video-page/${item.title}/${item._id}/${item.ownerDetails.username}/${item.ownerDetails._id}`}
                  state={{ item: item }}
                >
                  <img className="w-full h-44 object-cover rounded-lg" src={item.thumbnail} alt="" />
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                      <p className="text-sm text-gray-600">
                        {item.views} views &bull; {moment(item.createdAt).fromNow()}
                      </p>
                    </div>
                    <button
                      className="ml-4 px-4 py-2 text-sm rounded-lg text-white font-bold bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click from navigating to the video page
                        deleteVideoHandler(item._id, e);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Link>
              </div>


            )
          })
        )

          :
          <p className='text-white text-lg block'>You have not uploaded any video yet...</p>
        }
      </div>
    </div>


  )
}

export default MyVideos