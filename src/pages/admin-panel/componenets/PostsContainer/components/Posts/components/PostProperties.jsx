

import { Icon } from "@iconify/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_STATUS_DANGER, ALERT_STATUS_SUCCESS, ALERT_STATUS_WARNING, ALERT_TYPE_TEXT } from "src/consts/Alert/ALERTS_CONSTS";
import { BASE_SERVER_ULR, BASE_URL_ADMIN } from "src/consts/API/API_CONSTS";
import { CLOSE_POP_UP } from "src/consts/popUp/POP_UP_CONTS";
import { refreshCategories } from "src/features/admin-panel/CategoriesState";
import { setLoading } from "src/features/admin-panel/LoadingStates";
import { setPopUp } from "src/features/admin-panel/PopUpStates";
import { refreshPosts } from "src/features/admin-panel/PostsState";
import { refreshProperties } from "src/features/admin-panel/PropertiesState";
import { addAlert } from "src/features/alert/AlertsState";
import SelectorCategory from "src/pages/selectors/components/SelectorCategory/SelectorCategory";
import SelectorTag from "src/pages/selectors/components/SelectorTag/SelectorTag";
import Selector from "src/pages/selectors/Selector";
import ImagePicker from "./PostGallery/components/ImagePicker";


const PostProperties = () => {


    const id = useSelector(state => state.popUp.value.id)


    const PEROPERTY_CREATE_URL = BASE_URL_ADMIN + "post/property/" + id;


    const dispatcher = useDispatch();
    const [imgSrc, setImgSrc] = useState()
    const [properties, setProperties] = useState([])
    const [percentage, setPercentage] = useState(0)



    const token = useSelector(state => state.user.value.token)
    const propertiesState = useSelector(state => state.properties.value)

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

    function handleFormSubmit(e) {

        e.preventDefault();

        const formData = new FormData(e.target)




        axios.post(
            PEROPERTY_CREATE_URL,
            formData,
            config,
        )
            .then(res => {
                if (res.status == 200) {
                    console.log(res.data)
                    dispatcher(addAlert({
                        type: ALERT_TYPE_TEXT,
                        status: ALERT_STATUS_SUCCESS,
                        header: " Success  ",
                        body: res.data.message,
                        timeOut: 3
                    }))
                    dispatcher(refreshProperties())
                }
                dispatcher(setLoading({ show: false }))
            })
            .catch(error => {

                console.log(error?.response?.data?.message);

                if (error?.response?.data?.message) {
                    dispatcher(addAlert({
                        type: ALERT_TYPE_TEXT,
                        status: ALERT_STATUS_DANGER,
                        header: "Error !",
                        body: error.response.data.message,
                        timeOut: 5
                    }))
                }

                dispatcher(setLoading({ show: false }))
                if (error.message) {

                }
            })
    }


    function onImageChange(e) {
        const file = e.target.files[0]
        const fileReader = new FileReader()


        fileReader.onload = (e) => {
            const src = e.target.result;
            setImgSrc(src)
        }

        fileReader.readAsDataURL(file)

    }


    useEffect(() => {

        const PROPERTY_GET_BASE_URL =
            BASE_URL_ADMIN + "post/property/" + id


        if (id) {
            axios.get(PROPERTY_GET_BASE_URL, config)
                .then(response => {
                    setProperties(response.data.data)
                })
                .catch(error => { })
        }

    }, [id, propertiesState])


    return (
        <div className={`post-pop-up`}>
            <div className="post-header">
                <h1 className="single-header">Post Properties</h1>
            </div>
            <form
                encType="multipart/form-data"
                className="post-body"
                onSubmit={(e) => { handleFormSubmit(e) }}>
                <div className="add-property">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="form-group">
                        <label>Value</label>
                        <input type="text" name="value" />
                    </div>
                    <div className="form-group">
                        <label>status</label>
                        <input type="text" name="status" />
                    </div>
                    <div className="form-group">
                        <label>description</label>
                        <textarea name="description" ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Percentage {percentage}%</label>
                        <input
                            type={"range"}
                            min={0}
                            max={100}
                            name="percentage"
                            onChange={(e) => setPercentage(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={onImageChange} />
                    </div>
                    <div className="form-group">
                        <button className="submit">Submit</button>
                    </div>
                    <div className="form-group">
                        <label>Preview</label>
                        {
                            imgSrc ? <img src={imgSrc} alt="" /> : ""
                        }
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                            <th>Percentage</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties?.map((data, index) => {
                            const attributes = data.attributes
                            const propertyID = data.propertyID;
                            const PROPERTY_DELETE_URL = BASE_URL_ADMIN + "post/property/" + propertyID;

                            const handleOnDelete = () => {
                                axios.delete(PROPERTY_DELETE_URL, config)
                                    .then(response => {
                                        if (response.status === 200) {
                                            dispatcher(refreshProperties())
                                            dispatcher(addAlert({
                                                type: ALERT_TYPE_TEXT,
                                                status: ALERT_STATUS_WARNING,
                                                header: " Deleted ",
                                                body: " Property Delete Success!",
                                                timeOut: 3
                                            }))
                                        }
                                    })
                                    .catch(error => { })
                            }


                            return (
                                <tr>
                                    <td>{attributes.name}</td>
                                    <td>{attributes.value}</td>
                                    <td>{attributes.percentage}%</td>
                                    <td>{attributes.description}</td>
                                    <td ><img src={BASE_SERVER_ULR + attributes.image} /></td>
                                    <td>{attributes.status}</td>
                                    <td>
                                        <div className="form-buttons">
                                            <button
                                                type="button"
                                                onClick={handleOnDelete}>
                                                Delete
                                            </button>
                                            <button
                                                type="button">
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default PostProperties
