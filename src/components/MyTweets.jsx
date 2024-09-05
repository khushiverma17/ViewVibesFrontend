import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tweet from './Tweet'; // Import Tweet component

const MyTweets = () => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!userData) {
            navigate("/");
        }

        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`,
            },
            params: {
                userId: userData.data.user._id,
            },
        };

        axios.get(`http://localhost:8000/api/v1/tweets/get-user-tweets/${userData.data.user._id}`, config)
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const removeTweet = (tweetId) => {
        setData(prevData => prevData.filter(tweet => tweet._id !== tweetId));
    };

    const updateTweet = (tweetId, newContent) => {
        setData(prevData => 
            prevData.map(tweet => tweet._id === tweetId ? { ...tweet, content: newContent } : tweet)
        );
    };

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            {data.map((tweet) => (
                <Tweet
                    key={tweet._id}
                    tweet={tweet}
                    removeTweet={removeTweet}
                    updateTweet={updateTweet}
                />
            ))}
        </div>
    );
};

export default MyTweets;
