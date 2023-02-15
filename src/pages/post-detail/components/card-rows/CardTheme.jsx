
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

//  React Iconify
import { Icon, InlineIcon } from '@iconify/react';
import { POST_COLOR_TYPE_PRIMARY, POST_COLOR_TYPE_SECONDARY } from 'src/consts/post/post';


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


Chart.defaults.borderColor = 'rgba(0,0,0,0.1)'
Chart.defaults.font.size = 16


const CardTheme = ({ post }) => {


    const circleChartOptions = {
        indexAxis: 'x',
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },

        },


    };


    const data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: []
        }]
    }


    post.attributes.colors.map((color, index) => {
        data.labels.push(color.name)
        data.datasets[0].data.push(color.percentage)
        data.datasets[0].backgroundColor.push(color.color)
    })


    return (
        <div className="card-theme">
            <div className="card-theme-header">
                { }
            </div>
            <div className="card-theme-body">
                <div className="card-color-chart">
                    <div className="card-color-chart-body">
                        <Doughnut
                            data={data}
                            options={circleChartOptions}

                        />
                    </div>
                </div>
                <div className="card-color-boxs">
                    <div className="color-box-container primary">
                        <div className="color-box-container-header">
                            <h1>Primary Colors</h1>
                        </div>
                        <div className="color-box-container-body">
                            {post.attributes.colors.map(
                                (color, index) => {
                                    if (color.type === POST_COLOR_TYPE_PRIMARY) {
                                        return <div className="color-box" key={index}>
                                            <div className="color-box-body" style={
                                                { backgroundColor: color.color }
                                            }>
                                            </div>
                                            <div className="color-box-header">
                                                {color.name}
                                            </div>
                                        </div>
                                    }

                                })
                            }
                        </div>
                    </div>
                    <div className="color-box-container secondary">
                        <div className="color-box-container-header">
                            <h1>Secondary Colors</h1>
                        </div>
                        <div className="color-box-container-body">
                            {post.attributes.colors.map(
                                (color, index) => {
                                    if (color.type === POST_COLOR_TYPE_SECONDARY) {
                                        return <div className="color-box" key={index}>
                                            <div className="color-box-body" style={
                                                { backgroundColor: color.color }
                                            }>
                                            </div>
                                            <div className="color-box-header">
                                                {color.name}
                                            </div>
                                        </div>
                                    }

                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CardTheme
