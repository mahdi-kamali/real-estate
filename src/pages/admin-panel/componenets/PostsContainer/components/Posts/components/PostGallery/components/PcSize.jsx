import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT_STATUS_DANGER, ALERT_STATUS_SUCCESS, ALERT_STATUS_WARNING, ALERT_TYPE_TEXT } from 'src/consts/Alert/ALERTS_CONSTS';
import { BASE_SERVER_ULR, BASE_URL_ADMIN } from 'src/consts/API/API_CONSTS';
import { refreshGallery } from 'src/features/admin-panel/GalleryStates';
import { setLoading } from 'src/features/admin-panel/LoadingStates';
import { addAlert } from 'src/features/alert/AlertsState';
import GalleryCard from './GalleryCard';
import ImagePicker from './ImagePicker';





function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}



const PcSize = () => {


    const token = useSelector(state => state.user.value.token)
    const galleryState = useSelector(state => state.gallery.value)
    const postID = useSelector(state => state.popUp.value.id)
    const [imageSrc, setImageSec] = useState()
    const GALLERY_GET_URL = BASE_URL_ADMIN + `post/gallery/${postID}`
    const TYPE = "pc";

    const [data, setData] = useState()



    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        },


        onUploadProgress: function (progressEvent) {
            console.log(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        }
    };

    const dispatcher = useDispatch()



    useEffect(() => {
        getPcSizeGallery()
    }, [galleryState, postID])

    const getPcSizeGallery = () => {
        if (postID !== undefined && token !== undefined) {
            axios.get(GALLERY_GET_URL, config)
                .then(response => {
                    setData(response.data.data)
                })
                .catch(error => { })
        }
    }

    const onAddImageClick = (e) => {
        e.preventDefault()


        const GALLERY_POST_URL = BASE_URL_ADMIN + "post/gallery/" + postID

        if (imageSrc === undefined || imageSrc === null) {
            dispatcher(addAlert(
                {
                    type: ALERT_TYPE_TEXT,
                    status: ALERT_STATUS_DANGER,
                    header: " Error !",
                    body: "Please Select Image First !",
                    timeOut: 3
                }
            ))
        } else {
            const formData = new FormData(e.target);
            formData.append("image", dataURLtoFile(imageSrc, "image.jpg"))
            formData.append("type", TYPE);


            const config = {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                },


                onUploadProgress: function (progressEvent) {
                    console.log(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                }
            };

            dispatcher(setLoading({ show: true }))

            axios.post(GALLERY_POST_URL, formData, config).then(
                response => {
                    if (response.status == 200) {
                        dispatcher(addAlert({
                            type: ALERT_TYPE_TEXT,
                            status: ALERT_STATUS_SUCCESS,
                            header: "Success !",
                            body: response.data.message,
                            timeOut: 3
                        }))
                        console.log(response.data.message)
                        dispatcher(setLoading({ show: false }))
                    }
                    dispatcher(refreshGallery())
                }
            ).catch(error => console.log(error))

        }
    }


    return (
        <div className="pc-size">
            <div className="row">
                {
                    <ImagePicker setImageSrcFunction={setImageSec} width={1920} height={1080} />
                }
            </div>
            <div className="row">
                <form className="header" method='post' encType='multipart/form-data' onSubmit={onAddImageClick}>
                    <h1>Pc size</h1>
                    <button className='add-image'>
                        <span>Add Photo</span>
                        <Icon icon="ri:image-add-fill" />
                    </button>
                </form>
                <div className="body">
                    {

                        data?.map((data, index) => {
                            if (data?.attributes?.type === TYPE) {
                                return <GalleryCard data={data} key={index} />
                            }
                        })
                    }
                    {
                        data?.length === 0 ? <h1>Emty</h1> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default PcSize
