import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL_ADMIN } from 'src/consts/API/API_CONSTS';
import AllSizes from './components/AllSize';
import LapTopSize from './components/LapTopSize';
import MobileSize from './components/MobileSize';
import PcSize from './components/PcSize';
import Tabletsize from './components/TabletSize';
const PostGallery = () => {

    const [sideBarIndex, setSideBarIndex] = useState(0)
    const id = useSelector(state => state.popUp.value.id)


    const showSelectedComponent = () => {

        let component;

        switch (sideBarIndex) {
            case 0: { component = <AllSizes />; break; }
            case 1: { component = <PcSize />; break; }
            case 2: { component = <LapTopSize />; break; }
            case 3: { component = <Tabletsize />; break; }
            case 4: { component = <MobileSize />; break; }
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
