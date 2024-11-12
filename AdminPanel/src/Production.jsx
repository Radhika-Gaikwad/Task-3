import React from 'react';
import { SemiCircleProgress } from 'react-semicircle-progressbar'; // Correct import statement
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Production = () => {
  return (
    <div style={styles.container}>
      {/* First Container */}
      <div style={styles.containerLeft}>
        <h2 style={styles.heading}>Production (Overall)</h2>

        {/* SVG replacing the SemiCircleProgress Component */}
        <div style={styles.progressContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="245" height="128" viewBox="0 0 245 128" fill="none">
            <mask id="path-1-inside-1_102_17964" fill="white">
              <path d="M4.73691 125.919C2.13835 125.979 -0.0254685 123.919 0.015233 121.32C0.294616 103.48 4.41132 85.8992 12.0975 69.8246C20.459 52.3376 32.8026 37.1398 48.0995 25.4977C63.3963 13.8556 81.2033 6.10664 100.036 2.89651C117.34 -0.0529379 135.049 0.9078 151.916 5.68684C154.396 6.38964 155.744 9.023 154.971 11.4822L152.323 19.8988C151.538 22.3957 148.868 23.7598 146.344 23.0663C132.232 19.1886 117.447 18.4444 102.995 20.9078C86.98 23.6376 71.8375 30.2271 58.8296 40.1271C45.8216 50.0271 35.325 62.9509 28.2147 77.8213C21.7786 91.2814 18.2857 105.984 17.9535 120.915C17.8957 123.51 15.8505 125.663 13.255 125.722L4.73691 125.919Z"/>
            </mask>
            <path d="M4.73691 125.919C2.13835 125.979 -0.0254685 123.919 0.015233 121.32C0.294616 103.48 4.41132 85.8992 12.0975 69.8246C20.459 52.3376 32.8026 37.1398 48.0995 25.4977C63.3963 13.8556 81.2033 6.10664 100.036 2.89651C117.34 -0.0529379 135.049 0.9078 151.916 5.68684C154.396 6.38964 155.744 9.023 154.971 11.4822L152.323 19.8988C151.538 22.3957 148.868 23.7598 146.344 23.0663C132.232 19.1886 117.447 18.4444 102.995 20.9078C86.98 23.6376 71.8375 30.2271 58.8296 40.1271C45.8216 50.0271 35.325 62.9509 28.2147 77.8213C21.7786 91.2814 18.2857 105.984 17.9535 120.915C17.8957 123.51 15.8505 125.663 13.255 125.722L4.73691 125.919Z" stroke="#C25F01" strokeWidth="35.2768" strokeLinecap="round" strokeLinejoin="round" mask="url(#path-1-inside-1_102_17964)"/>
            <mask id="path-2-inside-2_102_17964" fill="white">
              <path d="M154.6 10.5592C155.27 8.03161 157.876 6.52635 160.368 7.32018C183.955 14.8359 204.724 29.6146 219.781 49.6775C234.862 69.7735 243.418 94.1137 244.327 119.315C244.42 121.911 242.301 124.015 239.703 124.01L231.183 123.994C228.586 123.989 226.495 121.878 226.384 119.283C225.479 98.1032 218.223 77.6705 205.539 60.7683C192.861 43.8758 175.421 31.3886 155.608 24.94C153.154 24.1413 151.678 21.5908 152.338 19.0963L154.6 10.5592Z"/>
            </mask>
            <path d="M154.6 10.5592C155.27 8.03161 157.876 6.52635 160.368 7.32018C183.955 14.8359 204.724 29.6146 219.781 49.6775C234.862 69.7735 243.418 94.1137 244.327 119.315C244.42 121.911 242.301 124.015 239.703 124.01L231.183 123.994C228.586 123.989 226.495 121.878 226.384 119.283C225.479 98.1032 218.223 77.6705 205.539 60.7683C192.861 43.8758 175.421 31.3886 155.608 24.94C153.154 24.1413 151.678 21.5908 152.338 19.0963L154.6 10.5592Z" stroke="#FCC590" strokeWidth="35.2768" strokeLinecap="round" strokeLinejoin="round" mask="url(#path-2-inside-2_102_17964)"/>
            <g filter="url(#filter0_d_102_17964)">
              <circle cx="151.927" cy="15.5055" r="15.5055" fill="#C25F01"/>
              <circle cx="151.927" cy="15.5055" r="14.0356" stroke="white" strokeWidth="2.93974"/>
            </g>
            <defs>
              <filter id="filter0_d_102_17964" x="131.718" y="0" width="40.4179" height="40.4189" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4.70358"/>
                <feGaussianBlur stdDeviation="2.35179"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_17964"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_17964" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
        <div style={styles.rightDotContainer}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <circle cx="10" cy="10.5" r="10" fill="#FCC590"/>
    </svg>
    <div style={styles.Data}>
    <div style={styles.progressTextBold}>46%</div>
   
   <div style={styles.monthText}>This month</div>
    </div>
    
  </div>
  

  {/* Left Dot Container */}
  <div style={styles.leftDotContainer}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <circle cx="10" cy="10.5" r="10" fill="#C25F01"/>
    </svg>
    <div style={styles.Data}>
    <div style={styles.progressTextBold}>35%</div>
    <div style={styles.monthText}>October</div>
    </div>
    
  </div>
  
        

      </div>
{/* Second Container */}
      <div style={styles.containerRight}>
        <h3 style={styles.tableHeading}>Complex Table</h3>

        {/* Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>NAME</th>
              <th style={styles.tableHeader}>STATUS</th>
              <th style={styles.tableHeader}>DATE</th>
              <th style={styles.tableHeader}>PROGRESS Bar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td style={styles.tableData}>{row.name}</td>
                <td style={styles.tableData}>
                  {row.status === 'Assigned' ? (
                    <FaCheckCircle style={styles.iconAssigned} />
                  ) : (
                    <FaExclamationCircle style={styles.iconPending} />
                  )}
                  {row.status}
                </td>
                <td style={styles.tableData}>{row.date}</td>
                <td style={styles.tableData}>
                  <div style={{ ...styles.progressBar, width: `${row.progress}%` }}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Data
const data = [
  { name: 'Design Website', status: 'Assigned', date: '18-Apr-12', progress: 60 },
  { name: 'Website Development', status: 'Assigned', date: '18-Apr-12', progress: 20 },
  { name: 'Website Testing', status: 'Pending', date: '20-May-21', progress: 90 },
  { name: 'Website Marketing', status: 'Assigned', date: '12-Jul-21', progress: 40 },
];

// Styles for the components
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    height: '400px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    containerLeft: {
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', // Ensures content is centered vertically
      gap:0,
      margin:0,
         // Centers items horizontally inside the container
      border: '3px solid #D3D3D3', // Faint grey border
      borderRadius: '15px',      // Border radius for rounded corners
      backgroundColor: '#F8F8F8', // Light grey background
      flex: 1,                   // Ensures it stretches to available space
      height: '400px',           // Fixed height for container
      width: '100%',             // Full width
      maxWidth: '400px',         // Maximum width for the container
              // Padding inside the container
                  // Space between items
    },
  
    // Align right container
    rightDotContainer: {
      alignSelf: 'flex-end',      // Align the right container to the right side
      display: 'flex',            // Keep the elements in the right container in a row
      alignItems: 'center',  
           // Vertically center content in the right container
            
    },
  
    // Align left container
    leftDotContainer: {
      alignSelf: 'flex-start',    // Align the left container to the left side
      display: 'flex',            // Keep the elements in the left container in a row
      alignItems: 'center',  
           // Vertically center content in the left container
    },
  
  
  
  
  heading: {
    fontFamily: 'Lato',
    fontSize: '25px',
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: '0px',
    color: '#636364',
    textAlign: 'left',
     

  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // To position the text elements inside
  },

 
  progressTextBold: {
    marginLeft: '10px',
    fontWeight: 'bold', // Make percentage bold
    fontSize: '18px',
    color: 'black',
    
  },
 
  containerRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    border: '3px solid #D3D3D3', // Faint grey border
    borderRadius: '15px', // Border radius added here
    backgroundColor: '#F8F8F8', // Faint grey background
    padding: '10px',
    flex: 2,
    height: '380px',
    overflowY: 'auto', // Allows scrolling if the table is too large
    width: '100%', // Make sure the container is responsive
  },
  tableHeading: {
    color: '#2B3674',
    fontWeight: 'bold',
    marginBottom: '15px', 
    fontSize: '24px'

  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    height: '100%', // Increase height
    border: 'none', // Hide all lines in the table
  },
  tableHeader: {
    textAlign: 'left',
    padding: '8px',
    backgroundColor: '#f1f1f1',
    fontSize: '18px',
    fontWeight: '500'
    
  },
  tableData: {
    padding: '8px',
    fontSize: '18px',
    fontWeight: 'bold'
    // borderBottom: '1px solid #ddd', // Remove border from data cells
  },
  iconAssigned: {
    color: '#01C2B5',
    marginRight: '5px',
  },
  iconPending: {
    color: '#FFCE20',
    marginRight: '5px',
  },
  progressBar: {
    height: '10px',
    backgroundColor: '#01C2B5',
    borderRadius: '5px',
  },
};

export default Production;
