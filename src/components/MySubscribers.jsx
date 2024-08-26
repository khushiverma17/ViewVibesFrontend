import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MySubscribers() {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  const [data, setData] = useState()
  useEffect(() => {
    if (!userData) {
      console.log("User data is not there")
      navigate("/")
    }
  }, [userData, navigate])


  useEffect(() => {

    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      }
    }
    console.log("HELLO", userData.data.user._id);

    axios.get(`http://localhost:8000/api/v1/subscriptions/get-subscribers/${userData?.data?.user?._id}`,
      config)
      .then((response) => {
        console.log(response);
        setData(response.data.data)
        console.log(response.data.data);


      }).catch((error) => {
        console.log("Error  is : ", error);

      })

  }, [])


  if (!data) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-[#200f0f] rounded-lg shadow-md">
      <ul>
        {data.map((item) => (
          <Link
            key={item?.subscriber?._id}
            className="flex items-center mb-4 hover:bg-[#343434] rounded-lg px-8 py-3 hover:cursor-pointer"
            to={`/channel-details/${item.subscriber.username}/${item.subscriber._id}`}
            state={
              {
                channel: item.subscriber
              }
            }

          >
            <img
              src={item.subscriber.avatar}
              alt={`${item.subscriber.username} avatar`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-lg text-white font-semibold">{item?.subscriber?.username}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MySubscribers;
