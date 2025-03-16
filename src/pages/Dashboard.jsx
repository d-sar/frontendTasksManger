// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/common/Navbar';
import Home from './Home';
import Header from '../components/common/Header';


const Dashboard = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Home/>
    </div>
  );
};

export default Dashboard;