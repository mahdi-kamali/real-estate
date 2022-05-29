
import { Icon } from '@iconify/react';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


const Search = () => {

    return (
        <section className="search">
            <div className="search-header">
                <h1>
                    <span>
                        Search & </span>
                    Explore </h1>
            </div>
            <div className="search-body page-grid-style-responsive">
                <div className="left">
                    <div className="left-header">
                        <h1>Search Something</h1>
                    </div>
                    <div className="left-body">
                        <div className="search-bar">
                            <Icon icon="ep:search" />
                            <input type="text" />
                        </div>
                        <div className="top-searches">
                            <div className="top-searches-header">
                                <h1>Top Searches</h1>
                            </div>
                            <div className="top-searches-body">
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/1.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="item-name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="item-address">
                                            Brighton, MA 02135
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/2.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="item-name">
                                            3738 Briarcliff Rd
                                        </div>
                                        <div className="item-address">
                                            Atlanta, GA 30345
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/3.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="item-name">
                                            3738 Briarcliff Rd
                                        </div>
                                        <div className="item-address">
                                            Atlanta, GA 30345
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/4.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="item-name">
                                            3738 Briarcliff Rd
                                        </div>
                                        <div className="item-address">
                                            Atlanta, GA 30345
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/1.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="item-name">
                                            3738 Briarcliff Rd
                                        </div>
                                        <div className="item-address">
                                            Atlanta, GA 30345
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-header">
                        <h1>Explore</h1>
                    </div>
                    <div className="right-body">
                        <div className="item">
                            <div className="item-header">
                                <img src={require('../images/search/7.jpg')} alt="" />
                            </div>
                            <div className="item-body">
                                <div className="item-price">
                                    $<span>2,978,000</span>
                                </div>
                                <div className="item-name">
                                    99 Chestnut Hill Ave
                                </div>
                                <div className="item-address">
                                    Brighton, MA 02135
                                </div>
                                <button className='item-view-inside'>
                                    view inside
                                    <Icon icon="bi:arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="recent-properties">
                        <div className="proprties-header">
                            <h1>Recent Properties</h1>
                        </div>
                        <div className="proprties-body">
                            <Swiper
                                slidesPerView={Math.round(window.innerWidth / 370)}
                                spaceBetween={30}
                                slidesPerGroup={3}
                                loop={false}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: false,
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="swiper" >
                                <SwiperSlide className='item'>
                                    <div className="item-header">
                                        <img src={require('../images/search/1.jpg')} />
                                    </div>
                                    <div className="item-body">
                                        <div className="price">
                                            $2,000,255
                                        </div>
                                        <div className="name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="address">
                                            Brighton, MA 02135
                                        </div>
                                        <div className="facilities">
                                            <div className="option">
                                                <Icon icon="fa:bed" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:bath" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:parking" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="bx:area" />
                                                <span>
                                                    2,700
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='item'>
                                    <div className="item-header">
                                        <img src={require('../images/search/2.jpg')} />
                                    </div>
                                    <div className="item-body">
                                        <div className="price">
                                            $2,000,255
                                        </div>
                                        <div className="name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="address">
                                            Brighton, MA 02135
                                        </div>
                                        <div className="facilities">
                                            <div className="option">
                                                <Icon icon="fa:bed" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:bath" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:parking" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="bx:area" />
                                                <span>
                                                    2,700
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='item'>
                                    <div className="item-header">
                                        <img src={require('../images/search/3.jpg')} />
                                    </div>
                                    <div className="item-body">
                                        <div className="price">
                                            $2,000,255
                                        </div>
                                        <div className="name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="address">
                                            Brighton, MA 02135
                                        </div>
                                        <div className="facilities">
                                            <div className="option">
                                                <Icon icon="fa:bed" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:bath" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:parking" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="bx:area" />
                                                <span>
                                                    2,700
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='item'>
                                    <div className="item-header">
                                        <img src={require('../images/search/4.jpg')} />
                                    </div>
                                    <div className="item-body">
                                        <div className="price">
                                            $2,000,255
                                        </div>
                                        <div className="name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="address">
                                            Brighton, MA 02135
                                        </div>
                                        <div className="facilities">
                                            <div className="option">
                                                <Icon icon="fa:bed" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:bath" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:parking" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="bx:area" />
                                                <span>
                                                    2,700
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='item'>
                                    <div className="item-header">
                                        <img src={require('../images/search/5.jpg')} />
                                    </div>
                                    <div className="item-body">
                                        <div className="price">
                                            $2,000,255
                                        </div>
                                        <div className="name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="address">
                                            Brighton, MA 02135
                                        </div>
                                        <div className="facilities">
                                            <div className="option">
                                                <Icon icon="fa:bed" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:bath" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:parking" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="bx:area" />
                                                <span>
                                                    2,700
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='item'>
                                    <div className="item-header">
                                        <img src={require('../images/search/6.jpg')} />
                                    </div>
                                    <div className="item-body">
                                        <div className="price">
                                            $2,000,255
                                        </div>
                                        <div className="name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="address">
                                            Brighton, MA 02135
                                        </div>
                                        <div className="facilities">
                                            <div className="option">
                                                <Icon icon="fa:bed" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:bath" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:parking" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="bx:area" />
                                                <span>
                                                    2,700
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='item'>
                                    <div className="item-header">
                                        <img src={require('../images/search/1.jpg')} />
                                    </div>
                                    <div className="item-body">
                                        <div className="price">
                                            $2,000,255
                                        </div>
                                        <div className="name">
                                            99 Chestnut Hill Ave
                                        </div>
                                        <div className="address">
                                            Brighton, MA 02135
                                        </div>
                                        <div className="facilities">
                                            <div className="option">
                                                <Icon icon="fa:bed" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:bath" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="fa-solid:parking" />
                                                <span>
                                                    4
                                                </span>
                                            </div>
                                            <div className="option">
                                                <Icon icon="bx:area" />
                                                <span>
                                                    2,700
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="unique-item">
                        <div className="unique-header">
                            <div className="item-header">
                                <img src={require('../images/search-explore/Card 1/1.jpg')} />
                            </div>
                        </div>
                        <div className="unique-body">
                            <div className="item-body">
                                <div className="price">
                                    $2,000,255
                                </div>
                                <div className="name">
                                    99 Chestnut Hill Ave
                                </div>
                                <div className="address">
                                    Brighton, MA 02135
                                </div>
                                <div className="description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus dicta nisi, quasi ut expedita similique. Quidem, quasi laborum, delectus esse deleniti obcaecati dolores assumenda velit sit, at blanditiis veritatis!
                                </div>
                                <div className="options">
                                    <div className="option">
                                        <Icon icon="fa:bed" />
                                        <span>
                                            4
                                        </span>
                                    </div>
                                    <div className="option">
                                        <Icon icon="fa-solid:bath" />
                                        <span>
                                            4
                                        </span>
                                    </div>
                                    <div className="option">
                                        <Icon icon="fa-solid:parking" />
                                        <span>
                                            4
                                        </span>
                                    </div>
                                    <div className="option">
                                        <Icon icon="bx:area" />
                                        <span>
                                            2,700
                                        </span>
                                    </div>
                                </div>
                                <div className="gallery">
                                    <img src={require("../images/search-explore/Card 1/2.jpg")} alt="" />
                                    <img src={require("../images/search-explore/Card 1/3.jpg")} alt="" />
                                    <img src={require("../images/search-explore/Card 1/4.jpg")} alt="" />
                                    <img src={require("../images/search-explore/Card 1/5.jpg")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search
