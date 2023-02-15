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
import { BASE_APP_URL, BASE_SERVER_ULR } from "src/consts/API/API_CONSTS";
import { useNavigate } from "react-router-dom";



const NewEstates = () => {

  const NEW_ESTATES_GET_BASE_URL = BASE_APP_URL + "recent-posts"

  const [newEstates, setNewEstates] = useState([])

  const navigate = useNavigate()



  useEffect(() => {
    axios.get(NEW_ESTATES_GET_BASE_URL)
      .then(response => {
        setNewEstates(response.data.data)
      })
  }, [])

  const getStars = (starsCount) => {
    let stars = [];
    for (let i = 0; i < starsCount; i++) {
      stars.push(<Icon icon="emojione:star" key={i} />)
    }
    return stars;
  }


  const onclickDetail = (id) => {
    navigate("post/" + id)
  }



  const getAllEstate = newEstates.map((item, index) => {
    return <SwiperSlide key={index}>
      <div className="item  page-grid-style-responsive">
        <div className="item-body left">
          <div className="item-price">
            $<span>{item.attributes.price}</span>
          </div>
          <div className="item-name">
            <h1>{item.attributes.location}</h1>
          </div>
          <div className="item-address">
            <h2>Atlanta, GA 30305</h2>
          </div>
          <div className="item-rating">
            <h2><span>{item.attributes.rating}</span> Star</h2>
            <div className="stars">
              {
                getStars(item.attributes.rating).map(star => {
                  return (star)
                })
              }

            </div>
          </div>
          <div className="item-category">
            {
              item.attributes.tags.map((tag, index) => {
                return (
                  <div className="category" key={index}>
                    <span>#{tag.title}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="item-description">
            <p>
              {item.attributes.description}
            </p>
          </div>
          <div className="item-properties">
            {
              item.attributes.properties.map((property, index) => {
                return (
                  <div className="property" key={index}>
                    {<Icon className="icon" icon={property.svg} />}
                    <span>{property.name}</span>
                    <span>{property.value}</span>
                  </div>
                )
              })
            }

          </div>
          <div className="view-inside"
            onClick={() => onclickDetail(item.id)}>
            <span>View Inside</span>
            <Icon icon="bi:arrow-right" />
          </div>
        </div>
        <div className="item-image right">
          <img src={
            BASE_SERVER_ULR +
            item.attributes.image.indexArray.largeRect} alt="" />
        </div>
      </div>
    </SwiperSlide>
  })



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
          observer={true}
          observeParents={true}
          shouldSwiperUpdate={true}
          watchSlidesProgress={true}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >

          {getAllEstate}


        </Swiper>
      </div>
    </section >
  )
}

export default NewEstates