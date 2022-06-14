import SwiperCardList from 'src/js/cards/SwiperCardList';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';






const RecentProperties = (props) => {



    return (
        <div className="recent-properties">
            <div className="proprties-header">
                <h1>Recent Properties</h1>
            </div>
            <div className="proprties-body">
                <SwiperCardList cards={props.cards} />
            </div>
        </div>
    )
}

export default RecentProperties
