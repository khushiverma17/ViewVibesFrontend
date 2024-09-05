import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlinePlaylistPlay } from 'react-icons/md';
import { LuSaveAll } from "react-icons/lu";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Playlist({ playlist, removePlaylist }) {

    const navigate = useNavigate()
    const userData = JSON.parse(sessionStorage.getItem("userData"))

    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
    }, [])

    const [playlistName, setPlaylistName] = useState(playlist.name)
    const [playlistDescription, setPlaylistDescription] = useState(playlist.description)
    const [isEditable, setIsEditable] = useState(false)
    const [originalPlaylistName, setOriginalPlaylistName] = useState(playlist.name)
    const [originalPlaylistDescription, setOriginalPlaylistDescription] = useState(playlist.description)

    const deletePlaylistHandler = (playlistId) => {
        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`
            },
            params: {
                playlistId: playlistId
            }
        }

        axios.delete(`http://localhost:8000/api/v1/playlists/delete-playlist/${playlistId}`,
            config
        ).then((response) => {
            console.log(response);
            removePlaylist(playlistId)
        }).catch((error) => {
            console.log(error);
        })
    }



    const editPlaylistHandler = (e) => {
        setIsEditable(!isEditable)


        if (isEditable && (originalPlaylistName!=playlistName || originalPlaylistDescription != playlistDescription)) {
            const config = {
                headers: {
                    Authorisation: `Bearer ${userData.data.accessToken}`
                }
            }
            console.log(playlistName, playlistDescription);

            axios.patch(`http://localhost:8000/api/v1/playlists/update-playlist/${playlist._id}`,
                {
                    name: playlistName,
                    description: playlistDescription
                }, config
            ).then((response) => {
                console.log(response);

            }).catch((error) => {
                console.log(error);

            })

        }else{
            setPlaylistDescription(originalPlaylistDescription)
            setPlaylistName(originalPlaylistName)
        }

    }

    const playlistContent = (
        <div className={`flex items-start p-4 bg-[#343434] rounded-lg shadow-lg mb-4 relative px-4 md:px-7 mr-80 lg:px-17 text-white ml-64`}>
            <MdOutlinePlaylistPlay className='inline-block w-8 h-8 absolute top-10 left-0 mr-8' />
            <div className="ml-4 flex flex-col justify-between">
                <input
                    className="text-white bg-inherit font-semibold text-lg mb-1"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    readOnly={!isEditable}
                    onClick={(e) => e.stopPropagation()}
                />

                <input
                    className="text-gray-400 bg-inherit text-sm mb-1"
                    value={playlistDescription}
                    onChange={(e) => setPlaylistDescription(e.target.value)}
                    readOnly={!isEditable}
                    onClick={(e) => e.stopPropagation()}
                />

                <p className="text-gray-400 text-sm">
                    {playlist.totalVideos} videos &bull; {moment(playlist.updatedAt).fromNow()}
                </p>
            </div>
            <div>
                <span
                    className="absolute right-24 top-8 cursor-pointer hover:bg-gray-400 transition duration-300 rounded-full p-2"
                    onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        editPlaylistHandler()
                    }}
                >
                    {isEditable ? <LuSaveAll className='w-6 h-6' /> : <MdOutlineModeEdit className='w-6 h-6' />}

                </span>
                <span>
                    <MdDeleteOutline
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            deletePlaylistHandler(playlist._id)
                        }}
                        className='inline-block w-10 h-10 p-2 absolute top-8 right-8 rounded-full hover:bg-gray-400 transition duration-300' />
                </span>
            </div>

        </div>
    )

    return (
        isEditable ? playlistContent : (
            <Link
                to={`/playlist-videos/${playlist._id}`}
                state={
                    { playlistId: playlist._id }
                }
            >
                {playlistContent}
            </Link>

        )
    )
}

export default Playlist
