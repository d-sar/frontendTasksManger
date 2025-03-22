import React from  "react";
import '../../styles/Navbar.css'


export default function() {

        
    return (
        <div className="test" >
            <div className="sidebar" >
                <nav className="nav flex-column">
                <a className="nav-link active" href="/dashboard" >Home</a>
                    <a  className="nav-link active"  href="/viewTask">Task List</a>
                    <a className="nav-link" href="#"></a>
                    <a className="nav-link" href="/addTask">Add Task</a>
                </nav>
            </div>
        </div>
    )
}
