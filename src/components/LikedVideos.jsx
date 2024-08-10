import React from 'react';
import thumbnail from "../assets/thumbnail.jpg"
import { Link } from 'react-router-dom';

const LikedVideo = ({ sidebar, setSidebar }) => {
    // Hardcoded data
    const video = {
        thumbnail: { thumbnail }, // Replace with actual thumbnail URL
        title: 'Example Video Title',
        channel: 'Channel Name',
        views: '1.2M views',
        updatedAt: '2 days ago',
    };

    return (
        <div className='bg-black'>
            <Link>
            <div className={`flex items-start p-4 bg-[#343434] rounded-lg shadow-lg mb-4 relative px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
                {/* Video Thumbnail */}
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-48 h-28 object-cover rounded-lg"
                />

                {/* Video Details */}
                <div className="ml-4 flex flex-col justify-between">
                    {/* Video Title */}
                    <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>

                    {/* Channel Name */}
                    <p className="text-gray-400 text-sm mb-1">{video.channel}</p>

                    {/* Views and Updated Time */}
                    <p className="text-gray-400 text-sm">
                        {video.views} &bull; {video.updatedAt}
                    </p>
                </div>
            </div>
            </Link>
            <Link>
            <div className={`flex items-start p-4 bg-[#343434] rounded-lg shadow-lg mb-4 relative px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
                {/* Video Thumbnail */}
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-48 h-28 object-cover rounded-lg"
                />

                {/* Video Details */}
                <div className="ml-4 flex flex-col justify-between">
                    {/* Video Title */}
                    <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>

                    {/* Channel Name */}
                    <p className="text-gray-400 text-sm mb-1">{video.channel}</p>

                    {/* Views and Updated Time */}
                    <p className="text-gray-400 text-sm">
                        {video.views} &bull; {video.updatedAt}
                    </p>
                </div>
            </div>
            </Link>
            <Link>
            <div className={`flex items-start p-4 bg-[#343434] rounded-lg shadow-lg mb-4 relative px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
                {/* Video Thumbnail */}
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-48 h-28 object-cover rounded-lg"
                />

                {/* Video Details */}
                <div className="ml-4 flex flex-col justify-between">
                    {/* Video Title */}
                    <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>

                    {/* Channel Name */}
                    <p className="text-gray-400 text-sm mb-1">{video.channel}</p>

                    {/* Views and Updated Time */}
                    <p className="text-gray-400 text-sm">
                        {video.views} &bull; {video.updatedAt}
                    </p>
                </div>
            </div>
            </Link>
            <Link>
            <div className={`flex items-start p-4 bg-[#343434] rounded-lg shadow-lg mb-4 relative px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
                {/* Video Thumbnail */}
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-48 h-28 object-cover rounded-lg"
                />

                {/* Video Details */}
                <div className="ml-4 flex flex-col justify-between">
                    {/* Video Title */}
                    <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>

                    {/* Channel Name */}
                    <p className="text-gray-400 text-sm mb-1">{video.channel}</p>

                    {/* Views and Updated Time */}
                    <p className="text-gray-400 text-sm">
                        {video.views} &bull; {video.updatedAt}
                    </p>
                </div>
            </div>
            </Link>
            <Link>
            <div className={`flex items-start p-4 bg-[#343434] rounded-lg shadow-lg mb-4 relative px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>
                {/* Video Thumbnail */}
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-48 h-28 object-cover rounded-lg"
                />

                {/* Video Details */}
                <div className="ml-4 flex flex-col justify-between">
                    {/* Video Title */}
                    <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>

                    {/* Channel Name */}
                    <p className="text-gray-400 text-sm mb-1">{video.channel}</p>

                    {/* Views and Updated Time */}
                    <p className="text-gray-400 text-sm">
                        {video.views} &bull; {video.updatedAt}
                    </p>
                </div>
            </div>
            </Link>
            
        </div>
    );
};

export default LikedVideo;
