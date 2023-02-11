import { useEffect, useState } from "react"
import { Icon } from '@iconify/react';
import axios from "axios";
import { BASE_URL_ADMIN } from "src/consts/API/API_CONSTS";
import { useSelector } from "react-redux";
import CommentItem from "./components/CommentItem";
import { Popup } from "react-map-gl";
import PopUp from "src/pages/pop-ups/PopUp";
import CommentsReplys from "./components/CommentsReplys";
import { COMMENTS_POP_REPLYS } from "src/consts/popUp/POP_UP_CONTS";
const Comments = () => {

    const COMMENTS_GET_BASE_URL = BASE_URL_ADMIN + "comment"
    const token = useSelector(state => state.user.value.token)
    const [comments, setComments] = useState([])
    const popUp = useSelector(state => state.popUp.value)

    const commentsState = useSelector(state => state.comments.value)




    const config = {
        headers: {
            Accept: 'application/json',
            Content_Type: "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(COMMENTS_GET_BASE_URL, config).then(response => {
            setComments(response.data.data)
        }).catch(erroe => {
            console.log(erroe)
        })
    }, [commentsState])





    return (
        <div className="mid-side">
            <div className="comments">
                <div className="comments-header">
                    Comments
                </div>
                <div className="comments-body">
                    {
                        comments.map((commentData, index) => {
                            return <CommentItem
                                commentData={commentData}
                                key={index} />
                        })
                    }

                </div>
            </div>
            <PopUp
                component={<CommentsReplys />}
                isShowing={popUp.type === COMMENTS_POP_REPLYS} />
        </div>
    )
}

export default Comments
