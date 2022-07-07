
// React Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// React Iconify
import { Icon } from '@iconify/react';


// React Hooks
import { useRef, useState } from 'react';

// React Progress Bar
import { Line, Circle } from 'rc-progress';






const CardCommentsContent = (props) => {


    const [swiper, setSwiper] = useState(null)
    const swiperNext = useRef(null)
    const swiperPrev = useRef(null)

    return (
        <div className="card-comments-content">
            <div className="content-header">
                <h1>Comments</h1>

                <small>{props.card.comments.content.votes} Peoples Commented</small>
            </div>
            <div className="content-body">
                <Swiper
                    onSwiper={setSwiper}
                    slidesPerView={Math.round(window.innerWidth / 365)}
                    spaceBetween={28}
                    pagination={{ clickable: true, }}
                    loop={false}
                    modules={[Pagination, Navigation]}
                    className="swiper">
                    {
                        props.card.comments.content.comments.map((comment, index) => {
                            return (
                                <SwiperSlide className="item" key={index} >
                                    <div className="item-header">

                                        <div className="header-left">
                                            <img src={comment.commentHeader.image} alt="" />
                                        </div>
                                        <div className="header-right">
                                            <div className="item-author">
                                                {comment.commentHeader.author}
                                            </div>
                                            <div className="item-date">
                                                {comment.commentHeader.type}<span>{comment.commentHeader.date} ago</span>
                                            </div>
                                            <div className="item-rating">
                                                Rated : {comment.commentHeader.rating} / 10
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <div className="content">
                                            <p>{comment.commentBody.content}</p>
                                        </div>
                                        <div className="like">
                                            <div className="like-header">
                                                <span>{comment.commentHeader.rating * 10}% Liked</span>
                                                <Icon icon="ei:like" />

                                            </div>
                                            <div className="like-body">
                                                <Line
                                                    className='line'
                                                    percent={comment.commentHeader.rating * 10}
                                                    strokeWidth={3}
                                                    strokeColor={`hsl(${comment.commentHeader.rating * 10},70%,50%)`}
                                                    trailColor='transparent'
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }


                    <div className="navigation-prev" >
                        <Icon icon="ic:round-navigate-next" rotate={2} onClick={
                            () => {
                                swiper.slidePrev()
                            }
                        } />
                    </div>
                    <div className="navigation-next">
                        <Icon icon="ic:round-navigate-next" onClick={
                            () => {
                                swiper.slideNext()
                            }
                        } />
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default CardCommentsContent
