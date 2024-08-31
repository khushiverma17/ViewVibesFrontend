import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import Comment from './Comment';

const VideoPage = () => {

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const { sidebar } = useContext(SidebarContext);
  const location = useLocation()
  const [isSubscribed, setIsSubscribed] = useState()
  const [isOwner, setIsOwner] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [video, setVideo] = useState()
  const [likeCnt, setLikeCnt] = useState()
  const [newComment, setNewComment] = useState()
  const [comments, setComments] = useState()

  const { item: videoItem } = location.state
  const navigate = useNavigate()




  useEffect(() => {

    const getVideoDetails = async () => {
      const config = {
        headers: {
          Authorisation: `Bearer ${userData.data.accessToken}`
        },
        params: {
          videoId: videoItem._id
        }
      };
      axios.get(`http://localhost:8000/api/v1/videos/get-video-by-id/${videoItem._id}`, config)
        .then((response) => {
          console.log("id: ", response);
          setVideo(response.data.data)
          setIsLiked(response.data.data.isLiked)
          if (userData.data.user._id === response.data.data.owner._id) {
            setIsOwner(true)
          }
          setIsSubscribed(response.data.data.owner.isSubscribed)
          setLikeCnt(response.data.data.likesCount)
        }).catch((error) => {

          console.log(error);

        })
    }
    getVideoDetails()

    const fetchComments = async () => {
      const config = {
        headers: {
          Authorisation: `Bearer ${userData.data.accessToken}`
        },
        params: {
          videoId: videoItem._id
        }
      }

      axios.get(`http://localhost:8000/api/v1/comments/video-comments/${videoItem._id}`,
        config
      ).then((response) => {
        console.log("Comment response: ", response);
        setComments(response.data.data.docs)

      }).catch((error) => {
        console.log("error");

      })

    }

    fetchComments()


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
      // console.log("Response from axios is ", response);
      // console.log("khushi", response.data.data.subscribed);

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

  const videoLikeHandler = () => {


    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      },
      params: {
        videoId: videoItem._id
      }
    }

    axios.post(`http://localhost:8000/api/v1/likes/toggle-video-like/${videoItem._id}`,
      {},
      config
    ).then((response) => {
      // setIsLiked(response)
      if (isLiked) {
        setLikeCnt(likeCnt - 1)
      }
      else {
        setLikeCnt(likeCnt + 1)
      }
      setIsLiked(!isLiked)
      console.log("abcd: ", response);

    }).catch((error) => {
      console.log(error);

    })



  }

  const commentLikeHandler = (commentId) => {
    // setCommentIsLiked(!commentIsLiked)
    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`,
      },
      params: {
        commentId: commentId
      }
    }
    axios.post(`http://localhost:8000/api/v1/likes/toggle-comment-like/${commentId}`,
      {},
      config
    ).then((response) => {
      console.log("clh, ", response);
      // setCommentIsLiked(!isLiked)
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === commentId
            ? {
              ...comment,
              isLiked: !comment.isLiked,
              likesCount: comment.isLiked ? comment.likesCount - 1 : comment.likesCount + 1
            }
            : comment
        )
      );

    }).catch((error) => {
      console.log(error);

    })
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value)
    // console.log(newComment);
  }

  const handleCommentSubmit = () => {
    console.log(newComment);
    console.log(videoItem._id);


    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      },
      params: {
        videoId: videoItem._id
      }
    }

    axios.post(`http://localhost:8000/api/v1/comments/add-comment/${videoItem._id}`,
      { content: newComment },
      config
    ).then((response) => {
      console.log(response);
      setComments([response.data.data, ...comments])

      console.log("re", response.data.data);

      console.log(comments)



    }).catch((error) => {
      console.log(error);

    })

  }

  const removeComment = (commentId) => {
    setComments((prevComments) => prevComments.filter((comment) => comment._id != commentId))
  }





  if (!video) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className={`flex flex-col items-center bg-gray-900 text-white min-h-screen p-4 ${sidebar ? 'ml-64' : ''}`}>
      {/* Video Section */}
      <div className="w-full max-w-7xl mb-8">
        <div className="relative h-0 pb-[56.25%] overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={video.videoFile}
            title={video?.title.replace(/-/g, ' ')}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video Details Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-semibold mb-2">{video.title}</h1>
        <div className="flex justify-between items-center mb-4">
          <span>{video?.views} views •
            {/* {videoData.uploadDate} */}
            {moment(video.createdAt).fromNow()}
          </span>
          <div className="flex space-x-4">
            <button
              className="flex items-center space-x-1 text-lg hover:bg-slate-500 h-9 w-16 rounded-md justify-center"
              onClick={videoLikeHandler}
            >
              {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              {/* <span>{video.likesCount}</span> */}
              <span>{likeCnt}</span>
            </button>
          </div>
        </div>

        <hr className="border-gray-700 mb-4" />

        {/* Channel Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full">
              <img src={video.owner.avatar} alt="" className='rounded-full w-12 h-12' />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{video.owner.username}</h2>
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

        </div>

        {/* Description Section */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <p>{video.description}</p>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>

          {/* Add Comment Section */}
          <div className="mb-4">
            <textarea
              onChange={(e) => handleCommentChange(e)}
              rows="3"
              className="w-full p-2 bg-gray-700 text-white rounded-lg"
              placeholder="Add a comment..."
            />
            <button
              onClick={handleCommentSubmit}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Submit
            </button>
          </div>

          {/* Existing Comments */}
          {comments?.length > 0 && comments.map((comment) => {
            return (
              <div key={comment._id} className="mb-4">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full">
                    <img src={comment.owner.avatar} alt="" className='rounded-full' />
                  </div>
                  <span className="font-semibold">{comment.owner.username}</span>
                </div>
                {/* <div className='relative'>
                  <span className="mb-2">{comment.content}</span>
                  {comment.owner._id === userData.data.user._id && 
                  <span 
                  className="absolute right-0 cursor-pointer"
                  onClick={(e) => editCommentHandler(e)}
                  >
                    <MdOutlineModeEdit />
                  </span>}
                  
                </div> */}
                <Comment comment = {comment} removeComment = {removeComment}/>

                <div className="flex items-center space-x-4">
                  <button
                    className="flex items-center space-x-1 text-sm"
                    onClick={() => commentLikeHandler(comment._id)}
                  >

                    <span>
                      {/* <FaRegThumbsUp /> */}
                      {!comment.isLiked ? <FaRegThumbsUp /> : <FaThumbsUp />}
                    </span>
                    <span>{comment.likesCount}
                    </span>

                  </button>
                </div>
                <hr className="border-gray-700 mt-4" />
              </div>
            )
          })}
        </div>

      </div>
    </div>
  );
};

export default VideoPage;
