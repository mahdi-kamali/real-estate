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







const SwiperCardList = (props) => {

    const [swiper, setSwiper] = useState()
    const [width, setWidth] = useState(0)


    if (
        props.cards
    ) {
        return (
            <div className="swiper-card-list">
                <Swiper
                    // Math.round(window.innerWidth / 370)
                    onSwiper={setSwiper}
                    slidesPerView={swiper ? Math.round(swiper.width / 320) : 1}
                    spaceBetween={20}
                    slidesPerGroup={swiper ? Math.round(swiper.width / 320) : 1}
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
                    navigation={true}
                    modules={[Navigation]}
                    className="swiper" >

                    {

                        props.cards.map((card, index) => {
                            return (
                                <SwiperSlide className='swiper-slide-custome' key={index}>
                                    <div className="swiper-slide-custome-header">
                                        <img src={card.images.big} />
                                    </div>
                                    <div className="swiper-slide-custome-body">
                                        <div className="price">
                                            $ {card.price}
                                        </div>
                                        <div className="name">
                                            {card.name}
                                        </div>
                                        <div className="address">
                                            {card.address}
                                        </div>
                                        <div className="options">
                                            {card.options.map((option, index) => {
                                                return (
                                                    <div className="option" key={index}>
                                                        <Icon icon={option.svg} />
                                                        <span>
                                                            {option.body}
                                                        </span>
                                                    </div>
                                                )
                                            })}
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
        return 'teqtqet'
    }


}

export default SwiperCardList
