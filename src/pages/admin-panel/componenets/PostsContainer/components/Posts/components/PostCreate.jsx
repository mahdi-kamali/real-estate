import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_STATUS_DANGER, ALERT_STATUS_SUCCESS, ALERT_TYPE_TEXT } from "src/consts/Alert/ALERTS_CONSTS";
import { BASE_URL_ADMIN } from "src/consts/API/API_CONSTS";
import { CLOSE_POP_UP } from "src/consts/popUp/POP_UP_CONTS";
import { refreshCategories } from "src/features/admin-panel/CategoriesState";
import { setLoading } from "src/features/admin-panel/LoadingStates";
import { setPopUp } from "src/features/admin-panel/PopUpStates";
import { refreshPosts } from "src/features/admin-panel/PostsState";
import { addAlert } from "src/features/alert/AlertsState";
import SelectorCategory from "src/pages/selectors/components/SelectorCategory/SelectorCategory";
import SelectorTag from "src/pages/selectors/components/SelectorTag/SelectorTag";
import Selector from "src/pages/selectors/Selector";

const PostCreate = () => {

    const POST_CREATE_URL = BASE_URL_ADMIN + "post";

    const dispatcher = useDispatch();


    const [catImage, setCatImage] = useState();
    const [rating, setRaing] = useState(5);

    const img = useRef()



    const token = useSelector(state => state.user.value.token)



    function handleFormSubmit(e) {

        e.preventDefault();

        const formData = new FormData(e.target)

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
            POST_CREATE_URL,
            formData,
            config,
        )
            .then(res => {
                if (res.status == 201) {
                    dispatcher(setPopUp(CLOSE_POP_UP))
                    dispatcher(refreshCategories())
                    dispatcher(addAlert({
                        type: ALERT_TYPE_TEXT,
                        status: ALERT_STATUS_SUCCESS,
                        header: res.statusText,
                        body: res.data.data.message,
                        timeOut: 3
                    }))
                }
                dispatcher(setLoading({ show: false }))
                dispatcher(refreshPosts())
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
        for (let i = 0; i < rating; i++) {
            component.push(<Icon className="icon" icon="ic:sharp-star" key={i} />)
        }
        return component
    }


    return (
        <div className={`post-pop-up`}>
            <div className="post-header">
                <h1 className="single-header">Post Create</h1>
            </div>
            <form
                encType="multipart/form-data"
                className="post-body"
                onSubmit={(e) => { handleFormSubmit(e) }}>


                <img ref={img} src={require("../../../../../images/mid/1.jpg")} />

                <div className="row">

                    <div className="column">
                        <fieldset className="form-group">
                            <legend>Property Title</legend>
                            <input type="text" name="title" required />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend>Property Type</legend>
                            <input type="text" name="type" required />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend>In Category </legend>
                            <Selector components={<SelectorCategory />} />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend>Property Price</legend>
                            <input type="number" name="price" required />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend>Property Tax</legend>
                            <input type="number" name="tax" required />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend>
                                Property Rating
                            </legend>
                            <h1 className="rating-result">
                                <span>{rating}</span>
                                { }
                                {countStars()} STAR
                            </h1>
                            <input
                                type="range"
                                name="rating"
                                min={1}
                                max={5}
                                required onChange={(e) => setRaing(e.target.value)} />
                        </fieldset>
                    </div>

                    <div className="column">

                        <fieldset className="form-group">
                            <legend>Property tags</legend>
                            <Selector components={<SelectorTag />} />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend> description </legend>
                            <textarea type="text" name="description" required />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend> location </legend>
                            <input type="text" name="location" required />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend> status </legend>
                            <input type="text" name="status" required />
                        </fieldset>

                        <fieldset className="form-group">
                            <legend>Property Image</legend>
                            <input type="file" name="image" required accept="image/*" onChange={(e) => handleImagePreview(e)} />
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

export default PostCreate
