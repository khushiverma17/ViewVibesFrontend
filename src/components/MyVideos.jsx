import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import thumbnail from "../assets/thumbnail.jpg"
import { SidebarContext } from '../context/SidebarContext';
import axios from 'axios';
import moment from 'moment'; // Import moment.js

function MyVideos() {
  // const lightTheme = useSelector(state => state.themeKey);
  const navigate = useNavigate()
  const [data, setData] = useState({docs:[]});
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
          params : {
            userId : userData.data.user._id,
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

  // if(!data.docs){
  //   console.log("no ");
    
  //   return (
  //     <div className='text-green-500 text-lg'>Loading...ljklkjlk</div>
  //   )
  // }



  return (
    <div className={`relative pt-20 px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4`}>
      {data?.docs?.length ? (
        data.docs.map((item) => {
          // <Link key={item._id} to={`video/${item._id}`}>
          console.log("yesjdfjkl");
          
          return (
              <Link key={item._id} to="/">
              <img className="w-full h-44 object-cover rounded-lg" src={item.thumbnail} alt="" />
              <h2 className={`text-lg font-semibold text-white`}>{item.title}Hello</h2>
              {/* <h3 className="text-base font-semibold text-gray-600">{item.owner}</h3> */}
              <p className={`text-sm text-gray-600`}>
                {/* {valueConvertor(item.views)} views &bull; {moment(item.publishedAt).fromNow()} */}
                {item.views} views &bull; {moment(item.createdAt).fromNow()}
              </p>
            </Link>
          )
        })
      )
      
        :
        <p className='text-green-500 text-lg'>Loading...</p>
      }
      </div>
    </div>


  )
}

export default MyVideos