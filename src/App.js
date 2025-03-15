
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddTask  from './components/tasks/AddTask'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addTask" element={<AddTask/>}/>
        
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;