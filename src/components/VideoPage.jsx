import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const VideoPage = () => {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const { sidebar } = useContext(SidebarContext);
  const location = useLocation()
  const [isSubscribed, setIsSubscribed] = useState()
  const [isOwner, setIsOwner] = useState(true)

  const { item: videoItem } = location.state
  console.log("VIDEOITEM IS: ", videoItem);
  const navigate = useNavigate()

  useEffect(() => {
    if (videoItem.ownerDetails._id === userData.data.user._id) {
      setIsOwner(true);
    }
  }, [videoItem.ownerDetails._id, userData.data.user._id]);


  const { title, videoid, username } = useParams()
  console.log(title);



  useEffect(() => {
    console.log("user is sub", isSubscribed);

    const checkSubscriptionStatus = async () => {
      try {
        const config = {
          headers: {
            Authorisation: `Bearer ${userData.data.accessToken}`
          },
          params: {
            channelId: videoItem.ownerDetails._id
          }
        };

        await axios.get(
          `http://localhost:8000/api/v1/subscriptions/check-subscription/${videoItem.ownerDetails._id}`,
          config
        ).then((response) => {
          console.log(response);

          console.log("hello: ", response.data.data.subscribed);

          if (response.data.data.subscribed) {
            setIsSubscribed(true);
          } else {
            setIsSubscribed(false);
          }
        }).catch((error) => {
          console.log(error);

        })
      } catch (error) {
        console.log(error);

      }
    }
    checkSubscriptionStatus()
  }, [videoItem.ownerDetails._id])

const updateHandler = () => {
  // navigate(`/update-video`, 
  navigate(`/update-video/${videoItem._id}/${videoItem.ownerDetails.username}/${videoItem.ownerDetails._id}`, 
    {
      state: videoItem
    }
  )
}



  const subscriptionHandler = () => {
    console.log("channel id is : ", videoItem.ownerDetails._id);


    // setIsSubscribed(!isSubscribed)

    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      },
      params: {
        channelId: videoItem.ownerDetails._id
      }
    }


    axios.get(
      `http://localhost:8000/api/v1/subscriptions/toggle-subscription/${videoItem.ownerDetails._id}`,
      config
    ).then((response) => {
      console.log("Response from axios is ", response);
      console.log("khushi", response.data.data.subscribed);

      if (response.data.data.subscribed) {
        setIsSubscribed(true)
      }
      else {
        setIsSubscribed(false)
      }
    }).catch((error) => {
      console.log(error);
    })









  }



  // Hardcoded data
  const videoData = {
    title: 'Amazing Nature Documentary',
    views: '2,345,678',
    likes: '1M',
    channelName: 'Nature Channel',
    subscribers: '2.5M',
    uploadDate: 'March 12, 2024',
    description: 'This documentary showcases the incredible beauty and diversity of nature around the world.',
  };

  const comments = [
    {
      id: 1,
      username: 'JohnDoe',
      text: 'This is an amazing documentary! Nature is so beautiful.',
      likes: 120,
    },
    {
      id: 2,
      username: 'JaneSmith',
      text: 'Loved every second of it. Thanks for sharing!',
      likes: 98,
    },
    {
      id: 3,
      username: 'NatureLover',
      text: 'The visuals are breathtaking. Great job!',
      likes: 150,
    },
  ];

  return (
    <div className={`flex flex-col items-center bg-gray-900 text-white min-h-screen p-4 ${sidebar ? 'ml-64' : ''}`}>
      {/* Video Section */}
      <div className="w-full max-w-7xl mb-8">
        <div className="relative h-0 pb-[56.25%] overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoItem?.videoFile}
            title={videoItem?.title.replace(/-/g, ' ')}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video Details Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-semibold mb-2">{videoItem.title}</h1>
        <div className="flex justify-between items-center mb-4">
          <span>{videoItem?.views} views •
            {/* {videoData.uploadDate} */}
            {moment(videoItem.createdAt).fromNow()}
          </span>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-lg">
              <span>👍</span>
              <span>{videoData.likes}</span>
            </button>
          </div>
        </div>

        <hr className="border-gray-700 mb-4" />

        {/* Channel Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div>
              <h2 className="text-xl font-semibold">{videoItem.ownerDetails.username}</h2>
              {/* <span>{videoData.subscribers} subscribers</span> */}
            </div>
          </div>
          {/* <button className="px-6 py-2 bg-red-600 rounded-lg text-lg">Subscribe</button> */}
          {isOwner ?
            <button
              className='px-6 py-2 bg-[#412f24] rounded-lg text-lg'
              onClick={updateHandler}
            >Update</button> :
            isSubscribed ?
              <button
                className='px-6 py-2 bg-[#d96f2e] rounded-lg text-lg'
                onClick={subscriptionHandler}
              >
                Unsubscribe
              </button> :
              <button
                className='px-6 py-2 bg-black rounded-lg text-lg'
                onClick={subscriptionHandler}
              >
                Subscribe
              </button>

          }

          {/* {isSubscribed ?
              <button
                className='px-6 py-2 bg-[#d96f2e] rounded-lg text-lg'
                onClick={subscriptionHandler}
              >
                Unsubscribe
              </button> :
              <button
                className='px-6 py-2 bg-black rounded-lg text-lg'
                onClick={subscriptionHandler}
              >
                Subscribe
              </button>} */}
        </div>

        {/* Description Section */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <p>{videoItem.description}</p>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          {comments.map((comment) => (
            <div key={comment.id} className="mb-4">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <span className="font-semibold">{comment.username}</span>
              </div>
              <p className="mb-2">{comment.text}</p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-sm">
                  <span>👍</span>
                  <span>{comment.likes}</span>
                </button>
              </div>
              <hr className="border-gray-700 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
