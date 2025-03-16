
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import AddTask  from './components/tasks/AddTask'; 
import ViewTask from './components/tasks/ViewTask';
import Navbar from './components/common/Navbar';
import Header from './components/common/Header';

function App() {
  return (
    
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addTask" element={<AddTask/>}/>
        <Route path="/viewTask" element={<ViewTask/>} />

        </Routes>
      </Router>
  );
}

export default App;