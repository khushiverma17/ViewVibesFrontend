import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTweet() {
  const [tweet, setTweet] = useState('');

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const navigate = useNavigate()
  useEffect(() => {
    if (!userData) {
      console.log("User data is not there")
      navigate("/")
    }
  }, [userData, navigate])

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = (e) => {

    console.log("inseide");
    
    e.preventDefault();

    const config = {
      headers: {
        Authorisation: `Bearer ${userData.data.accessToken}`
      }
    }

    axios.post(`http://localhost:8000/api/v1/tweets/create-tweet`,
      {
        content: tweet
      },
      config
    ).then((response) => {
      console.log(response);
      setTweet("")
      alert("Tweet posted successfully")
    }).catch((error) =>{
      console.log(error);
    })


  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-[#200f0f] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Create a Tweet</h2>
      <form onSubmit={handleTweetSubmit}>
        <textarea
          className="w-full p-4 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 mb-4"
          rows="4"
          value={tweet}
          onChange={handleTweetChange}
          placeholder="What's happening?"
        />
        <button
          type="submit"
          className="w-full bg-[#d96f2e] text-white py-2 rounded-lg hover:bg-[#b65a1c] focus:outline-none focus:ring-2 focus:ring-[#d96f2e] focus:ring-opacity-50"
        >
          Tweet
        </button>
      </form>
    </div>
  );
}

export default CreateTweet;
