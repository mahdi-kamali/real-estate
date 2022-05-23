
//  React Iconify
import { Icon, InlineIcon } from '@iconify/react';
// React Chart.js 2
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    ArcElement,
    Tooltip,
    Legend,
    Chart,
    PointElement,
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
Chart.defaults.borderColor = 'rgba(0,0,0,0.0)'
Chart.defaults.font.size = 16

function getStars(starsCount) {
    let starsList = []
    for (let starIndex = 1; starIndex < starsCount; starIndex++) {
        starsList.push(<Icon key={starIndex} icon="emojione:star" />
        )
    }

    return starsList

}

const CardDescription = (props) => {

    const barChartOption = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        layout: {
            padding: 0
        },
        scales: {
            x: {
                display: false
            },
            y: {

            }
        },


        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },

        },
    };

    return (
        <div className="card-description">
            <div className="left">
                <div className="card-star">
                    <div className="star-header">
                        <span>{props.card.rating.rate}</span> Star </div>
                    <div className="star-body">

                        {

                            getStars(
                                props.card.rating.rate
                            )
                        }

                        <Icon icon="emojione:star" />
                    </div>
                </div>
                <div className="card-category">
                    {props.card.inCategories.map((category, index) => {
                        return <span key={index}>{category}</span>
                    })}
                </div>
                <div className="card-charts">
                    <div className="chart-header">
                        Property chart
                        <Icon icon="carbon:chart-line" />
                    </div>
                    <div className="chart-body">
                        {<Bar data={props.card.rating.data} options={barChartOption} />}
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="card-agent">

                    <div className="card-agent-header">

                        <div className="agent-image">
                            <img src={props.card.agent.info.image} alt={props.card.agent.info.imageAlt} />
                        </div>
                    </div>
                    <div className="card-agent-body">
                        <div className="agent-name">
                            <span>{props.card.agent.info.name}</span>
                            <h1>Advisor</h1>
                        </div>
                        <div className="agent-comment">
                            {props.card.agent.comment}
                        </div>
                    </div>


                </div>
                <div className="card-facilities">

                    <div className="card-facilities-header">
                        <h1>facilities</h1>
                    </div>
                    <div className="card-facilities-body">
                        <div className="item">
                            <Icon icon="fluent:bed-16-regular" />
                            <span>{props.card.facilities.beds} beds</span>
                        </div>
                        <div className="item">
                            <Icon icon="cil:bathroom" />
                            <span>{props.card.facilities.baths} Baths</span>
                        </div>
                        <div className="item">
                            <Icon icon="uil:parking-square" />
                            <span>{props.card.facilities.parking} parking</span>
                        </div>
                        <div className="item">
                            <Icon icon="bx:area" />
                            <span>{props.card.facilities.sqft} sqft</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CardDescription
