import React from 'react'
import { useState } from 'react'
const ProImage = ({ src, animation , selfClass }) => {

    const [loaded, setLoaded] = useState(false);
    return (
        <>
            <img className={`${loaded ? animation : ""} ${selfClass}`} src={src} onLoad={() => { setLoaded(true) }} />
        </>
    )
}

export default ProImage
