import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklyProduction = () => {
  // Set initial selector state
  const [period, setPeriod] = useState("Weekly");

  // Data for the Bar chart
  const data = {
    labels: ['Des', 'Dev', 'AI ML', 'Mar', 'Adm', 'HR', 'Soo', 'Sun', 'Sun', 'Sun', 'Sun'],
    datasets: [
      {
        label: 'Weekly Production',
        data: [6, 1, 2, 1, 6, 2, 5, 1, 4, 5, 3], // Units corresponding to each label
        backgroundColor: [
          '#01C2B5',    // Des
          '#C7F1EF',   // Dev
          '#01C2B5',    // AI ML
          '#C7F1EF',   // Mar
          '#01C2B5',    // Adm
          '#C7F1EF',   // HR
          '#01C2B5',    // Soo
          '#C7F1EF',   // Sun (first)
          '#01C2B5',    // Sun (second)
          '#01C2B5',    // Sun (third)
          '#01C2B5',    // Sun (fourth)
        ],
        borderColor: 'rgba(0, 0, 0, 0.1)', // Border color
        borderWidth: 1,
        borderRadius: 5, // Add border radius to the bars
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        ticks: {
          display: true, // Show x-axis labels
          color: 'grey', // Set label color to grey
          font: {
            size: 12, // Set font size for labels
          },
        },
        grid: {
          display: false, // Hide grid lines
        },
        // Adjust the bar width (lower values increase the space between bars)
        barPercentage: 0.5, // Increase the gap between bars
        categoryPercentage: 1.5, // Increase space between categories (higher value reduces the space between groups)
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false, // Hide y-axis ticks
        },
        grid: {
          display: false, // Hide grid lines
        },
      },
    },
  };

  // Handle selector box change
  const handleSelectorChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Weekly Production</h2>
        <select value={period} onChange={handleSelectorChange} style={styles.selector}>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div style={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// Styling for the container
const styles = {
  container: {
    width: '90%', // Increased the width of the container
    margin: '0 auto', // Center the entire container
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px', // Reduced bottom margin for header
  },
  selector: {
    padding: '5px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  chartContainer: {
    position: 'relative',
    height: '300px', // Adjust the height of the chart
    display: 'flex',
    justifyContent: 'center', // Center the graph horizontally
  },
};

export default WeeklyProduction;
