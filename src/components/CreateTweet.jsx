import React, { useState } from 'react';

function CreateTweet() {
  const [tweet, setTweet] = useState('');

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    // Handle tweet submission here
    console.log('Tweet submitted:', tweet);
    setTweet(''); // Clear the tweet text area after submission
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
