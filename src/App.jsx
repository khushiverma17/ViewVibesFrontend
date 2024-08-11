import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { useState } from "react"
import Login from "./components/Login"
import CreatePlaylist from "./components/CreatePlaylist"
import LikedVideos from "./components/LikedVideos"
import Sidebar from "./components/Sidebar"
import MyPlaylists from "./components/MyPlaylists"
import MyVideos from "./components/MyVideos"
import Subscriptions from "./components/Subscriptions"
import MySubscribers from "./components/MySubscribers"
import CreateTweet from "./components/CreateTweet"
import UserTweets from "./components/UserTweets"
import PublishVideo from "./components/PublishVideo"
import MyHistory from "./components/MyHistory"
import ChannelDetails from "./components/ChannelDetails"

function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <BrowserRouter>
    <>
      <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path = "/create-playlist" element = {<CreatePlaylist/>}></Route>
        <Route path = "/liked-videos" element = {<LikedVideos sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/my-playlists" element = {<MyPlaylists sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/my-videos" element = {<MyVideos sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/subscriptions" element = {<Subscriptions sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/my-subscribers" element = {<MySubscribers sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/create-tweet" element = {<CreateTweet sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/user-tweets" element = {<UserTweets sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/publish-video" element = {<PublishVideo sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/my-history" element = {<MyHistory sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
        <Route path = "/channel-details" element = {<ChannelDetails sidebar={sidebar} setSidebar={setSidebar}/>}></Route>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
