import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Icon from './icon.jsx';


function NavBar({ setCurrentPage }) {
    const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position: 'fixed', top: '0', left: '0', right: '0', zIndex: '1000', width: '100%'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
      <Icon />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ms-5">
          <a className="nav-link active" aria-current="page" href="#" onMouseEnter={() => setHoveredItem('home')} onMouseLeave={() => setHoveredItem(null)} style={{backgroundColor: hoveredItem === 'home' ? 'grey' : 'transparent'}} onClick={() => setCurrentPage('home')}>Home</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="#" onMouseEnter={() => setHoveredItem('skills')} onMouseLeave={() => setHoveredItem(null)} style={{backgroundColor: hoveredItem === 'skills' ? 'grey' : 'transparent'}} onClick={() => setCurrentPage('skills')}>Education</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="#" onMouseEnter={() => setHoveredItem('workExperience')} onMouseLeave={() => setHoveredItem(null)} style={{backgroundColor: hoveredItem === 'workExperience' ? 'grey' : 'transparent'}} onClick={() => setCurrentPage('workExperience')}>Work Experience</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="#" onMouseEnter={() => setHoveredItem('projects')} onMouseLeave={() => setHoveredItem(null)} style={{backgroundColor: hoveredItem === 'projects' ? 'grey' : 'transparent'}} onClick={() => setCurrentPage('projects')}>Projects</a>
        </li>
         <li className="nav-item ms-5">
          <a className="nav-link" href="#" onMouseEnter={() => setHoveredItem('interests')} onMouseLeave={() => setHoveredItem(null)} style={{backgroundColor: hoveredItem === 'interests' ? 'grey' : 'transparent'}} onClick={() => setCurrentPage('interests')}>Interests/Involvement</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="#" onMouseEnter={() => setHoveredItem('contact')} onMouseLeave={() => setHoveredItem(null)} style={{backgroundColor: hoveredItem === 'contact' ? 'grey' : 'transparent'}} onClick={() => setCurrentPage('contact')}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
};

export default NavBar;