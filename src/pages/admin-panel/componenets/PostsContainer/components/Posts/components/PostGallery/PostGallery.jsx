import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL_ADMIN } from 'src/consts/API/API_CONSTS';
import AllSizes from './components/AllSize';
const PostGallery = () => {

    const [sideBarIndex, setSideBarIndex] = useState(0)
    const [allSizeImages, setAllSizeImages] = useState();

    const id = useSelector(state => state.popUp.value.id)
    const token = useSelector(state => state.user.value.token)


    const POST_GALLERY_GET_URL = BASE_URL_ADMIN + "post/gallery/" + id



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

        if (id !== undefined) {
            axios
                .get(POST_GALLERY_GET_URL, config)
                .then(response => {
                    setAllSizeImages(response.data.data)
                })
        }

    }, id)


    const showSelectedComponent = () => {

        let component;

        switch (sideBarIndex) {
            case 0: { component = <AllSizes data={allSizeImages} />; break; }
            // case 1: { component = <AllSizes />; break; }
            // case 2: { component = <AllSizes />; break; }
            // case 3: { component = <AllSizes />; break; }
            // case 4: { component = <AllSizes />; break; }
        }
        return component


    }

    return (
        <div className="post-gallery-pop-up">
            <aside className="gallery-header">
                <h1>GALLERY </h1>
                <h2>ID : #{id}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi? Tempore nobis incidunt, recusandae dolore porro exercitationem sit reiciendis autem dolorum vitae a! Accusamus excepturi eius dignissimos saepe quo omnis?
                </p>
                <ul>
                    <li
                        className={sideBarIndex == 0 ? "selected" : ""}
                        onClick={() => { setSideBarIndex(0) }}>
                        <Icon icon="material-symbols:all-inbox-sharp" />
                        All Sizes
                    </li>
                    <li
                        className={sideBarIndex == 1 ? "selected" : ""}
                        onClick={() => { setSideBarIndex(1) }}>
                        <Icon icon="bi:pc-display-horizontal" />
                        Pc Size
                    </li>
                    <li
                        className={sideBarIndex == 2 ? "selected" : ""}
                        onClick={() => { setSideBarIndex(2) }}>
                        <Icon icon="bi:laptop" />
                        Labtop Size
                    </li>
                    <li
                        className={sideBarIndex == 3 ? "selected" : ""}
                        onClick={() => { setSideBarIndex(3) }}>
                        <Icon icon="bi:tablet-landscape" />
                        Tablet Size
                    </li>
                    <li
                        className={sideBarIndex == 4 ? "selected" : ""}
                        onClick={() => { setSideBarIndex(4) }}>
                        <Icon icon="material-symbols:phone-android" />
                        Mobile Size
                    </li>
                </ul>
            </aside>
            <div className="gallery-body">
                {
                    showSelectedComponent()
                }
            </div>
        </div>
    )
}

export default PostGallery
