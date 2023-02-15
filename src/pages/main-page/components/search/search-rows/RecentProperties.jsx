import SwiperCardList from '../../cards/SwiperCardList';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BASE_APP_URL } from 'src/consts/API/API_CONSTS';
import axios from 'axios';






const RecentProperties = () => {

    const RECENT_PROPERTIES_GET_BASE_URL = BASE_APP_URL
        + "recent-posts"

    const [recentProperties, setRecentProperties] = useState([])


    useEffect(() => {
        axios.get(RECENT_PROPERTIES_GET_BASE_URL)
            .then(response => {
                setRecentProperties(response.data.data)
            })
    }, [])

    return (
        <div className="recent-properties">
            <div className="proprties-header">
                <h1>Recent Properties</h1>
            </div>
            <div className="proprties-body">
                <SwiperCardList cards={recentProperties} />
            </div>
        </div>
    )
}

export default RecentProperties
