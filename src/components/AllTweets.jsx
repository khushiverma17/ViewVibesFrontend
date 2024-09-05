import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import moment from 'moment';
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const AllTweets = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
        

        // make request to the backend to fetch all the tweets
        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`
            }
        }
        axios.get(`http://localhost:8000/api/v1/tweets/get-all-tweets`,
            config
        ).then((response) => {
            console.log(response);
            setData(response.data.data)
            // setLikeCnt(response.data.data.likesCount)
        }).catch((error) => {
            console.log(error);
        })

    }, [])

    const tweetLikeHandler = (tweetId) => {
        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`
            },
            params: {
                tweetId: tweetId
            }
        }

        axios.patch(`http://localhost:8000/api/v1/likes/toggle-tweet-like/${tweetId}`,
            {},
            config
        ).then((response) => {
            console.log(response);
            setData((prevData) => 
                prevData.map((tweet) => 
                    tweet._id === tweetId
                    ? {
                        ...tweet,
                        likesCount: tweet.isLiked ? tweet.likesCount-1 : tweet.likesCount+1,
                        isLiked : !tweet.isLiked,
                    } : tweet
                )
            )



        }).catch((error) => {
            console.log(error);
        })

    }
      

  return (
    <div className="max-w-2xl mx-auto p-4">
      {data?.map((tweet) => (
        <div key={tweet._id} className="border-b border-gray-700 last:border-none">
          <div className="flex items-start p-4 bg-gray-900 text-white">
            {/* Avatar */}
            <img
              src={tweet.ownerDetails.avatar}
              alt={tweet.ownerDetails.username}
              className="w-8 h-8 rounded-full mr-4"
            />

            {/* Tweet Content */}
            <div className="flex-1">
              {/* Username and Time */}
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{tweet.ownerDetails.username}</span>
                <span className="text-gray-400 text-sm">
                  {moment(tweet.createdAt).fromNow()}
                </span>
              </div>

              {/* Tweet Text */}
              <p className="text-gray-300 mb-2">{tweet.content}</p>

              {/* Likes and Actions */}
              <div 
              className="flex items-center text-gray-400 cursor-pointer"
              onClick={() => tweetLikeHandler(tweet._id)}
              >
                {tweet.isLiked ? <FaHeart className="mr-2"/> : <FaRegHeart className="mr-2"/>}
                {/* <FaRegHeart  className="mr-2" /> */}
                <span>&nbsp;{tweet.likesCount}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTweets;
