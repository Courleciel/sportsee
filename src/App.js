import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import HorizontalNavbar from './components/HorizontalNavbar/index';
import VerticalNavbar from './components/VerticalNavbar';
import UserDetails from './components/UserDetails/UserDetails';
import UserActivityChart from './components/UserActivityChart/UserActivityChart';
import UserAverageSessionsChart from './components/UserAverageSessionsChart/UserAverageSessionsChart';
import UserPerformanceChart from './components/UserPerformanceChart/UserPerformanceChart';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <VerticalNavbar />
        <div className="main-content">
          <HorizontalNavbar />
          <Routes>
            <Route path="/user/:id" element={<UserDetailsWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const UserDetailsWrapper = () => {
  const { id } = useParams();
  return (
    <div>
      <UserDetails userId={id} />
      <UserActivityChart userId={id} />
      <div className="charts-container">
      <UserAverageSessionsChart userId={id} />
      <UserPerformanceChart userId={id} />
      </div>
    </div>
  );
};

export default App;
