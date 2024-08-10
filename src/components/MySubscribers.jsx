import React from 'react';

function MySubscribers() {
  const channels = [
    {
      id: 1,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel One',
    },
    {
      id: 2,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Two',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'Channel Three',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-[#200f0f] rounded-lg shadow-md">
      <ul>
        {channels.map(channel => (
          <li key={channel.id} className="flex items-center mb-4 hover:bg-[#343434] rounded-lg px-8 py-3 hover:cursor-pointer">
            <img
              src={channel.avatar}
              alt={`${channel.username} avatar`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-lg text-white font-semibold">{channel.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MySubscribers;
