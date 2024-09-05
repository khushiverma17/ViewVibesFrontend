import React, { useContext, useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';

import { PlaylistsContext } from '../context/PlaylistsContext';

import Playlist from './Playlist';

const UserPlaylists = () => {
    const { userPlaylists, setUserPlaylists } = useContext(PlaylistsContext)

    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const navigate = useNavigate()
    useEffect(() => {
        if (!userData) {
            console.log("User data is not there")
            navigate("/")
        }
    }, [])




    const removePlaylist = (playlistId) => {
        console.log("ji")
        setUserPlaylists((prevData) => prevData.filter((playlist) => playlist._id != playlistId))
    }


    return (
        <div className='bg-black'>
            {userPlaylists.map((playlist) => {
                return (
                    <Playlist
                        key={playlist._id}
                        playlist={playlist}
                        removePlaylist={removePlaylist}
                    ></Playlist>
                )
            })}



        </div>
    );
};

export default UserPlaylists;
