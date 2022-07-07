import { useState, useEffect } from "react"
import axios, { Axios } from "axios"
import { Icon } from '@iconify/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";



const NewEstates = () => {

  return (
    <section className='new-estates '>
      <div className="new-estates-header">
        <h1>
          <span>
            New </span>
          Estates</h1>
      </div>
      <div className="new-estates-body">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item  page-grid-style-responsive">
              <div className="item-body left">
                <div className="item-price">
                  $<span>1,100,000</span>
                </div>
                <div className="item-name">
                  <h1>665 Norfleet Rd NW</h1>
                </div>
                <div className="item-address">
                  <h2>Atlanta, GA 30305</h2>
                </div>
                <div className="item-rating">
                  <h2><span>4</span> Star</h2>
                  <div className="stars">
                    <Icon icon="emojione:star" />
                    <Icon icon="emojione:star" />
                    <Icon icon="emojione:star" />
                    <Icon icon="emojione:star" />
                  </div>
                </div>
                <div className="item-category">
                  <div className="category">
                    <span>duplex</span>
                  </div>
                  <div className="category">
                    <span>Home</span>
                  </div>
                  <div className="category">
                    <span>Vacation House</span>
                  </div>
                  <div className="category">
                    <span>Vailla</span>
                  </div>
                  <div className="category">
                    <span>duplex</span>
                  </div>
                </div>
                <div className="item-description">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, praesentium? Laudantium, harum et fugiat aspernatur in eveniet officiis placeat quod nemo sed numquam explicabo voluptatem doloribus ipsam nam possimus earum.</p>
                </div>
                <div className="item-options">
                  <div className="option bed">
                    <small>bed <span>3</span> </small>
                  </div>
                  <div className="option bath">
                    <small>bath<span>3</span></small>
                  </div>
                  <div className="option parking">
                    <small>parking<span>3</span></small>
                  </div>
                  <div className="option sqft">
                    <small>sqft<span>3</span></small>
                  </div>
                </div>
                <div className="view-inside">
                  <span>View Inside</span>
                  <Icon icon="bi:arrow-right" />
                </div>
              </div>
              <div className="item-image right">
                <img src={require('./images/4.jpg')} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item  page-grid-style-responsive">
              <div className="item-body left">
                <div className="item-price">
                  $<span>1,100,000</span>
                </div>
                <div className="item-name">
                  <h1>665 Norfleet Rd NW</h1>
                </div>
                <div className="item-address">
                  <h2>Atlanta, GA 30305</h2>
                </div>
                <div className="item-rating">
                  <h2><span>4</span> Star</h2>
                  <div className="stars">
                    <Icon icon="emojione:star" />
                    <Icon icon="emojione:star" />
                    <Icon icon="emojione:star" />
                    <Icon icon="emojione:star" />
                  </div>
                </div>
                <div className="item-category">
                  <div className="category">
                    <span>duplex</span>
                  </div>
                  <div className="category">
                    <span>Home</span>
                  </div>
                  <div className="category">
                    <span>Vacation House</span>
                  </div>
                  <div className="category">
                    <span>Vailla</span>
                  </div>
                  <div className="category">
                    <span>duplex</span>
                  </div>
                </div>
                <div className="item-description">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, praesentium? Laudantium, harum et fugiat aspernatur in eveniet officiis placeat quod nemo sed numquam explicabo voluptatem doloribus ipsam nam possimus earum.</p>
                </div>
                <div className="item-options">
                  <div className="option bed">
                    <small>bed <span>3</span> </small>
                  </div>
                  <div className="option bath">
                    <small>bath<span>3</span></small>
                  </div>
                  <div className="option parking">
                    <small>parking<span>3</span></small>
                  </div>
                  <div className="option sqft">
                    <small>sqft<span>3</span></small>
                  </div>
                </div>
                <div className="view-inside">
                  <span>View Inside</span>
                  <Icon icon="bi:arrow-right" />
                </div>
              </div>
              <div className="item-image right">
                <img src={require('./images/2.jpg')} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default NewEstates