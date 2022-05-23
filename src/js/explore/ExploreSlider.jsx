import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ExploreSlider() {
    var settings = {
        dots: true,
        arrows : false ,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false , 
    };
    return (
        <Slider {...settings}>

            <div className="card">
                <div className="card-header">Atlanta</div>
                <div className="card-image"><img src={require('./images/1.jpg')} alt="" /></div>
                <div className="button">View Home</div>
            </div>

            <div className="card">
                <div className="card-header">Atlanta</div>
                <div className="card-image"><img src={require('./images/2.jpg')} alt="" /></div>
                <div className="button">View Home</div>
            </div>

            <div className="card">
                <div className="card-header">Atlanta</div>
                <div className="card-image"><img src={require('./images/3.jpg')} alt="" /></div>
                <div className="card-button">
                    <button>
                        View Home
                    <i class="fa-solid fa-chevron-left"></i>
                    </button></div>

            </div>
            

        </Slider>
    );
}