import React from 'react';
import { Link } from 'react-router-dom';

function MyHistory() {
  const historyItems = [
    {
      id: 1,
      videoThumbnail: 'https://via.placeholder.com/150',
      videoTitle: 'How to Learn React',
      channelName: 'React Mastery',
      likes: 1234,
      watchedAt: '2024-08-10 14:35',
      videoUrl: '/videos/1' // URL to the video page
    },
    {
      id: 2,
      videoThumbnail: 'https://via.placeholder.com/150',
      videoTitle: 'Understanding JavaScript Closures',
      channelName: 'JavaScript Guru',
      likes: 987,
      watchedAt: '2024-08-09 11:20',
      videoUrl: '/videos/2' // URL to the video page
    },
    // Add more items as needed
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#200f0f] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">My History</h2>
      <ul className="space-y-4">
        {historyItems.map((item) => (
          <li key={item.id} className="flex items-center bg-[#343434] rounded-lg p-4 hover:bg-[#2c2c2c] transition duration-200">
            <Link to={item.videoUrl} className="flex items-center w-full">
              <img
                src={item.videoThumbnail}
                alt={item.videoTitle}
                className="w-32 h-18 rounded-lg object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{item.videoTitle}</h3>
                <p className="text-sm text-gray-400 mb-1">{item.channelName}</p>
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-[#d96f2e]">{item.likes} likes</span> &bull; Watched on {new Date(item.watchedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyHistory;
