import React from 'react'
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BASE_SERVER_ULR, BASE_URL_ADMIN } from 'src/consts/API/API_CONSTS';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'src/features/admin-panel/LoadingStates';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import { COMMENTS_POP_REPLYS } from 'src/consts/popUp/POP_UP_CONTS';
import { refreshComments } from 'src/features/admin-panel/CommentsState';

const CommentItem = ({ commentData }) => {

    const dispacher = useDispatch()



    const COMMENT_DELETE_URL = BASE_URL_ADMIN + "comment/" + commentData.commentId

    const COMMENT_POST_REPLY_URL = BASE_URL_ADMIN + "comment"

    const token = useSelector(state => state.user.value.token)

    const config = {
        headers: {
            Accept: 'application/json',
            Content_Type: "application/json",
            Authorization: `Bearer ${token}`
        }
    }



    const date = new Date(commentData.attributes.created_at);


    const onDeleteClick = () => {

        dispacher(setLoading({ show: true }))
        axios.delete(COMMENT_DELETE_URL, config)
            .then(response => {
                dispacher(refreshComments())
                dispacher(setLoading({ show: false }))
            }).catch(error => {
                console.log(error)
                dispacher(setLoading({ show: false }))
            })
    }

    const onSumbitReply = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append("post_id", commentData.attributes.post_id)
        formData.append("parent_id", commentData.commentId)

        axios.post(COMMENT_POST_REPLY_URL, formData, config)
            .then(response => {
                dispacher(refreshComments())
            })
            .catch(error => {
                console.log(error.message)
            })

    }


    const onShowReplys = () => {
        dispacher(setPopUp({ type: COMMENTS_POP_REPLYS, id: commentData.commentId }))
    }



    return (
        <div className="item">
            <div className="item-left">
                <img src={BASE_SERVER_ULR + commentData.attributes.postImage.indexArray.tm} />
                <h1>Post ID : {commentData.attributes.post_id}</h1>
            </div>
            <div className="item-right">
                <div className="user-info">
                    <img src={"https://picsum.photos/200"} />
                    <h1>{commentData.attributes.userName}</h1>
                    <span>{date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()}</span>
                </div>
                <div className="user-comment">
                    <p>{commentData.attributes.body}</p>
                    <div className='show-replys'>
                        <h1>{commentData.attributes.replies.length}</h1>
                        <button type='button' onClick={onShowReplys}>
                            <Icon icon="zondicons:view-show" />
                            Show Replys
                        </button>
                    </div>
                </div>
            </div>
            <form className="item-bottom" onSubmit={onSumbitReply} method="POST" >
                <textarea
                    type="text"
                    placeholder="Enter Messsage"
                    name='body'
                    rows={5}
                    cols={10}
                />
                <div className="item-buttons">
                    <button onClick={onDeleteClick} type="button">
                        <Icon icon="ic:round-delete" />
                        Delete
                    </button>
                    <button >
                        Send Reply
                        <Icon icon="majesticons:send" />
                    </button>

                </div>
            </form>
        </div>
    )
}

export default CommentItem
