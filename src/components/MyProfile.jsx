import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function MyProfile() {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  // console.log(userData);
  console.log(userData);
  const [user, setUser] = useState()
  
  
  
  const navigate = useNavigate()
  useEffect(() => {
      if(!userData){
        console.log("User data is not there")
        navigate("/")
      }

      const myProfileData = async() =>{
        try{
          console.log(userData.data.accessToken);
          console.log(userData.data.user.username);
          
          const config ={
            headers:{
              Authorisation: `Bearer ${userData.data.accessToken}`
            }
          }
          

          axios.get(
            `http://localhost:8000/api/v1/users/c/${userData.data.user.username}`, config
          )
          .then((response) => {
            setUser(response.data)
            console.log("response.data is: ", response.data)
            console.log("user is: ", user);
            
          })
          
          
        }
        catch(error){
          console.log("Failed to fetch my profile data", error);
          
        }
      }
      myProfileData()


    }, [])

    useEffect(() => {
      if(user){
        console.log("user is ", user);
        console.log("user.data ", user.data);
        
        
      }
    }, [user])

  const channel = {
    avatar: 'https://via.placeholder.com/100',
    coverImage: 'https://via.placeholder.com/800x200',
    username: 'channeluser',
    fullname: 'Channel User',
    totalViews: '1.2M',
    totalSubscribers: '250K',
    subscribedChannels: 45,
  };

  if(!user){
    return(
      <p>Loading...</p>
    )
  }

  return (
    
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#200f0f] rounded-lg shadow-md">
      <div className="relative">
        <img
          src={user.data.coverImage}
          alt="Cover"
          className="w-full h-60 object-cover rounded-lg"
        />
        <div className="absolute top-3 left-4">
          <img
            src={user.data.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-white mb-2">{user.data.fullName}</h2>
        <p className="text-xl text-gray-400 mb-4">@{user.data.username}</p>

        <div className="text-white mb-6">
          <p className="text-lg mb-1">
            <span className="font-semibold">{user.data.email}</span>
          </p>
          {/* <p className="text-lg mb-1">
            Total Subscribers: <span className="font-semibold">{user.data.subscribersCount}</span>
          </p> */}
          {/* <p className="text-lg mb-1">
            Subscribed to <span className="font-semibold">{channel.subscribedChannels}</span> channels
          </p> */}
        </div>

        <button
          className={`px-6 py-2 rounded-full text-white font-semibold bg-[#d96f2e] transition duration-300`}
        >
            Edit
        </button>

        
      </div>
    </div>
  );
}

export default MyProfile;
