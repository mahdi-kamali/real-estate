import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Loading = () => {
    const loadingState = useSelector(state => state.loading.value.show);

    const icon = "eos-icons:bubble-loading"
    
    if (loadingState) {
        return (
            <div className="loading">
                <Icon icon={icon} color="white" />
                <h1>loading</h1>
            </div>
        )
    } else {
        return ''
    }

}

export default Loading
