import React from 'react';
import { FaChartBar, FaCalendarAlt } from 'react-icons/fa';

import { MdBarChart } from 'react-icons/md';

const TwoWaveChart = () => {
  return (
    <div style={{
      padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px',
      width: '1037px', height: '400px', margin: 'auto', position: 'relative', 
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
    }}>
      {/* Calendar Icon on the Top Left */}
      <div style={{
        position: 'absolute', top: '10px', left: '10px', display: 'flex', 
        alignItems: 'center', color: 'black', backgroundColor: '#A3AED0', 
        padding: '5px 9px', borderRadius: '4px'
      }}>
        <FaCalendarAlt size={17} />
        <span style={{ marginLeft: '5px', fontSize: '17px' }}>This Month</span>
      </div>

      {/* Bar Graph Icon on the Top Right */}
      <div style={{
        position: 'absolute', top: '10px', right: '10px', color: '#01C2B5', fontSize: '22px'
      }}>
        < MdBarChart size={35} />
      </div>

      {/* Heading and onTrack */}
      <div style={{
        position: 'absolute', top: '50px', left: '10px', color: 'navy', 
        fontWeight: 'bold', fontSize: '22px'
      }}>
        3 Projects
      </div>
      
      {/* onTrack Word */}
      <div style={{
        position: 'absolute', top: '90px', left: '10px', display: 'flex', 
        alignItems: 'center', color: 'darkgreen', fontSize: '17px'
      }}>
        <div style={{
          width: '10px', height: '10px', backgroundColor: 'darkgreen', 
          borderRadius: '50%', marginRight: '5px'
        }}></div>
        <span>On Track</span>
      </div>
      
      {/* Centered Wave SVG Section with Green and Blue Waves */}
      <div style={{
        position: 'absolute', top: '120px', left: '50%', transform: 'translateX(-50%)', 
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        {/* Green SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="727" height="115" viewBox="0 0 727 115" fill="none" style={{ marginBottom: '-20px' }}>
          <g filter="url(#filter0_d_110_17783)">
            <path d="M23.6152 48.2823C45.6353 43.9727 97.1716 36.6463 127.156 41.8179C164.637 48.2823 176.35 73.1452 205.866 65.6863C235.383 58.2274 299.569 5.51769 344.078 26.9C388.586 48.2823 403.11 104.473 458.394 65.6863C513.679 26.9 508.994 6.51232 554.908 10.4904C600.822 14.4685 676.253 27.8945 703.426 10.4904" stroke="#01C2B5" strokeWidth="4" strokeLinecap="round"/>
          </g>
          <defs>
            <filter id="filter0_d_110_17783" x="0.615234" y="0" width="725.812" height="115" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="13"/>
              <feGaussianBlur stdDeviation="10.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.0941176 0 0 0 0 1 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_17783"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_110_17783" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Blue SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="727" height="115" viewBox="0 0 727 115" fill="none" style={{ marginBottom: '0' }}>
          <g filter="url(#filter0_d_110_17783)">
            <path d="M23.6152 48.2823C45.6353 43.9727 97.1716 36.6463 127.156 41.8179C164.637 48.2823 176.35 73.1452 205.866 65.6863C235.383 58.2274 299.569 5.51769 344.078 26.9C388.586 48.2823 403.11 104.473 458.394 65.6863C513.679 26.9 508.994 6.51232 554.908 10.4904C600.822 14.4685 676.253 27.8945 703.426 10.4904" stroke="#4C78A8" strokeWidth="4" strokeLinecap="round"/>
          </g>
        </svg>

        {/* Green Text Box on the First SVG Wave */}
        {/* Green Text Box on the First SVG Wave */}
        <div style={{
          position: 'absolute', left: '46%', top: '-10%', color: 'white', 
          backgroundColor: '#01C2B5', padding: '8px 16px', borderRadius: '8px', 
          fontSize: '14px', border: '2px solid lightgrey', transform: 'translateX(-50%)'
        }}>
          On Going
        </div>

      </div>

      {/* Grey Line for Months */}
      <div style={{
        position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)',
        width: '727px', height: '0px', backgroundColor: '#A3AED0'
      }}></div>

      {/* Bottom Months Section Below the Wave */}
      <div style={{
        position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', 
        width: '727px', display: 'flex', justifyContent: 'space-between', fontSize: '14px', 
        color: '#A3AED0'
      }}>
        <span>SEP</span>
        <span>OCT</span>
        <span>NOV</span>
        <span>DEC</span>
        <span>JAN</span>
        <span>FEB</span>
      </div>
    </div>
  );
};

export default TwoWaveChart;
