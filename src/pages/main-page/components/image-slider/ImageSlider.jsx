// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Thumbs, EffectFade } from "swiper";
import { useState } from "react";
import { BASE_SERVER_ULR } from "src/consts/API/API_CONSTS";




const ImageSlider = ({ post }) => {
    const [swiper, setSwiper] = useState()
    const [width, setWidth] = useState()



    return (
        <div className="swiper-image-slider ">

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
                    post.attributes.galleries.map((gallery, index) => {
                        if (gallery.type === "pc") {
                            return (
                                <SwiperSlide className='top-slide' key={index}>
                                    <div className="top-slide-content">
                                        <img className="slide-image" src={BASE_SERVER_ULR + gallery.image} alt="" />
                                        <div className="info">
                                            <div className="left">
                                                <div className="price">${post.attributes.price}</div>
                                            </div>
                                            <div className="right">
                                                <div className="name">{post.attributes.title}</div>
                                                <div className="location">{post.attributes.location}</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }

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
                    post.attributes.galleries.map((gallery, index) => {
                        return (
                            <SwiperSlide className='gallery-slide' key={index}>
                                <img src={BASE_SERVER_ULR + gallery.image} alt="" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )

}

export default ImageSlider
