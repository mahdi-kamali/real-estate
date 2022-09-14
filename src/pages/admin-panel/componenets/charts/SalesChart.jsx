import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',

        },
        legend: {
            display: true,
            position: "bottom"
        }
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            grid: {
                // color: "rgba(0,0,0,0.0)"
            }
        },
        y: {
            stacked: true,
            grid: {
                color: "rgba(0,0,0,0)"
            }
        },


    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , "Month" , "Month"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [20000, 25090, 30900, 50000, 15000, 30000, 20500 ,  11000 , 33000],
            backgroundColor: '#60a5fa',
        },
        {
            label: 'Dataset 2',
            data: [3000, 10000, 2000, 3000 , 2050, 5050, 7002 , 2000 , 4000],
            backgroundColor: '#9FDBFF',
        },
        {
            label: 'Dataset 3',
            data: [2000, 4000, 2000, 5000, 2500, 3500, 1020 , 4000,2000],
            backgroundColor: '#FB9D40',
        },
    ],
};

function SalesChart() {
    return <Bar className='chart' options={options} data={data} />;
}
export default SalesChart

