import React from 'react';

const ProgressBar = () => {
  const value = 46; // Set the percentage value manually here

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        width: '200px', // Width of the progress circle
        height: '100px', // Height of the progress circle (half the width for a semicircle)
        backgroundColor: '#f3f3f3', // Light background color for the hollow part
        borderRadius: '200px 200px 0 0', // Create the rounded top semicircle effect
        position: 'relative',
        overflow: 'hidden', // Hide the part that goes outside the semicircle
        border: '2px solid #ccc', // Optional: border to show the boundary of the semicircle
      }}
    >
      {/* The hollow semicircle */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, // Position it at the bottom of the semicircle
          left: 0,
          width: '100%',
          height: '100%', // Fill the full height of the semicircle
          backgroundColor: '#fff', // Hollow (white) area inside the semicircle
          borderRadius: '200px 200px 0 0', // Same as outer container to match the shape
          border: '2px solid #ccc', // Border to make it stand out
        }}
      ></div>
      {/* Progress fill */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: `${value}%`, // Height based on percentage (progress)
          backgroundColor: '#3E1F1B', // Dark Chocolate color for the progress
          borderRadius: '200px 200px 0 0', // Ensure the progress bar is in a semicircle shape
        }}
      ></div>
      {/* Display the percentage in the center */}
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#3E1F1B', // Dark Chocolate color for the percentage text
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        {value}%
      </span>
    </div>
  );
};

export default ProgressBar;
