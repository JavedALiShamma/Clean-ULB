import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyColumnChart = () => {
  // Data for the chart
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Percentage',
        data: [20, 40, 60, 80, 100, 80, 60], // Example percentages
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Percentage',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Percentage (%)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Days of the Week',
        },
      },
    },
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center my-4">Weekly Percentage Column Chart</h2>
          <div className="chart-container" style={{ position: 'relative', height: '40vh', width: '80vw' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyColumnChart;