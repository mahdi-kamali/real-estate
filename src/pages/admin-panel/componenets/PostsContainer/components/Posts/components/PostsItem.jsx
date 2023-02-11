import React from 'react'
import { BASE_SERVER_ULR, BASE_URL_ADMIN } from 'src/consts/API/API_CONSTS';
import ToggleButton from 'react-toggle-button';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addAlert } from 'src/features/alert/AlertsState';
import { ALERT_STATUS_DANGER, ALERT_STATUS_SUCCESS, ALERT_STATUS_WARNING, ALERT_TYPE_TEXT } from 'src/consts/Alert/ALERTS_CONSTS';
import { Icon } from '@iconify/react';
import { Tooltip } from 'react-hover-tooltip';
import { refreshPosts } from 'src/features/admin-panel/PostsState';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import { POSTS_POP_COLORS, POSTS_POP_GALLERY, POSTS_POP_PROPERTIES, POSTS_POP_UPDATE } from 'src/consts/popUp/POP_UP_CONTS';
import PopUp from 'src/pages/pop-ups/PopUp';
import PostEdit from './PostEdit';




const PostsItem = ({ data }) => {


    const [status, setStatus] = useState(data?.attributes.status === 1);

    const toggleStatusUrl = BASE_URL_ADMIN + "post-status/" + data?.id


    const token = useSelector(state => state?.user.value.token)

    const dispatcher = useDispatch()





    const handleDeleteClick = () => {
        console.log(BASE_URL_ADMIN + "post/" + data.id);
        axios.delete(BASE_URL_ADMIN + "post/" + data.id, config)
            .then(response => {
                dispatcher(refreshPosts())
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleEditClick = () => {
        dispatcher(setPopUp(
            {
                type: POSTS_POP_UPDATE,
                id: data.id
            }))
    }

    const handleGalleryclick = () => {
        dispatcher(setPopUp({ type: POSTS_POP_GALLERY, id: data?.id }))
    }

    const handlePropertiesClick = () => {
        dispatcher(setPopUp({ type: POSTS_POP_PROPERTIES, id: data?.id }))
    }

    const handleColorsClick = () => {
        dispatcher(setPopUp({ type: POSTS_POP_COLORS, id: data.id }))
    }



    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            "_method": "DELETE"
        },
    };

    const toggle = () => {
        axios.get(toggleStatusUrl, config)
            .then(response => {
                setStatus(response.data.data)
                let alertStatus = response.data.data === 0 ? ALERT_STATUS_WARNING : ALERT_STATUS_SUCCESS
                dispatcher(addAlert(
                    {
                        type: ALERT_TYPE_TEXT,
                        status: alertStatus,
                        header: "Success",
                        body: response.data.message,
                        timeOut: 3
                    }
                ))
                console.log(response);
            }).catch(error => {
                dispatcher(addAlert(
                    {
                        type: ALERT_TYPE_TEXT,
                        status: ALERT_STATUS_DANGER,
                        header: "Error",
                        body: error.message,
                        timeOut: 3
                    }
                ))
            })
    }


    return (
        <div className="post-item">
            <div className="header">
                <img src={BASE_SERVER_ULR + data.attributes.image.indexArray.large} alt="" />
            </div>
            <div className="body">
                <div className="item-price">
                    <span>${data.attributes.price}</span>
                    <ToggleButton
                        value={status}
                        onToggle={toggle} />
                </div>
                <div className="item-title">
                    <h1>{data.attributes.title}</h1>
                </div>
                <div className="item-address"></div>
            </div>
            <div className="buttons">
                <button className='delete' onClick={handleDeleteClick}>
                    <Icon icon="ic:baseline-delete" />
                </button>
                <button className='edit' onClick={handleEditClick}>
                    <Icon icon="material-symbols:edit" />
                </button>
                <button className='gallery' onClick={handleGalleryclick}>
                    <Icon icon="dashicons:format-gallery" />
                </button>
                <button className='peroperties' onClick={handlePropertiesClick}>
                    <Icon icon="dashicons:screenoptions" />
                </button>
                <button className='colors' onClick={handleColorsClick}>
                    <Icon icon="ic:outline-color-lens" rotate={2} />
                </button>
            </div>
        </div>
    )
}

export default PostsItem
