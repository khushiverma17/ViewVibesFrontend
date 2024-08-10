import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import thumbnail from "../assets/thumbnail.jpg"
// import moment from 'moment';
// import { valueConvertor } from '../../data';
// import { useSelector } from 'react-redux';

// const API_KEY = import.meta.env.VITE_API_KEY;

function MyVideos({sidebar, setSidebar}) {
  // const lightTheme = useSelector(state => state.themeKey);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    // const response = await fetch(videoList_url);
    // const result = await response.json();
    // setData(result.items);
  }

  // useEffect(() => {
  //   fetchData();
  // }, [category]);
  return (
    // <div>
    //   {data.length ? (
    //     data.map(item => (
    //       <Link key={item._id} to={`video/${item._id}`}>
    //         <img className="w-full h-56 object-cover rounded-lg" src={item.thumbnail} alt="" />
    //         <h2 className={`text-lg font-semibold text-white`}>{itemtitle}</h2>
    //         <h3 className="text-base font-semibold text-gray-600">{item.owner}</h3>
    //         <p className={`text-sm text-gray-600`}>
    //           {/* {valueConvertor(item.views)} views &bull; {moment(item.publishedAt).fromNow()} */}
    //           (item.views) views &bull; {moment(item.publishedAt).fromNow()}
    //         </p>
    //       </Link>
    //     ))
    //   ) : (
    //     <p>Loading</p>
    //   )}
    // </div>


    // <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 ${sidebar ? " ml-64" : ""}`}>
    <div className={`relative pt-20 px-4 md:px-7 lg:px-17 ${sidebar ? 'ml-64' : ''}`}>

    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4`}>
      <Link to={`/home`} className="flex flex-col">
        <img className="w-full h-36 object-cover rounded-lg" src={thumbnail} alt="Video Thumbnail" />
        <h2 className="text-md font-semibold text-white mt-2">Title</h2>
        <p className="text-sm text-gray-400 mt-1">300 views &bull; 2 hours ago</p>
      </Link>
      <Link to={`/home`} className="flex flex-col">
        <img className="w-full h-36 object-cover rounded-lg" src={thumbnail} alt="Video Thumbnail" />
        <h2 className="text-md font-semibold text-white mt-2">Title</h2>
        <p className="text-sm text-gray-400 mt-1">300 views &bull; 2 hours ago</p>
      </Link>
      <Link to={`/home`} className="flex flex-col">
        <img className="w-full h-36 object-cover rounded-lg" src={thumbnail} alt="Video Thumbnail" />
        <h2 className="text-md font-semibold text-white mt-2">Title</h2>
        <p className="text-sm text-gray-400 mt-1">300 views &bull; 2 hours ago</p>
      </Link>
      <Link to={`/home`} className="flex flex-col">
        <img className="w-full h-36 object-cover rounded-lg" src={thumbnail} alt="Video Thumbnail" />
        <h2 className="text-md font-semibold text-white mt-2">Title</h2>
        <p className="text-sm text-gray-400 mt-1">300 views &bull; 2 hours ago</p>
      </Link>
      <Link to={`/home`} className="flex flex-col">
        <img className="w-full h-36 object-cover rounded-lg" src={thumbnail} alt="Video Thumbnail" />
        <h2 className="text-md font-semibold text-white mt-2">Title</h2>
        <p className="text-sm text-gray-400 mt-1">300 views &bull; 2 hours ago</p>
      </Link>
      <Link to={`/home`} className="flex flex-col">
        <img className="w-full h-36 object-cover rounded-lg" src={thumbnail} alt="Video Thumbnail" />
        <h2 className="text-md font-semibold text-white mt-2">Title</h2>
        <p className="text-sm text-gray-400 mt-1">300 views &bull; 2 hours ago</p>
      </Link>
      <Link to={`/home`} className="flex flex-col">
        <img className="w-full h-36 object-cover rounded-lg" src={thumbnail} alt="Video Thumbnail" />
        <h2 className="text-md font-semibold text-white mt-2">Title</h2>
        <p className="text-sm text-gray-400 mt-1">300 views &bull; 2 hours ago</p>
      </Link>
      <Link to={`/home`} className="flex flex-col">
        <img className="w-full h-36 object-cover rounded-lg" src={thumbnail} alt="Video Thumbnail" />
        <h2 className="text-md font-semibold text-white mt-2">Title</h2>
        <p className="text-sm text-gray-400 mt-1">300 views &bull; 2 hours ago</p>
      </Link>
    </div>
    </div>
  )
}

export default MyVideos