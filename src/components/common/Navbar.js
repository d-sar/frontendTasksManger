import React from 'react'
import '../../styles/Navbar.css'


export default function() {
        
    return (
        <div>
            <div className="sidebar">
               
                <nav className="nav flex-column">
                    <a className="nav-link active" href="#">taks</a>
                    <a className="nav-link" href="#">Contact</a>
                    <a className="nav-link" href="/addTask">Add Task</a>
                  
    
                </nav>
            </div>
          
        </div>
    )
}
