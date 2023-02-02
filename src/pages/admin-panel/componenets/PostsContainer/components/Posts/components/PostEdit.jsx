import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_STATUS_DANGER, ALERT_STATUS_SUCCESS, ALERT_TYPE_TEXT } from "src/consts/Alert/ALERTS_CONSTS";
import { BASE_SERVER_ULR, BASE_URL_ADMIN } from "src/consts/API/API_CONSTS";
import { CLOSE_POP_UP } from "src/consts/popUp/POP_UP_CONTS";
import { refreshCategories } from "src/features/admin-panel/CategoriesState";
import { setLoading } from "src/features/admin-panel/LoadingStates";
import { setPopUp } from "src/features/admin-panel/PopUpStates";
import { refreshPosts } from "src/features/admin-panel/PostsState";
import { addAlert } from "src/features/alert/AlertsState";
import SelectorCategory from "src/pages/selectors/components/SelectorCategory/SelectorCategory";
import SelectorTag from "src/pages/selectors/components/SelectorTag/SelectorTag";
import Selector from "src/pages/selectors/Selector";

const PostEdit = () => {

    const POST_CREATE_URL = BASE_URL_ADMIN + "post";



    const dispatcher = useDispatch();


    const [catName, setCatName] = useState();
    const [catImage, setCatImage] = useState();
    const id = useSelector(state => state.popUp.value.id)
    const [data, setData] = useState();
    const [rating, setRaing] = useState(5);
    const img = useRef()



    const token = useSelector(state => state.user.value.token)

    const POST_GET_ADMIN_URL = BASE_URL_ADMIN + "post/" + id + "/edit"
    const POST_UPDATE_ADMIN_URL = BASE_URL_ADMIN + "post/" + id
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



    useEffect(() => {
        if (id) {
            axios.get(POST_GET_ADMIN_URL, config)
                .then(response => {
                    setData(response.data.data[0])
                }).catch(error => {
                })
        }

    }, [id])


    function handleFormSubmit(e) {

        e.preventDefault();

        const formData = new FormData(e.target)

        formData.append("_method", "PUT");

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

        axios.post(
            POST_UPDATE_ADMIN_URL,
            formData,
            config,
        )
            .then(res => {
                if (res.status == 200) {
                    console.log(res.data.message);
                    dispatcher(setPopUp(CLOSE_POP_UP))
                    dispatcher(refreshPosts())
                    dispatcher(addAlert({
                        type: ALERT_TYPE_TEXT,
                        status: ALERT_STATUS_SUCCESS,
                        header: "Succes !",
                        body: res?.data?.message,
                        timeOut: 3
                    }))
                }
            })
            .catch(error => {

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

    function handleImagePreview(e) {

        try {
            const file = e.target.files[0];


            const fileLoader = new FileReader()

            fileLoader.readAsDataURL(file)
            fileLoader.onload = (e) => {
                const src = e.target.result;
                img.current.src = src
                setCatImage(src)
            }
        } catch (e) {

        }

    }

    const handleCancelClick = () => {
        dispatcher(setPopUp(CLOSE_POP_UP))
    }

    const countStars = () => {
        let component = [];
        for (let i = 0; i < data.rating; i++) {
            component.push(<Icon className="icon" icon="ic:sharp-star" key={i} />)
        }
        return component
    }





    if (data) {
        return (
            <div className="post-pop-up">
                <div className="post-header">
                    <div className="column">
                        <h1>Post Update</h1>
                        <span>id  {id}</span>
                    </div>
                    <div className="column">
                        <h1>Status : </h1>
                        <span>{data?.status === 0 ? "DEACTIVE" : "ACTIVE"}</span>
                    </div>
                </div>
                <form
                    encType="multipart/form-data"
                    className="post-body"
                    onSubmit={(e) => { handleFormSubmit(e) }}>


                    <img ref={img} src={BASE_SERVER_ULR + data.image.indexArray.large} />
                    <div className="row">
                        <div className="column">
                            <fieldset className="form-group">
                                <legend>Property Title</legend>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    defaultValue={data.title} />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend>Property Type</legend>
                                <input
                                    type="text"
                                    name="type"
                                    defaultValue={data.type}
                                    required />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend>In Category </legend>
                                <Selector
                                    components=
                                    {<SelectorCategory selectedID={data.cat_id} />}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend>Property Price</legend>
                                <input
                                    type="number"
                                    name="price"
                                    required
                                    defaultValue={data.price}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend>Property Tax</legend>
                                <input
                                    type="number"
                                    name="tax"
                                    required
                                    defaultValue={data.tax}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend>
                                    Property Rating
                                </legend>
                                <h1 className="rating-result">
                                    <span>{rating}</span>
                                    {countStars()} STAR
                                </h1>
                                <input
                                    type="range"
                                    name="rating"
                                    min={1}
                                    max={5}
                                    defaultValue={data.rating}
                                    required onChange={(e) => setRaing(e.target.value)} />
                            </fieldset>
                        </div>

                        <div className="column">

                            <fieldset className="form-group">
                                <legend>Property tags</legend>
                                <Selector components={<SelectorTag defultTags={data?.tags} />} />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend> description </legend>
                                <textarea
                                    type="text"
                                    name="description"
                                    defaultValue={data.description}
                                    required />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend> location </legend>
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    defaultValue={data.location}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend> status </legend>
                                <input
                                    type="text"
                                    name="status"
                                    required
                                    defaultValue={data.status}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <legend>Property Image</legend>
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={(e) => handleImagePreview(e)} />
                            </fieldset>

                            <div className="form-buttons">
                                <button className="submit" type="submit">Submit</button>
                                <button className="cancel" type="button" onClick={handleCancelClick}>Cancel</button>
                            </div>

                        </div>

                    </div>

                </form>
            </div>
        )
    }

}

export default PostEdit
