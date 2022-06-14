
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import SwiperCardList from '../cards/SwiperCardList';
import SearchBigCard from '../search/card-big/SearchBigCard';

const ByCategory = () => {
    return (
        <section className="by-category">
            <div className="by-category-header">
                <h1>
                    <span> By Category  </span>
                </h1>
            </div>
            <div className="by-category-body  page-grid-style-responsive">
                <div className="left-side">
                    <div className="left-side-header">
                        By Category
                    </div>
                    <div className="left-side-body">
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/1.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/2.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/3.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/4.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/5.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/1.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/2.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/3.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/4.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/5.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                        <SearchBigCard />
                        <SwiperCardList />
                </div>
            </div>
        </section>
    )
}

export default ByCategory
