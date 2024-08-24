import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateVideo() {
  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [thumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate()

  const location = useLocation()
  const [videoItem, setVideoItem] = useState()
  
  useEffect(() => {
    if(!userData){
      console.log("User data is not there");
      navigate("/")
    }
    else{
      console.log("Location is: ", location);
      
      setVideoItem(location.state)
      setTitle(location.state.title)
      setDescription(location.state.description)
      setThumbnail(location.state.thumbnail)
    }
  }, [])
  
  const updateHandler = () => {
    try {
        console.log("title: ", title, "description: ", description);
        
        console.log("location.state is ", location.state);
        console.log("inside updateHandler");

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append("thumbnail", thumbnail)

        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`,  // Correct spelling
                "Content-Type": "multipart/form-data"
            }
        };

        console.log("Video ID:", videoItem._id);
        console.log("FormData:", formData);

        axios.patch(
            `http://localhost:8000/api/v1/videos/update-video/${videoItem._id}`,
            formData,
            config
        ).then((response) => {
            setThumbnail(response.data.data.thumbnail)
            console.log(response);
            
        }).catch((error) => {
            console.error("Update error: ", error.response?.data || error.message);
        });

    } catch (error) {
        console.log("Handler error: ", error);
    }
}



  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#200f0f] rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">Update Video</h2>

      <div className="mb-6">
        <label className="block text-white mb-2">Title</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Description</label>
        <textarea
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Thumbnail</label>
        <div className="flex items-center">
          <img src={thumbnail} alt="Thumbnail" className="w-32 h-20 object-cover rounded-md mr-4" />
          <input
            type="file"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
            onChange={(e) => setThumbnail(e.target.files[0])}
            // onChange={(e) => setThumbnail(URL.createObjectURL(e.target.files[0]))}
          />
          <button
            onClick={updateHandler}
            className="ml-4 px-4 py-2 text-white rounded-lg bg-[#d96f2e]"
          >
            Update Video Details
          </button>
        </div>
      </div>

    </div>
  );
}

export default UpdateVideo;

