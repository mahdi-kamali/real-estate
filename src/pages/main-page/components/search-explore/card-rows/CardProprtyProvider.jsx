
// React Iconify
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

// React Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardProprtyProvider = (props) => {

    const [windowSize, setWindowsSize] = useState(null)
    const [swiper, setSwiper] = useState(null)
    const [popularSwiper, setPopularSwiper] = useState()
    const [recentSwiper, setrecentSwiper] = useState()

    useEffect(() => {
        setWindowsSize(window.innerWidth)
        window.onresize = () => {
            setWindowsSize(window.innerWidth)
        }
    }, [])
    return (
        <div className="card-property-provider">
            <div className="provider-header">
                <h1>Property Provider</h1>
            </div>
            <div className="provider-body">
                <div className="left" style={{
                    width: windowSize > 900 ? '' : '100%'
                }}>
                    <div className="logo">
                        <img src={props.card.propertyProvider.logo} alt="" />
                    </div>
                    <div className="info">
                        <div className="name">
                            {props.card.propertyProvider.name}
                        </div>
                        <div className="social-network">
                            <small>Social Network</small>
                            {props.card.propertyProvider.socialNetwork.items.map((item, index) => {
                                return (
                                    <Icon key={index} icon={item.svg} color="black" />
                                )
                            })}
                        </div>
                        <div className="contacting">
                            <small>Contacting</small>
                            <Icon icon="ic:baseline-attach-email" color="black" />
                            <Icon icon="entypo:old-phone" color="black" />
                        </div>

                    </div>
                    <div className="description">
                        {props.card.propertyProvider.description}
                    </div>
                    <div className="account">
                        <button>
                            Click for View Page
                        </button>
                    </div>
                </div>
                <div className="right" style={{
                    width: windowSize > 900 ? '' : '100%'
                }}>
                    <div className="row">
                        <div className="row-header">
                            <h1>Popular Properties</h1>
                            <small><span>4</span> Properties</small>
                        </div>
                        <div className="row-body">
                            <Swiper
                                onSwiper={setPopularSwiper}
                                slidesPerView={
                                    windowSize == 0 ? Math.round(window.innerWidth / 500) : Math.round(windowSize / 500)
                                }
                                slidesPerGroup={window.innerWidth > 1300 ? window.innerWidth / 900 : 1}
                                spaceBetween={24}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Navigation]}
                                className="swiper">
                                {props.card.propertyProvider.popularProperties.items.map((item, index) => {
                                    return (
                                        <SwiperSlide className="item" key={index} >
                                            <div className="item-header">
                                                <img src={item.image.big} />
                                            </div>
                                            <div className="item-body">
                                                <div className="price">
                                                    ${item.info.cardPrice}
                                                </div>
                                                <div className="name">
                                                    {item.info.cardName}
                                                </div>
                                                <div className="address">
                                                    {item.info.cardAddress}
                                                </div>
                                                <div className="facilities">
                                                    {
                                                        item.facilities.items.map((facility, index) => {
                                                            return (
                                                                <div className="option" key={index}>
                                                                    <Icon icon={facility.svg} color="black" />
                                                                    <span>
                                                                        {facility.count}
                                                                    </span>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                                <div className="navigation-prev" >
                                    <Icon icon="ic:round-navigate-next" rotate={2} onClick={
                                        () => {
                                            popularSwiper.slidePrev()
                                        }
                                    } />
                                </div>
                                <div className="navigation-next">
                                    <Icon icon="ic:round-navigate-next" onClick={
                                        () => {
                                            popularSwiper.slideNext()
                                        }
                                    } />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row-header">
                            <h1>Recent Properties</h1>
                            <small><span>4</span> Properties</small>
                        </div>
                        <div className="row-body">
                            <Swiper
                                onSwiper={setrecentSwiper}
                                slidesPerView={
                                    windowSize == 0 ? Math.round(window.innerWidth / 500) : Math.round(windowSize / 500)
                                }
                                slidesPerGroup={window.innerWidth > 1300 ? window.innerWidth / 900 : 1}
                                spaceBetween={24}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Navigation]}
                                className="swiper">
                                {props.card.propertyProvider.recentProperties.items.map((item, index) => {
                                    return (
                                        <SwiperSlide className="item" key={index} >
                                            <div className="item-header">
                                                <img src={item.image.big} />
                                            </div>
                                            <div className="item-body">
                                                <div className="price">
                                                    ${item.info.cardPrice}
                                                </div>
                                                <div className="name">
                                                    {item.info.cardName}
                                                </div>
                                                <div className="address">
                                                    {item.info.cardAddress}
                                                </div>
                                                <div className="facilities">
                                                    {
                                                        item.facilities.items.map((facility, index) => {
                                                            return (
                                                                <div className="option" key={index}>
                                                                    <Icon icon={facility.svg} color="black" />
                                                                    <span>
                                                                        {facility.count}
                                                                    </span>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                                <div className="navigation-prev" >
                                    <Icon icon="ic:round-navigate-next" rotate={2} onClick={
                                        () => {
                                            recentSwiper.slidePrev()
                                        }
                                    } />
                                </div>
                                <div className="navigation-next">
                                    <Icon icon="ic:round-navigate-next" onClick={
                                        () => {
                                            recentSwiper.slideNext()
                                        }
                                    } />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CardProprtyProvider
