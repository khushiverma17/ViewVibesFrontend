import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePlaylist() {
    const [playlistName, setPlaylistName] = useState('');
    const [description, setDescription] = useState('');

    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const navigate = useNavigate()
    useEffect(() => {
        if (!userData) {
            console.log("User data is not there")
            navigate("/")
        }
    }, [userData, navigate])


    const createPlaylistHandler = () => {
        // e.preventDefault()
        console.log("hello");

        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`
            }
        }

        axios.post(`http://localhost:8000/api/v1/playlists/create-playlist`,
            {
                name: playlistName,
                description: description
            },
            config
        ).then((response) => {
            console.log(response);
            alert("Your playlist is created")
            navigate(`../user-playlists/${userData.data.user._id}`)

        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className={`mx-auto w-full max-w-lg bg-[#200f0f] rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white">
                    Create Playlist
                </h2>
                {/* <form> */}
                    <div className="space-y-5 text-black">
                        <div className="mb-6">
                            <label className="block text-white mb-2">Name</label>
                            <input
                                placeholder='Enter playlist name'
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
                                value={playlistName}
                                onChange={(e) => setPlaylistName(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white mb-2">Description</label>
                            <textarea
                                placeholder='Enter playlist description'
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d96f2e]"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={createPlaylistHandler}
                            className="px-6 py-2 bg-[#412f24] rounded-lg text-md hover:bg-[#654e3f] text-white"
                            // onClick={()=>createPlaylistHandler(e)}
                        >Create Playlist</button>
                    </div>
                {/* </form> */}
            </div>
        </div>
    );
}

export default CreatePlaylist;
