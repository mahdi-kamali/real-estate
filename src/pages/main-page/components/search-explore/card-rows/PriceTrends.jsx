
// React Iconify
import { Icon } from "@iconify/react";

// Rc Progress Bar
import { Line, Circle } from 'rc-progress';


// React Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// React Chart js2
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line as ChartLine, Bar } from 'react-chartjs-2';

import { useState, useRef } from "react";






const PriceTrends = (props) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom"
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    callback: function (value, index, ticks) {
                        return '$' + value;
                    }
                }
            },
        },
    };
    const [swiper, setSwiper] = useState(null)


    return (
        <div className="card-price-trends-assessment">
            <div className="price-trends-assessment-header">
                <h1>
                    Price Trends & Assessment
                </h1>
            </div>
            <div className="price-trends-assessment-body">
                <div className="left">
                    <div className="price-trends">
                        <div className="price-trends-header">
                            <h1>Price Trends</h1>
                        </div>
                        <div className="price-trends-body">
                            <div className="column">
                                <div className="column-header">
                                    <Icon icon="fa6-solid:handshake-simple" />
                                    By Typical
                                </div>
                                <div className="column-body">
                                    <div className="typical">
                                        <span>${props.card.trendsAndAssessment.trends.byValue.typical}</span> <small>Typical Value</small>
                                    </div>
                                    <div className="this-property">
                                        <span>${props.card.trendsAndAssessment.trends.byValue.actual}</span>
                                        <small>This Property</small>

                                    </div>
                                    <div className="percent">
                                        <span>
                                            %{props.card.trendsAndAssessment.trends.byValue.percent.value}
                                        </span>
                                        <small>
                                            {props.card.trendsAndAssessment.trends.byValue.percent.text}
                                            <Icon className={props.card.trendsAndAssessment.trends.byValue.percent.text} icon="fluent:keyboard-shift-uppercase-16-filled" />
                                        </small>
                                    </div>
                                    <div className="progress">
                                        <Line
                                            className='line'
                                            percent={props.card.trendsAndAssessment.trends.byValue.percent.value}
                                            strokeWidth={3.5}
                                            strokeColor={`hsl(${props.card.trendsAndAssessment.trends.byValue.percent.value},70%,50%)`}
                                            trailColor='transparent'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="column-header">
                                    <Icon icon="bx:area" />
                                    By Sqft
                                </div>
                                <div className="column-body">
                                    <div className="typical">
                                        <span>${props.card.trendsAndAssessment.trends.bySqft.typical}</span> <small> Per Sqft</small>
                                    </div>
                                    <div className="this-property">
                                        <span>${props.card.trendsAndAssessment.trends.bySqft.actual}</span>
                                        <small>This Property</small>
                                    </div>
                                    <div className="percent">
                                        <span>
                                            %{props.card.trendsAndAssessment.trends.bySqft.percent.value}
                                        </span>
                                        <small>
                                            {props.card.trendsAndAssessment.trends.bySqft.percent.text}
                                            <Icon className={props.card.trendsAndAssessment.trends.bySqft.percent.text} icon="fluent:keyboard-shift-uppercase-16-filled" />

                                        </small>
                                    </div>
                                    <div className="progress">
                                        <Line
                                            className='line'
                                            percent={props.card.trendsAndAssessment.trends.bySqft.percent.value}
                                            strokeWidth={3.5}
                                            strokeColor={`hsl(${props.card.trendsAndAssessment.trends.bySqft.percent.value},70%,50%)`}
                                            trailColor='transparent'
                                        />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price-defference">
                        <div className="bottom-header">
                            <h1>Price Difference</h1>
                            <small>{props.card.trendsAndAssessment.priceDifference.headerText}</small>
                        </div>
                        <div className="bottom-body">
                            <ChartLine className="chart" options={options} data={props.card.trendsAndAssessment.priceDifference.chartData} />
                        </div>
                    </div>
                </div>
                <div className="right">

                    <div className="assessment">
                        <div className="assessment-header">
                            <h1>Assessment</h1>
                        </div>
                        <div className="assessment-body">
                            <div className="row">
                                <div className="row-header">Year</div>
                                <div className="row-body">{props.card.trendsAndAssessment.assessments.year}</div>
                            </div>
                            <div className="row">
                                <div className="row-header">Tax</div>
                                <div className="row-body">{props.card.trendsAndAssessment.assessments.tax}</div>
                            </div>
                            <div className="row">
                                <div className="row-header">Assassment</div>
                                <div className="row-body">{props.card.trendsAndAssessment.assessments.assessment}</div>
                            </div>
                            <div className="row">
                                {props.card.trendsAndAssessment.assessments.description}
                            </div>
                        </div>
                    </div>
                    <div className="price-history">
                        <div className="price-history-header">
                            <h1>Price History</h1>
                        </div>
                        <div className="price-history-body">
                            <Swiper
                                onSwiper={setSwiper}
                                slidesPerView={
                                    window.innerWidth > 1300 ? window.innerWidth / 900 : 1
                                }
                                slidesPerGroup={window.innerWidth > 1300 ? window.innerWidth / 900 : 1}
                                spaceBetween={16}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Navigation]}
                                className="swiper">
                                {
                                    props.card.trendsAndAssessment.priceHistory.items.map(
                                        (item, index) => {
                                            return (
                                                <SwiperSlide className="item" key={index}>
                                                    <div className="item-header">
                                                        {item.event}
                                                    </div>
                                                    <div className="item-body">
                                                        <div className="row">
                                                            <div className="row-key">
                                                                Date
                                                            </div>
                                                            <div className="row-value">
                                                                {item.date}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="row-key">
                                                                Price
                                                            </div>
                                                            <div className="row-value">
                                                                $<span>{item.price}</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="row-key">
                                                                Source
                                                            </div>
                                                            <div className="row-value">
                                                                {item.source}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="row-key">
                                                                Event
                                                            </div>
                                                            <div className="row-value">
                                                                {item.event}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        }
                                    )
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

                </div>
            </div>
        </div>
    )
}

export default PriceTrends
