import React, { useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

function UserTweets() {
  const user = {
    avatar: 'https://via.placeholder.com/50',
    username: 'User Name',
    totalTweets: 5,
    totalFollowers: 1200,
  };

  const tweets = [
    {
      id: 1,
      text: 'This is a tweet from the user. #exciting #new',
      likes: 45,
      comments: [
        { id: 1, text: 'Great tweet!', author: 'Commenter One' },
        { id: 2, text: 'I agree!', author: 'Commenter Two' },
      ],
    },
    {
      id: 2,
      text: 'Another tweet here. Loving the new updates!',
      likes: 30,
      comments: [
        { id: 3, text: 'Nice!', author: 'Commenter Three' },
      ],
    },
    // Add more tweets here
  ];

  const [showCommentBox, setShowCommentBox] = useState(null);
  const [commentText, setCommentText] = useState('');

  const handleCommentClick = (tweetId) => {
    setShowCommentBox(showCommentBox === tweetId ? null : tweetId);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (tweetId) => {
    // Handle the comment submission logic here
    console.log(`Comment on tweet ${tweetId}: ${commentText}`);
    setCommentText('');
    setShowCommentBox(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-[#200f0f] rounded-lg shadow-md">
      {/* User Details */}
      <div className="flex items-center mb-6">
        <img
          src={user.avatar}
          alt={`${user.username} avatar`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div className="text-white">
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p className="text-sm">{user.totalTweets} Tweets | {user.totalFollowers} Followers</p>
        </div>
      </div>

      {/* Tweets */}
      <div className="space-y-4">
        {tweets.map(tweet => (
          <div key={tweet.id} className="bg-[#343434] p-4 rounded-lg">
            <p className="text-white text-base">{tweet.text}</p>
            <div className="flex items-center justify-between mt-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <button className="flex items-center text-blue-400 hover:text-blue-600">
                  <FaThumbsUp className="mr-1" /> {tweet.likes}
                </button>
                <button
                  className="flex items-center text-blue-400 hover:text-blue-600"
                  onClick={() => handleCommentClick(tweet.id)}
                >
                  <FaComment className="mr-1" /> {tweet.comments.length}
                </button>
              </div>
              {showCommentBox === tweet.id && (
                <div className="mt-2">
                  <textarea
                    className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200"
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={handleCommentChange}
                  />
                  <button
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => handleCommentSubmit(tweet.id)}
                  >
                    Submit Comment
                  </button>
                </div>
              )}
            </div>

            {/* Comments Section */}
            {showCommentBox === tweet.id && tweet.comments.length > 0 && (
              <div className="mt-4 space-y-2">
                {tweet.comments.map(comment => (
                  <div key={comment.id} className="bg-[#2a2a2a] p-2 rounded-lg">
                    <p className="text-white text-sm">
                      <strong>{comment.author}:</strong> {comment.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserTweets;
