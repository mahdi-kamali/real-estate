import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';





function faker(count, min, max) {
    let temp = [];


    for (let i = 0; i < count; i++) {
        const randomInt = Math.floor(( Math.random() * max ) + min) ;
        temp.push(randomInt)
    }


    return temp

}



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',

        },
        legend: {
            display: false,
            position: "bottom"
        }
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            grid: {
                color: "rgba(0,0,0,0.0)"
            }
        },
        y: {
            stacked: true,
            grid: {
                color: 'rgba(0,0,0,0.06)'
            },
            ticks: {
                min: 0,
                max: 1000,
                stepSize: 10 // <----- This prop sets the stepSize
            }
        },


    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 2',
            fill: true,
            data: faker(labels.length,0,100),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.2)',
        },
    ],
};



const WeeklyArranges = () => {
    return <Line className='weekly-arranges-chart' options={options} data={data} />;
}

export default WeeklyArranges
