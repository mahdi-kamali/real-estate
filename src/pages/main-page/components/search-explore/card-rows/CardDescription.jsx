
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
import { BASE_SERVER_ULR } from 'src/consts/API/API_CONSTS';

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
    for (let starIndex = 0; starIndex < starsCount; starIndex++) {
        starsList.push(<Icon key={starIndex} icon="emojione:star" />
        )
    }

    return starsList

}

const CardDescription = ({ post }) => {


    console.log(post.attributes.properties)


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
                        <span>{post.attributes.rating}</span> Star </div>
                    <div className="star-body">
                        {
                            getStars(post.attributes.rating)
                        }
                    </div>
                </div>
                <div className="card-category">
                    {post.attributes.tags.map((tag, index) => {
                        return (
                            <>
                                <span key={index}>#{tag.title}</span>
                            </>
                        )
                    })}
                </div>
                <div className="card-charts">
                    <div className="chart-header">
                        Property chart
                        <Icon icon="carbon:chart-line" />
                    </div>
                    <div className="chart-body">
                        {/* {<Bar data={props.card.rating.data} options={barChartOption} />} */}
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="card-agent">

                    <div className="card-agent-header">

                        <div className="agent-image">
                            {/* <img src={props.card.agent.info.image} alt={props.card.agent.info.imageAlt} /> */}
                        </div>
                    </div>
                    <div className="card-agent-body">
                        <div className="agent-name">
                            {/* <span>{props.card.agent.info.name}</span> */}
                            <h1>Advisor</h1>
                        </div>
                        <div className="agent-comment">
                            {/* {props.card.agent.comment} */}
                        </div>
                    </div>


                </div>
                <div className="card-facilities">
                    <div className="card-facilities-header">
                        <h1>facilities</h1>
                    </div>
                    <div className="card-facilities-body">
                        {
                            post.attributes.properties.map((item, index) => {
                                console.log(item)
                                return <div className="item">
                                    <Icon className='icon' icon={item.svg} />
                                    <span>{item.name} {item.value}</span>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardDescription
