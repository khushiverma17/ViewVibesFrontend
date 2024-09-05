import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import CreatePlaylist from "./components/CreatePlaylist"
import LikedVideos from "./components/LikedVideos"
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
import UserPlaylists from "./components/UserPlaylists"
import PlaylistVideos from "./components/PlaylistVideos"
import { PlaylistsProvider } from "./context/PlaylistsContext"
import AllTweets from "./components/AllTweets"
import MyTweets from "./components/MyTweets"

function App() {

  const isLoggedIn = Boolean(sessionStorage.getItem("userData"))

  return (

    <BrowserRouter>
      <Routes>
        {/* Login route without Navbar and Sidebar */}
        <Route path="/" element={<Login />} />

        {/* All other routes with Navbar and Sidebar */}

        {isLoggedIn &&
          <Route path="*" element={
            <PlaylistsProvider>
              <Layout>
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="/create-playlist" element={<CreatePlaylist />} />
                  <Route path="/liked-videos" element={<LikedVideos />} />
                  <Route path="/user-playlists/:userId" element={<UserPlaylists />} />
                  <Route path="/my-videos" element={<MyVideos />} />
                  <Route path="/subscriptions" element={<Subscriptions />} />
                  <Route path="/my-subscribers" element={<MySubscribers />} />
                  <Route path="/create-tweet" element={<CreateTweet />} />
                  <Route path="/user-tweets" element={<UserTweets />} />
                  <Route path="/publish-video" element={<PublishVideo />} />
                  <Route path="/my-history" element={<MyHistory />} />
                  <Route path="/channel-details/:username/:userid" element={<ChannelDetails />} />
                  <Route path="/my-profile" element={<MyProfile />} />
                  <Route path="/edit-my-profile" element={<EditMyProfile />} />
                  <Route path="/video-page/:title/:videoid/:username/:userid" element={<VideoPage />} />
                  <Route path="/update-video/:videoid/:username/:userid" element={<UpdateVideo />} />
                  <Route path="/playlist-videos/:playlistid" element={<PlaylistVideos />} />
                  <Route path="/all-tweets" element={<AllTweets/>}/>
                  <Route path="/my-tweets" element={<MyTweets/>}/>
                </Routes>
              </Layout>
            </PlaylistsProvider>
          } />

        }


      </Routes>
    </BrowserRouter>

  )
}

export default App
