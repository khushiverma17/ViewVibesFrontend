import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import moment from 'moment';
import axios from 'axios';
import { MdDeleteOutline, MdOutlineModeEdit } from 'react-icons/md';
import { LuSaveAll } from 'react-icons/lu';

const Tweet = ({ tweet, removeTweet, updateTweet }) => {

    const userData = JSON.parse(sessionStorage.getItem("userData"))

    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
    }, [])

    const [tweetContent, setTweetContent] = useState(tweet.content)
    const [isEditable, setIsEditable] = useState(false)
    const [originalTweetContent, setOriginalTweetContent] = useState(tweet.content)


    const deleteTweetHandler = (tweetId) => {
        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`
            },
            params: {
                tweetId: tweetId
            }
        }

        axios.delete(`http://localhost:8000/api/v1/tweets/delete-tweet/${tweet._id}`,
            config
        ).then((response) => {
            console.log(response);
            removeTweet(tweetId)
        }).catch((error) => {
            console.log(error);
        })


    }


    const editTweetHandler = (e) => {
        setIsEditable(!isEditable)

        if(isEditable && (originalTweetContent != tweetContent)){
            const config = {
                headers: {
                    Authorisation: `Bearer ${userData.data.accessToken}`
                }
            }
            axios.patch(`http://localhost:8000/api/v1/tweets/update-tweet/${tweet._id}`,
                {
                    content: tweetContent
                },
                config
            ).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }else{
            setTweetContent(originalTweetContent)
        }
    }



    return (
        <div className="flex items-start p-4 bg-black rounded-lg shadow-lg mb-4 relative md:px-7 lg:px-17 text-white mx-4 md:mx-10 lg:mx-20">
          <div className="ml-4 flex flex-col justify-between">
            <input
              className="text-white bg-inherit font-semibold text-lg mb-1 w-full"
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
              readOnly={!isEditable}
              onClick={(e) => e.stopPropagation()}
            />
      
            <p className="text-gray-400 text-sm">
              {moment(tweet.createdAt).format('MMMM Do YYYY, h:mm a')}
            </p>
      
            <p className="text-gray-400 text-sm">
              Likes: {tweet.likesCount}
            </p>
          </div>
          <div className="absolute top-8 right-8 flex justify-end">
            <span
              className="cursor-pointer hover:bg-gray-400 transition duration-300 rounded-full p-2 mr-4"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                editTweetHandler();
              }}
            >
              {isEditable ? <LuSaveAll className='w-6 h-6' /> : <MdOutlineModeEdit className='w-6 h-6' />}
            </span>
            <span>
              <MdDeleteOutline
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  deleteTweetHandler(tweet._id);
                }}
                className='inline-block w-10 h-10 p-2 cursor-pointer rounded-full hover:bg-gray-400 transition duration-300'
              />
            </span>
          </div>
        </div>
      )

};

export default Tweet;
