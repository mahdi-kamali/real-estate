
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


const CardTheme = (props) => {

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

    return (
        <div className="card-theme">
            <div className="card-theme-header">
                { }
            </div>
            <div className="card-theme-body">
                <div className="card-color-chart">
                    <div className="card-color-chart-body">
                        <Doughnut data={props.card.colorPalette.data}
                            options={circleChartOptions} />
                    </div>
                </div>
                <div className="card-color-boxs">
                    <div className="color-box-container primary">
                        <div className="color-box-container-header">
                            <h1>Primary Colors</h1>
                        </div>
                        <div className="color-box-container-body">
                            {props.card.colorPalette.colors.primary.map(
                                (color, index) => {
                                    return <div className="color-box" key={index}>
                                        <div className="color-box-body" style={
                                            { backgroundColor: color }
                                        }>
                                        </div>
                                        <div className="color-box-header">
                                            {color}
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="color-box-container secondary">
                        <div className="color-box-container-header">
                            <h1>Secondary Colors</h1>
                        </div>
                        <div className="color-box-container-body">
                            {
                                props.card.colorPalette.colors.secoondary.map((color, index) => {
                                    return <div className="color-box" key={index}>
                                        <div className="color-box-body" style={
                                            { backgroundColor: color }
                                        }>
                                        </div>
                                        <div className="color-box-header">
                                            {color}
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="card-color-theme">
                    <div className="card-color-theme-header">
                        <Icon icon="codicon:symbol-color" />
                        <h1>Colors Info</h1>
                    </div>
                    <div className="card-color-theme-body">
                        <p>
                            {props.card.colorPalette.colorDescription}

                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardTheme
