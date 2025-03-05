// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', "Thursday",'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Area Cleaned',
        data: [65, 59, 92,35,58,100],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },{
        label: 'Toilets Cleaned',
        data: [61, 19, 80,88,54,80],
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',

      },{
        label:"Bins Cleaned",
        data:[75,78,90,72,45,90],
        fill:false,
        backgroundColor:"red",
        borderColor:"red"
      }
    ],
  

  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Per Day report',
      },
    },
  };

  return (
    <div className="container">
      <h2>ULB Week Reports</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;