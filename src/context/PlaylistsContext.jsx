import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PlaylistsContext = createContext()

export const PlaylistsProvider = ({ children }) => {
    const [userPlaylists, setUserPlaylists] = useState(["one", "two"])

    const userData = JSON.parse(sessionStorage.getItem("userData"))


    useEffect(() => {
        // if (userData) {
        //     // console.log("ji", userData);
        // }

        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`
            },
            params: {
                userId: userData.data.user._id
            }
        }

        axios.get(`http://localhost:8000/api/v1/playlists/get-user-playlists/${userData.data.user._id}`,
            config
        ).then((response) => {
            console.log(response.data.data)
            setUserPlaylists(response.data.data)

        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <PlaylistsContext.Provider value={{ userPlaylists, setUserPlaylists }}>
            {children}
        </PlaylistsContext.Provider>
    )
}