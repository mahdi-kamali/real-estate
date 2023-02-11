import { Icon } from "@iconify/react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL_ADMIN } from "src/consts/API/API_CONSTS"
import { refreshComments } from "src/features/admin-panel/CommentsState"
import { setLoading } from "src/features/admin-panel/LoadingStates"


const Reply = ({ data }) => {
    const date = new Date(data.attributes.created_at)
    const dispatcher = useDispatch()
    const token = useSelector(state => state.user.value.token)
    const COMMENT_DELETE_URL = BASE_URL_ADMIN + "comment/" + data.commentId
    const config = {
        headers: {
            Accept: 'application/json',
            Content_Type: "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const onDeleteClick = () => {

        dispatcher(setLoading({ show: true }))
        axios.delete(COMMENT_DELETE_URL, config).then(response => {
            dispatcher(refreshComments())
            dispatcher(setLoading({ show: false }))
        }).catch(error => {
            console.log(error)
            dispatcher(setLoading({ show: false }))
        })
    }

    return (
        <div className="reply">
            <div className="reply-header">
                <img src="https://picsum.photos/200" alt="" />
                <div className="info">
                    <div className="user-name">
                        {data.attributes.userName}
                    </div>
                    <div className="user-date">
                        <span>
                            <small>Commited At :</small>
                            <small>
                                <span>{date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()}</span>
                            </small>
                        </span>

                    </div>
                </div>
                <div className="buttons">
                    <button >
                        Granted
                        <Icon icon="fluent-mdl2:accept-medium" />
                    </button>
                    <button type="button" onClick={onDeleteClick}>
                        Delete
                        <Icon icon="ic:round-delete" />
                    </button>

                </div>
            </div>
            <div className="reply-body">
                <h1>Content</h1>
                <p>{data.attributes.body}</p>
            </div>
        </div>
    )
}





const CommentsReplys = () => {



    const [replies, setReplies] = useState([])
    const parentID = useSelector(state => state.popUp.value.id)
    const token = useSelector(state => state.user.value.token)
    const COMMENT_GET_REPLIES = BASE_URL_ADMIN + "comment/children/" + parentID
    const commentsState = useSelector(state => state.comments.value)


    const config = {
        headers: {
            Accept: 'application/json',
            Content_Type: "application/json",
            Authorization: `Bearer ${token}`
        }
    }




    useEffect(() => {
        if (parentID) {
            axios.get(COMMENT_GET_REPLIES, config)
                .then(response => {
                    setReplies(response.data.data)
                }).catch(error => {
                    console.log(error)
                })
        }

    }, [parentID, commentsState])




    return (
        <div className="comments-replys-pop-up">
            <div className="pop-up-header">
                <h1>Comment Replies</h1>
            </div>
            <div className="pop-up-body">
                {
                    replies.map((reply, index) => {
                        return <Reply key={index} data={reply} />
                    })
                }

            </div>
        </div>
    )
}

export default CommentsReplys
