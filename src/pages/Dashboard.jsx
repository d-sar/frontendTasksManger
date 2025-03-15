// src/pages/Dashboard.js
import React from 'react';

import useAuth from '../hooks/useAuth';
import Navbar from '../components/common/Navbar';
import Home from './Home';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    
      <div>

  <Navbar />
  <Home/>
</div>

   
    
  );
};

export default Dashboard;