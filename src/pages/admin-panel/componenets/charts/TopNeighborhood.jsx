
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



function faker(count, min, max) {
    let temp = [];


    for (let i = 0; i < count; i++) {
        const randomInt = Math.floor((Math.random() * max) + min);
        temp.push(randomInt)
    }


    return temp

}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
    scales: {
        y: {
            grid: {
                color: 'rgba(0,0,0,0)'
            }
        },
        x: {
            grid: {
                color: 'rgba(0,0,0,0)'
            }
        }
    }
};



const labels = [
    'United States',
    'United Kigndom',
    'Germany',
    "test",
    'Turkish',];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: faker(labels.length, 0, 100),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
};




const TopNeighborhood = () => {
    return <Bar className='bar' data={data} options={options} />;
}

export default TopNeighborhood
