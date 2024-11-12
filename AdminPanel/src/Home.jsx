import React from 'react';
import { MdBarChart } from 'react-icons/md';
import WeeklyProduction from './WeeklyProduction';
import Production from './Production';
import TwoWaveChart from './TwoWaveChart';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        {/* First Container with 4 inner containers */}
        <div className="sub-container sub1">
          <div className="main-cards">
            {/* Card for Design Team */}
            <div className="card">
              <div className="card-inner">
                <div className="icon-circle" style={{ backgroundColor: 'rgba(255, 165, 0, 0.2)' }}> {/* Faint orange background */}
                  <MdBarChart size={40} color="orange" />
                </div>
                <div>
                  <h3>Design Team</h3>
                  <h1 className="number">35</h1>
                </div>
              </div>
            </div>

            {/* Card for Development */}
            <div className="card">
              <div className="card-inner">
                <div className="icon-circle" style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)' }}> {/* Faint blue background */}
                  <MdBarChart size={40} color="blue" />
                </div>
                <div>
                  <h3>Development</h3>
                  <h1 className="number">35</h1>
                </div>
              </div>
            </div>

            {/* Card for AI/ML */}
            <div className="card">
              <div className="card-inner">
                <div className="icon-circle" style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)' }}> {/* Faint red background */}
                  <MdBarChart size={40} color="red" />
                </div>
                <div>
                  <h3>AI/ ML</h3>
                  <h1 className="number">35</h1>
                </div>
              </div>
            </div>

            {/* Card for Marketing */}
            <div className="card">
              <div className="card-inner">
                <div className="icon-circle" style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)' }}> {/* Faint green background */}
                  <MdBarChart size={40} color="green" />
                </div>
                <div>
                  <h3>Marketing</h3>
                  <h1 className="number">35</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining containers as placeholders */}
        <div className="sub-container sub2">
          <WeeklyProduction />
        </div>
        <div className="sub-container sub3">
          <Production />
        </div>
        <div className="sub-container sub4">
          <TwoWaveChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
