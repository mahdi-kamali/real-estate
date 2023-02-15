// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


import { Icon } from '@iconify/react';
import { useState } from "react";
import { BASE_SERVER_ULR } from "src/consts/API/API_CONSTS";
import { useNavigate } from "react-router-dom";







const SwiperCardList = ({ cards }) => {

    const [swiper, setSwiper] = useState()
    const [width, setWidth] = useState()

    const navigator = useNavigate()



    if (
        cards
    ) {
        return (
            <div className="swiper-card-list">
                <Swiper
                    onSwiper={setSwiper}
                    slidesPerView={width ? Math.round(swiper.width / 360) : 1}
                    spaceBetween={20}
                    slidesPerGroup={width ? Math.round(swiper.width / 360) : 1}
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
                        setWidth(swiper.width / 360)
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="swiper" >
                    {
                        cards.map((card, index) => {
                            const image = card.attributes.image?.indexArray.largeRect
                            const postImage = card.attributes.postImage?.indexArray.largeRect


                            const handleOnClick = () => {
                                navigator("post/" + card.id)
                            }

                            return (
                                <SwiperSlide
                                    className='swiper-slide-custome'
                                    key={index}
                                    onClick={handleOnClick}>
                                    <div className="swiper-slide-custome-header">
                                        <img src={BASE_SERVER_ULR + (image ? image : postImage)} />
                                    </div>
                                    <div className="swiper-slide-custome-body">
                                        <div className="icons">
                                            <Icon icon="bi:share-fill" />
                                            <Icon icon={card.isLiked ? 'twemoji:red-heart' : 'el:heart-empty'} />
                                        </div>
                                        <div className="price">
                                            $ {card.attributes.price}
                                        </div>
                                        <div className="name">
                                            <Icon
                                                className="icon" icon="material-symbols:home" />
                                            {card.attributes.title}
                                        </div>
                                        <div className="address">
                                            <Icon
                                                className="icon"
                                                icon="material-symbols:location-on" /> {card.attributes.location}
                                        </div>
                                        <div className="description">
                                            <p>
                                                {card.attributes.description}
                                            </p>
                                        </div>
                                        <div className="properties">
                                            {
                                                card.attributes?.properties?.map((option, index) => {
                                                    return (
                                                        <div
                                                            className="property"
                                                            key={index}>
                                                            <Icon icon={option.svg} />
                                                            <span>
                                                                {option.value}
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </SwiperSlide>
                            )

                        })
                    }
                </Swiper>
            </div>
        )
    } else {
        return ''
    }


}

export default SwiperCardList
