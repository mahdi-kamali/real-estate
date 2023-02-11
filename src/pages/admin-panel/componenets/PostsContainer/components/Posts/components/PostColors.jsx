import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import ColorPicker from "react-pick-color"
import { useDispatch, useSelector } from "react-redux"
import { BASE_SERVER_ULR, BASE_URL_ADMIN } from "src/consts/API/API_CONSTS"

import { Line, Circle } from 'rc-progress';
import { refreshColors } from "src/features/admin-panel/ColorsState"
import { Icon } from "@iconify/react"

const PostColors = () => {

    const [percent, setPercentage] = useState(0)
    const [colorValue, setColorValue] = useState("")
    const [colors, setColors] = useState([])
    const dispatcher = useDispatch()

    const token = useSelector(state => state.user.value.token)
    const postID = useSelector(state => state.popUp.value.id)
    const colorsState = useSelector(state => state.colors.value)


    const POST_COLOR_ADD_URL = BASE_URL_ADMIN + "post/color/" + postID
    const POST_GET_COLORS_URL = BASE_URL_ADMIN + "post/color/" + postID

    console.log(colorsState)



    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            "_method": "DELETE"
        },
    };

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)




        axios.post(POST_COLOR_ADD_URL, formData, config)
            .then(response => {
                dispatcher(refreshColors())
            })

            .catch(error => { })

    }

    useEffect(() => {
        if (postID) {
            axios.get(POST_GET_COLORS_URL, config)
                .then(response => {
                    setColors(response.data.data)
                })
                .catch(error => { })
        }

    }, [postID, colorsState])



    return (
        <div className="post-colors-pop-up">

            <div className="pop-header">
                <h1>Post Colors</h1>
                <div className="colors-list">

                    {
                        colors.map((color, index) => {
                            return (
                                <div className="item">
                                    <h2>{color.attributes.name}</h2>
                                    <Line
                                        className='line'
                                        percent={color.attributes.percentage}
                                        strokeWidth={3}
                                        strokeColor={`${color.attributes.color}`}
                                        trailColor='transparent'
                                    />
                                    <button>
                                        <Icon icon="ic:round-delete" />
                                    </button>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
            <div className="pop-body">
                <ColorPicker
                    className="color-picker"
                    hideAlpha={true}
                    onChange={(color) => setColorValue(color)} />
                <form onSubmit={onFormSubmit} >
                    <label>
                        <span>Color Name</span>
                        <input
                            required
                            type="text"
                            name="name" />
                    </label>
                    <label >
                        <span>Color Values</span>
                        <input
                            required
                            type="text"
                            name="color"
                            readOnly
                            value={colorValue.hex} />
                    </label>
                    <label >
                        <span>Color Percentage
                            <small> {percent}%</small>
                        </span>
                        <input
                            required
                            type="range"
                            name="percentage"
                            min={0}
                            max="100"
                            onChange={
                                (e) => setPercentage(e.target.value)} />
                    </label>
                    <div className="form-buttons">
                        <button>Add Color</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostColors
