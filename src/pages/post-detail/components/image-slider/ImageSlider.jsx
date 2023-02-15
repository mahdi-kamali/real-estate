// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Thumbs, EffectFade } from "swiper";


import { Icon } from '@iconify/react';
import { useState } from "react";
import CardParallax from "../card-rows/CardParallax";




const ImageSlider = ({ card }) => {
    const [swiper, setSwiper] = useState()
    const [width, setWidth] = useState()
    return (
        <div className="swiper-image-slider">

            <Swiper
                onSwiper={setSwiper}
                slidesPerView={1}
                spaceBetween={20}
                slidesPerGroup={1}
                loop={false}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: false,
                }}
                thumbs={{ swiper: swiper }}
                navigation={true}
                modules={[Navigation, Thumbs, EffectFade]}
                effect={"fade"}
                className="top-swiper" >
                {
                    card.gallery.map((image, index) => {
                        return (
                            <SwiperSlide className='top-slide' key={index}>
                                <CardParallax card={undefined} indexImage={index} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <Swiper
                onSwiper={setSwiper}
                slidesPerView={width ? Math.round(swiper.width / 360) : 1}
                spaceBetween={20}
                slidesPerGroup={1}
                onAfterInit={
                    () => {
                        swiper ? setWidth(swiper.width) : setWidth(0)
                    }
                }
                loop={false}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: false,
                }}
                onResize={() => {
                    setWidth(Math.round(swiper.width / 360))
                }}
                navigation={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="gallery-swiper" >
                {
                    // .map((image, index) => {
                    //     return (
                    //         <SwiperSlide className='gallery-slide' key={index}>
                    //             <img src={image.src} alt="" />
                    //         </SwiperSlide>
                    //     )
                    // })
                }
            </Swiper>

        </div>
    )
}

export default ImageSlider
