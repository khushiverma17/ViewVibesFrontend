import React, { useEffect } from 'react'
import { useState } from 'react';
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { LuSaveAll } from "react-icons/lu";
import axios from 'axios';

function Comment({ comment, removeComment}) {
    const navigate = useNavigate()
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
    }, [])
    const [commentContent, setCommentContent] = useState(comment.content)
    const [commentEditable, setCommentEditable] = useState(false)
    const [originalCommentContent, setOriginalCommentContent] = useState(comment.content)
    // let originalCommentContent = comment.content


    const editCommentHandler = (e) => {

        setCommentEditable(!commentEditable)

        if (commentEditable && originalCommentContent != commentContent) {

            // make the request to the backend
            const config = {
                headers: {
                    Authorisation: `Bearer ${userData.data.accessToken}`
                }
            }

            axios.patch(`http://localhost:8000/api/v1/comments/update-comment/${comment._id}`,
                { content: commentContent },
                config,
            ).then((response) => {
                console.log("Log from : ", response);
                // originalCommentContent=response.data.data.content
                setOriginalCommentContent(response.data.data.content)
                setCommentContent(response.data.data.content)
                console.log("yes", response.data.data.content);

            }).catch((error) => {
                console.log("Error", error);
            })
            console.log("Comment is edited: ", commentContent);
        }
        else {
            setCommentContent(originalCommentContent)
        }
    }

    const deleteCommentHandler = () => {
        const config = {
            headers: {
                Authorisation: `Bearer ${userData.data.accessToken}`
            },
            params: {
                commentId: comment._id
            }
        }

        axios.delete(`http://localhost:8000/api/v1/comments/delete-comment/${comment._id}`,
            config
        ).then((response) => {
            console.log(response);
            setCommentContent("")
            removeComment(comment._id)
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className='relative'>
            {/* <span className="mb-2">{comment.content}</span> */}
            <input
                className={`mb-2 w-64 bg-inherit border-none ${!commentEditable ? 'outline-none' : ''}`}
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                readOnly={!commentEditable}
            />
            {comment.owner._id === userData.data.user._id &&
                <div >
                    <span
                        className="absolute right-6 cursor-pointer"
                        // onClick={(e) => editCommentHandler(e)}
                        onClick={editCommentHandler}
                    >
                        {commentEditable ? <LuSaveAll /> : <MdOutlineModeEdit />}

                    </span>
                    <span
                        className="absolute right-0 cursor-pointer"
                        onClick={deleteCommentHandler}
                    >
                        <MdDeleteOutline />
                    </span>
                </div>
            }
        </div>
    )
}

export default Comment
