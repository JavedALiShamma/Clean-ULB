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
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, '#A6B1EA');
          gradient.addColorStop(1, 'rgba(75, 192, 192, 0.2)');
          return gradient;
        },
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 10, // Rounded corners for bars
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)', // Color on hover
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        hoverBorderWidth: 3,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to adjust height dynamically
    animation: {
      duration: 1000, // Smooth animation
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      title: {
        display: true,
        text: 'Weekly Percentage',
        font: {
          size: window.innerWidth < 768 ? 16 : 20, // Responsive font size
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        cornerRadius: 5,
        displayColors: false, // Hide color box in tooltip
        callbacks: {
          label: (context) => {
            return `Percentage: ${context.raw}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        title: {
          display: true,
          text: 'Percentage (%)',
          font: {
            size: window.innerWidth < 768 ? 12 : 14, // Responsive font size
            weight: 'bold',
          },
        },
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12, // Responsive font size
          },
        },
      },
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        title: {
          display: true,
          text: 'Days of the Week',
          font: {
            size: window.innerWidth < 768 ? 12 : 14, // Responsive font size
            weight: 'bold',
          },
        },
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12, // Responsive font size
          },
        },
      },
    },
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h2 className="text-center mb-4" style={{ fontSize: window.innerWidth < 768 ? '1.25rem' : '1.5rem', fontWeight: 'bold' }}>
                Weekly Percentage Column Chart
              </h2>
              <div className="chart-container" style={{ position: 'relative', height: window.innerWidth < 768 ? '250px' : '400px' }}>
                <Bar data={data} options={options} />
              </div>
              {/* Custom Legend */}
              <div className="text-center mt-3">
                <div className="d-inline-block p-2 rounded" style={{ backgroundColor: 'rgba(75, 192, 192, 0.2)', border: '1px solid rgba(75, 192, 192, 1)' }}>
                  <span style={{ color: 'rgba(75, 192, 192, 1)', fontWeight: 'bold' }}>Total Cleanliness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyColumnChart;