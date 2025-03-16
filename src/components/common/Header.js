import React from 'react';
import '../../styles/Header.css';

export default function Header() {
    return (
        <header style={{ backgroundColor: '#112D4E', padding: '20px 20px', color: '#fff', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ margin: 0 }}>Tasks Manager</h1>
                <nav>
                    <a href="#tasks" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}></a>
                    <a href="#contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Contact</a>
                    <a href="/addTask" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}></a>
                </nav>
            </div>
        </header>
    );
}
