import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import CreatePlaylist from "./components/CreatePlaylist"
import LikedVideos from "./components/LikedVideos"
import MyPlaylists from "./components/MyPlaylists"
import MyVideos from "./components/MyVideos"
import Subscriptions from "./components/Subscriptions"
import MySubscribers from "./components/MySubscribers"
import CreateTweet from "./components/CreateTweet"
import UserTweets from "./components/UserTweets"
import PublishVideo from "./components/PublishVideo"
import MyHistory from "./components/MyHistory"
import ChannelDetails from "./components/ChannelDetails"
import EditMyProfile from "./components/EditMyProfile"
import MyProfile from "./components/MyProfile"
import Layout from "./Layout"
import VideoPage from "./components/VideoPage"
import UpdateVideo from "./components/UpdateVideo"

function App() {


  return (
    // <BrowserRouter>
    // <>
    //   <Navbar/>
    //   <Sidebar/>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/home" />} />
    //     <Route path='/home' element={<Home/>}></Route>
    //     <Route path='/login' element={<Login/>}></Route>
    //     <Route path = "/create-playlist" element = {<CreatePlaylist/>}></Route>
    //     <Route path = "/liked-videos" element = {<LikedVideos/>}></Route>
    //     <Route path = "/my-playlists" element = {<MyPlaylists/>}></Route>
    //     <Route path = "/my-videos" element = {<MyVideos/>}></Route>
    //     <Route path = "/subscriptions" element = {<Subscriptions/>}></Route>
    //     <Route path = "/my-subscribers" element = {<MySubscribers />}></Route>
    //     <Route path = "/create-tweet" element = {<CreateTweet />}></Route>
    //     <Route path = "/user-tweets" element = {<UserTweets />}></Route>
    //     <Route path = "/publish-video" element = {<PublishVideo />}></Route>
    //     <Route path = "/my-history" element = {<MyHistory />}></Route>
    //     <Route path = "/channel-details" element = {<ChannelDetails />}></Route>
    //     {/* this comp should contain a button to modify the details of the current user */}
    //     <Route path = "/my-profile" element = {<MyProfile />}></Route>
    //     <Route path = "/edit-my-profile" element = {<EditMyProfile />}></Route>

    //   </Routes>
    // </>
    // </BrowserRouter>

    <BrowserRouter>
    <Routes>
      {/* Login route without Navbar and Sidebar */}
      <Route path="/" element={<Login />} />

      {/* All other routes with Navbar and Sidebar */}
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
            <Route path="/liked-videos" element={<LikedVideos />} />
            <Route path="/my-playlists" element={<MyPlaylists />} />
            <Route path="/my-videos" element={<MyVideos />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/my-subscribers" element={<MySubscribers />} />
            <Route path="/create-tweet" element={<CreateTweet />} />
            <Route path="/user-tweets" element={<UserTweets />} />
            <Route path="/publish-video" element={<PublishVideo />} />
            <Route path="/my-history" element={<MyHistory />} />
            <Route path="/channel-details" element={<ChannelDetails />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/edit-my-profile" element={<EditMyProfile />} />
            <Route path="/video-page/:title/:videoid/:username/:userid" element={<VideoPage/>}/>
            <Route path="/update-video/:videoid/:username/:userid" element={<UpdateVideo/>}/>
          </Routes>
        </Layout>
      } />
    </Routes>
  </BrowserRouter>

  )
}

export default App
