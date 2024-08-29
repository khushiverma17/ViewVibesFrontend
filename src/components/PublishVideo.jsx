import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import axios from 'axios';

function PublishVideo() {
  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  useEffect(() => {
      if(!userData){
        console.log("User data is not there")
        navigate("/")
      }
    }, [userData, navigate])

  const [data, setData] = useState({title:"", description:""})
  const [thumbnail, setThumbnail]=useState(null)
  const [video, setVideo] = useState(null)


    const changeHandler=(e)=>{
      setData({...data, [e.target.name] : e.target.value})
    }

    const fileChangeHandler = (e) => {
      if(e.target.name === "thumbnail") setThumbnail(e.target.files[0])
      if(e.target.name === "video") setVideo(e.target.files[0])
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission

    try {
      const formData = new FormData()
      formData.append('title', data.title)
      formData.append('description', data.description)
      if(thumbnail) formData.append('thumbnail', thumbnail)
      if(video) formData.append('video', video)

         formData.forEach((value, key) => {
      console.log(key, value);
    });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorisation: `Bearer ${userData.data.accessToken}`
        }
      }
      console.log("userdataaaa is, ", userData);
      

      const response = await axios.post(
        `http://localhost:8000/api/v1/users/publish-video/${userData.data.user._id}/${userData.data.user.username}`,
        // `http://localhost:8000/api/v1/users/publish-video`,
        formData,
        config,
      )
      .then((response) => {
        console.log("Response in publish video is : ", response);
        // navigate("/home")
        navigate("/my-videos")
        
      })
    } catch (error) {
      console.log("Error in publishing the video: ", error);
      
    }

    // console.log({ title, description, thumbnail, video });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#200f0f] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">Publish Video</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className='text-white'>
          <Input
            name="title"
            onChange={changeHandler}
            label="Title"
            placeholder="Enter title: "
            type="text"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-white mb-2">
            Description
          </label>
          <textarea
            name="description"
            onChange={changeHandler}
            className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 border border-gray-200"
            placeholder="Enter video description"
            type="text"
            rows="4"
            // required
          />
        </div>

        <div className='text-white'>
          <Input
            name="thumbnail"
            onChange={fileChangeHandler}
            label="Thumbnail"
            type="file"
          />
        </div>

        <div className='text-white'>
          <Input
            name="video"
            onChange={fileChangeHandler}
            label="Video"
            type="file"
          />
        </div>

        <div className="flex justify-center">
          {/* <button
            type="submit"
            className="px-6 py-2 bg-[#d96f2e] text-white rounded-lg hover:bg-[#bf5c1d] transition duration-200"
          >
            Publish Video
          </button> */}
          <Button type="submit">Publish</Button>
        </div>
      </form>
    </div>
  );
}

export default PublishVideo;
